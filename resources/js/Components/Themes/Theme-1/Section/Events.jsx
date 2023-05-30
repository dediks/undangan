import React from "react";
import { MdLocationPin } from "react-icons/md";

const Events = ({ data }) => {
    console.log(data);
    const events = data.event;
    return (
        <section className="px-4 flex flex-col space-y-8 md:space-y-16 md:px-16 md:py-24">
            {events.map((event, key) => (
                <div
                    key={event.id}
                    className="shadow-2xl relative w-full h-full rounded-3xl"
                >
                    <div
                        style={{
                            backgroundImage: `url(${"/storage/assets/theme-1/background-akad.jpg"})`,
                        }}
                        className="absolute top-0 left-0 w-full h-full opacity-30"
                    ></div>
                    <div className="flex flex-col items-center space-y-6 py-12 px-4">
                        <h1 className="font-dream_avenue text-5xl text-center">
                            {event.title}
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
                        <div className="mt-8 inline-flex justify-center items-center space-x-2 text-white text-xl bg-amber-400 rounded-full px-8 py-4">
                            <MdLocationPin />
                            <span>Kunjungi via Gmaps</span>
                        </div>
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
