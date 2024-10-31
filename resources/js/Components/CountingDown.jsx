import { scrollMotionVariants } from "@/Libs/motion";
import { motion } from "framer-motion";
import { useCountdown } from "@/Hooks/useCountdown";
import { getTime } from "@/Helpers/getDate";
import clsx from "clsx";
import { usePage } from "@inertiajs/react";

export default function CountingDown({ data, children }) {
    const target_date = getTime(data);
    const { invitation } = usePage().props;

    const renderShowCounter = () => {
        switch (invitation.theme_id) {
            case "Theme_1":
            case "Theme_2":
        }
    };

    return (
        <div>
            {target_date >= getToday() ? (
                <CountdownTimer targetDate={target_date} />
            ) : (
                <ExpiredNotice />
            )}
        </div>
    );
}

const getToday = () => {
    return new Date().getTime();
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className="rounded-xl border py-2 px-4">
            <div
                className={clsx(
                    isDanger ? "text-red-800" : "text-black",
                    "flex flex-col items-center font-sans text-yellow-700 bg-amber-50 border-2 border-amber-200 p-4 rounded-3xl text-center"
                )}
            >
                <p className="text-3xl font-hazelnuts">{value}</p>
                <span className="text-xl text-neutral-800 font-medium px-5">
                    {type}
                </span>
            </div>
        </div>
    );
};

const DateTimeDisplayTheme2 = ({ value, type, isDanger }) => {
    return (
        <div className="flex flex-col items-center">
            <span>{value}</span>
            <span>{type}</span>
        </div>
    );
};

const ExpiredNotice = () => {
    return (
        <div className="text-center my-5 animate-pulse font-bold px-4 py-2 border-2 rounded-full border-black/20">
            <span>Acara sudah selesai!</span>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    const { data, invitation } = usePage().props;

    const renderShowCounter = () => {
        const theme_id = invitation?.theme_id
            ? invitation.theme_id
            : data.theme_id;
        switch (theme_id) {
            case "Theme_1":
                return (
                    <>
                        <DateTimeDisplay
                            value={days}
                            type={"Days"}
                            isDanger={days <= 3}
                        />
                        <DateTimeDisplay
                            value={hours}
                            type={"Hours"}
                            isDanger={false}
                        />
                        <DateTimeDisplay
                            value={minutes}
                            type={"Mins"}
                            isDanger={false}
                        />
                        <DateTimeDisplay
                            value={seconds}
                            type={"Seconds"}
                            isDanger={false}
                        />
                    </>
                );
            case "Theme_2":
                return (
                    <>
                        <DateTimeDisplayTheme2
                            value={days}
                            type={"Hari"}
                            isDanger={days <= 3}
                        />
                        <DateTimeDisplayTheme2
                            value={hours}
                            type={"Jam"}
                            isDanger={false}
                        />
                        <DateTimeDisplayTheme2
                            value={minutes}
                            type={"Mins"}
                            isDanger={false}
                        />
                        <DateTimeDisplayTheme2
                            value={seconds}
                            type={"Seconds"}
                            isDanger={false}
                        />
                    </>
                );
            case "Theme_3":
                return (
                    <div className="flex md:space-x-4 space-x-2 justify-center py-4">
                        <div className="px-6  bg-black/50 py-4 text-gray-100 ">
                            <DateTimeDisplayTheme2
                                value={days}
                                type={"Hari"}
                                isDanger={days <= 3}
                            />
                        </div>
                        <div className="px-6  bg-black/50 py-4 text-gray-100">
                            <DateTimeDisplayTheme2
                                value={hours}
                                type={"Jam"}
                                isDanger={false}
                            />
                        </div>
                        <div className="px-6  bg-black/50 py-4 text-gray-100">
                            <DateTimeDisplayTheme2
                                value={minutes}
                                type={"Mins"}
                                isDanger={false}
                            />
                        </div>
                        <div className="px-6 text-gray-100 bg-black/50 py-4">
                            <DateTimeDisplayTheme2
                                value={seconds}
                                type={"Seconds"}
                                isDanger={false}
                            />
                        </div>
                    </div>
                );
        }
    };

    return <div>{renderShowCounter()}</div>;
};
