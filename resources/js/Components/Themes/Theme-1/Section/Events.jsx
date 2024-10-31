import useDate from "@/Hooks/useDate";
import React from "react";
import { MdLocationPin } from "react-icons/md";

const Events = ({ data }) => {
    const events = data.events;
    return (
        <section className="p-8 justify-center xl:space-x-16 flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5">
            {events.map((event, key) => (
                <div
                    key={event.id}
                    className="flex flex-col justify-center shadow-2xl relative rounded-3xl bg-no-repeat bg-right-top bg-cover"
                    style={{
                        backgroundImage: `url(${"/storage/assets/theme-1/background-akad.jpg"})`,
                    }}
                >
                    <div className="z-10 absolute inset-0 bg-gray-100/60 mix-blend-lighten"></div>
                    <div className="z-50 abasolute inset-0 flex flex-col items-center space-y-9 py-12 px-4">
                        <h1 className="font-dream_avenue text-5xl text-center">
                            {event.title}
                        </h1>
                        <div className="w-full">
                            <img
                                className="w-3/12 mx-auto"
                                src="/storage/assets/theme-1/akad-nikah.png"
                                width={120}
                            />
                            <div className="mt-8 text-center flex flex-col space-y-2">
                                <p className="text-3xl font-hazelnuts font-semibold text-gray-500">
                                    {useDate(event.start).date}
                                </p>
                                <span className="text-amber-600 font-medium text-lg">
                                    {useDate(event.start).time} - Selesai
                                </span>
                            </div>
                        </div>
                        <div className="w-full">
                            <img
                                className="mx-auto w-3/12"
                                src="/storage/assets/theme-1/location.webp"
                                width={80}
                            />
                            <div className="mt-8 text-center flex flex-col space-y-2">
                                <p className="text-3xl text-gray-500 font-hazelnuts font-semibold">
                                    {event.location}
                                </p>
                                <span className="text-amber-700/50 text-lg font-semibold py-4 px-2 md:px-8">
                                    {event.description}
                                </span>
                            </div>
                        </div>
                        <a
                            href={event.map_link}
                            target="_blank"
                            className="bg-pink-800/40  hover:bg-pink-800/60 z-2 mx-auto inline-flex justify-center items-center space-x-2 text-gray-50 font-bold text-xl rounded-full px-8 py-4"
                        >
                            <MdLocationPin />
                            <span>Kunjungi via Gmaps</span>
                        </a>
                    </div>
                </div>
            ))}

            {/* <div
                className="shadow-2xl relative bg-black w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
                style={{
                    backgroundImage: `url(${"/storage/assets/theme-1/background-akad.jpg"})`,
                }}
            >
                <div className="flex flex-col items-center space-y-6 py-12 px-4">
                    <h1 className="font-dream_avenue text-5xl text-center">
                        Akad Nikah
                    </h1>
                    <img
                        className=""
                        src="/storage/assets/theme-1/akad-nikah.png"
                        width={120}
                    />
                    <div className="text-center flex flex-col space-y-2">
                        <p className="text-3xl font-hazelnuts font-semibold">
                            Kamis, 25 Mei 2023
                        </p>
                        <span className="text-amber-600 font-medium">
                            08.00 WIB - Selesai
                        </span>
                    </div>
                    <img
                        src="/storage/assets/theme-1/location.webp"
                        width={80}
                    />
                    <div className="text-center flex flex-col space-y-2">
                        <p className="text-3xl font-hazelnuts font-semibold">
                            Masjid Agung Jakarta
                        </p>
                        <span className="text-amber-600 font-medium">
                            Jl. Percetakan Negara 29, DKI Jakarta.
                        </span>
                    </div>
                    <div className="mt-8 inline-flex justify-center items-center space-x-2 text-gray-50 text-xl bg-amber-500 rounded-full px-8 py-4">
                        <MdLocationPin />
                        <span>Kunjungi via Gmaps</span>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Events;
