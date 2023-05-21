import React from "react";
import { MdCalendarMonth } from "react-icons/md";

export const Calendar = () => {
    return (
        <section className="bg-orange-50 py-10">
            <div className="font-hazelnuts text-2xl text-center text-gray-500">
                Rangkaian Acara Akan Diselenggarakan
            </div>
            <div className="mt-10 relative flex items-center justify-center">
                <img
                    className="w-8/12 absolute"
                    src="/storage/assets/theme-1/date-border.png"
                />
                <span className="font-dream_avenue text-3xl px-36">
                    Kamis, 25 Mei 2023
                </span>
            </div>
            <div className="mt-24 text-center">
                <div className="text-2xl text-center font-hazelnuts">
                    Hitung Mundur Acara Resepsi
                </div>
                <div className="mt-6 flex space-x-4 justify-center px-6">
                    <div className="w-3/12 bg-gray-400 p-4 rounded-3xl text-center">
                        <span className="block text-3xl font-hazelnuts">1</span>
                        <span className="text-xl text-gray-100"> Hari</span>
                    </div>
                    <div className="w-3/12 bg-gray-400 p-4 rounded-3xl text-center">
                        <span className="block text-3xl font-hazelnuts">1</span>
                        <span className="text-xl text-gray-100"> Jam</span>
                    </div>
                    <div className="w-3/12 bg-gray-400 p-4 rounded-3xl text-center">
                        <span className="block text-3xl font-hazelnuts">1</span>
                        <span className="text-xl text-gray-100"> Menit</span>
                    </div>
                    <div className="w-3/12 bg-gray-400 p-4 rounded-3xl text-center">
                        <span className="block text-3xl font-hazelnuts">1</span>
                        <span className="text-xl text-gray-100"> Detik</span>
                    </div>
                </div>
                <div className="mt-8 inline-flex justify-center items-center space-x-2 text-gray-100 text-xl bg-amber-600 rounded-full px-8 py-4">
                    <MdCalendarMonth />
                    <span>Simpan Acara ke Kalender</span>
                </div>
            </div>
        </section>
    );
};
