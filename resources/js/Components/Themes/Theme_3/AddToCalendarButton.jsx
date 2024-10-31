import clsx from "clsx";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { TiCalendarOutline } from "react-icons/ti";

export default function AddToCalendarButton({ children, className }) {
    return (
        <button
            className={clsx(
                className,
                `flex items-center text-base space-x-2 px-4 py-2`
            )}
        >
            {/* <TiCalendarOutline /> */}
            <span>{children}</span>
        </button>
    );
}
