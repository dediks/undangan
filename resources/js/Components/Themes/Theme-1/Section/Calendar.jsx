import CountingDown from "@/Components/CountingDown";
import useDate from "@/Hooks/useDate";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";

export const Calendar = ({ data }) => {
    return (
        <section className="bg-orange-50 py-10 md:py-24">
            <div className="font-hazelnuts text-2xl text-center text-gray-500">
                Rangkaian Acara Akan Diselenggarakan
            </div>
            <div className="text-center mt-16 relative flex items-center justify-center">
                <img
                    className="w-9/12 md:w-5/12 h-36 absolute"
                    src="/storage/assets/theme-1/date-border.png"
                />
                <span className="px-24 md:px-10 font-dream_avenue text-3xl">
                    {useDate(data.event[0].start).date}
                </span>
            </div>
            <div className="mt-20 text-center">
                <div className="text-2xl text-center font-hazelnuts">
                    Hitung Mundur Acara Resepsi
                </div>
                <CountingDown data={data} />
            </div>
        </section>
    );
};
