import clsx from "clsx";
import React from "react";

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

export default DateTimeDisplay;
