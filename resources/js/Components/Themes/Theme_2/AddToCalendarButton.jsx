import clsx from "clsx";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

export default function AddToCalendarButton({ children, className }) {
    return (
        <button
            className={clsx(
                className,
                `flex items-center text-base space-x-2 px-2 py-1 rounded-md border-4 border-gray-100`
            )}
        >
            <BsFillCalendar2CheckFill />
            <span>{children}</span>
        </button>
    );
}
