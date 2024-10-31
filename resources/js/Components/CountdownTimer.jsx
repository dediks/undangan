import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "@/Hooks/useCountdown";

const ExpiredNotice = () => {
    return (
        <div className="text-center my-5 animate-pulse font-bold px-4 py-2 border-2 rounded-full border-black/20">
            <span>Acara sudah selesai!</span>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="flex space-x-4">
            <DateTimeDisplay value={days} type={"Hari"} isDanger={days <= 3} />
            <DateTimeDisplay value={hours} type={"Jam"} isDanger={false} />
            <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
            <DateTimeDisplay
                value={seconds}
                type={"Seconds"}
                isDanger={false}
            />
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
