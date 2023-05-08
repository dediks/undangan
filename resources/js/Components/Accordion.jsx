import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const Accordion = ({ title, content, defaultState }) => {
    const [isActive, setIsActive] = useState(defaultState);

    return (
        <div className="w-100 mb-4 overflow-y-hidden">
            <div
                className=" flex justify-between items-center cursor-pointer bg-gray-50 text-gray-600 border rounded-md shadow-sm text-xl font-semibold p-4"
                onClick={(e) => {
                    e.preventDefault();
                    setIsActive(!isActive);
                }}
            >
                <div>{title}</div>

                <span
                    className={`${isActive && "rotate-180 "}
                        ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`h-6 w-6`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </span>
            </div>
            {isActive && (
                <div className="px-4 py-8 transition-all duration-1000 ease-in-out -translate-y-5">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Accordion;
