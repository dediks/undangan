import AddToCalendarButton from "./AddToCalendarButton";
import { scrollMotionVariants } from "@/Libs/motion";
import { motion } from "framer-motion";
import { useCountdown } from "@/Hooks/useCountdown";
import CountdownTimer from "./CountdownTimer";

const month_in_number = {
    Januari: 1,
    Februari: 2,
    Maret: 3,
    April: 4,
    Mei: 5,
    Juni: 6,
    Juli: 7,
    Agustus: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12,
};

export default function CountingDown({ data }) {
    let dateTime = data.events[0]?.start?.split(" ");
    let date = dateTime[0].split("-");
    let time = dateTime[1];
    let day = date[2];
    let month = date[1];
    let year = date[0];

    let month_in_indonesia = month_in_number[month];
    const target_date = new Date(`${month}/${day}/${year}`).getTime();
    const [days, hours, minutes, seconds] = useCountdown(target_date);

    return (
        <>
            <motion.div
                className="w-full"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={scrollMotionVariants}>
                    <div className="flex space-x-5 justify-center mt-5">
                        <CountdownTimer targetDate={target_date} />
                    </div>
                    {days + hours + minutes + seconds > 0 && (
                        <div className="w-full flex justify-center">
                            <AddToCalendarButton
                                data={data}
                                day={day}
                                month={month}
                                year={year}
                                className="mx-auto mt-10 text-lg px-4 py-2 bg-gray-600 rounded-lg text-white"
                            />
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}
