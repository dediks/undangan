import { Calendar } from "@/Components/Themes/Theme-1/Section/Calendar";
import Couple from "@/Components/Themes/Theme-1/Section/Couple";
import Events from "@/Components/Themes/Theme-1/Section/Events";
import React from "react";

const Themes_1 = ({ data }) => {
    const cover = data.cover;
    console.log(data);

    return (
        <>
            <section className="w-full min-h-screen flex justify-center items-center px-3">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-hand text-4xl text-center">
                        The Wedding of
                    </h1>
                    <div className="mt-6 relative flex justify-center items-center w-3/6 h-3/6">
                        <img
                            className="absolute z-2 w-11/12 h-full aspect-square"
                            src={`/storage/assets/theme-1/border-1.gif`}
                        />
                        <img
                            className="z-1 p-1 sm:p-2 md:p-3 bg-center object-cover w-10/12 aspect-square rounded-t-full rounded-b-xl"
                            src={`/storage/images/${cover.background_image}`}
                        />
                    </div>
                    <div className="text-2xl flex space-x-2 mt-4">
                        <span>Naim</span>
                        <span>&</span>
                        <span>Luyyina</span>
                    </div>
                    <div className="border-2 px-6 rounded-3xl py-2 text-xl flex space-x-2 mt-4">
                        <span>Minggu</span>
                        <span>, 2 Juli 2023</span>
                    </div>
                    <div className="text-center font-hazelnuts my-6 px-16">
                        Terimakasih telah menjadi bagian di hari istimewa kami
                    </div>
                    <div className="border-2 rounded-3xl px-4 py-1">
                        Scroll ke bawah
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center px-3">
                <div className="flex flex-col text-center space-y-4">
                    <h2 className="font-dream_avenue text-3xl font-extralight text-gray-500">
                        Qs Az Zariyat:49
                    </h2>
                    <div className="leading-relaxed font-arslan font-extralight text-5xl text-amber-500">
                        وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ
                        تَذَكَّرُونَ
                    </div>
                    <p className="font-thin text-xl text-gray-500">
                        “Dan segala sesuatu Kami ciptakan berpasang-pasangan
                        supaya kamu mengingat kebesaran Allah.”
                    </p>
                </div>
            </section>
            <Couple data={data} />
            <Calendar />
            <Events />
        </>
    );
};
export default Themes_1;
