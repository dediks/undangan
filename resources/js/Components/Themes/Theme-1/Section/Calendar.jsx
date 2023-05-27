import CountingDown from "@/Components/CountingDown";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";

export const Calendar = ({ data }) => {
    return (
        <section className="bg-orange-50 py-10">
            <div className="font-hazelnuts text-2xl text-center text-gray-500">
                Rangkaian Acara Akan Diselenggarakan
            </div>
            <div className="mt-16 relative flex items-center justify-center">
                <img
                    className="w-9/12 absolute"
                    src="/storage/assets/theme-1/date-border.png"
                />
                <span className="font-dream_avenue text-3xl">
                    Kamis, 25 Mei 2023
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
