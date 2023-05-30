import React from "react";
import { FaInstagram } from "react-icons/fa";

const LiveStreaming = () => {
    return (
        <section className="p-4 md:px-12 mt-16 h-min">
            <h1 className="font-hazelnuts text-center text-4xl">
                Live Streaming
            </h1>

            <div className="relative w-full h-full py-10 mt-10 md:mt-16 text-center rounded-xl shadow-2xl">
                <div className="w-full h-full rounded-xl">
                    <span className="font-hand text-4xl font-semibold text-amber-500">
                        The wedding of
                    </span>
                    <div className="mt-6 font-dream_avenue text-5xl text-black font-medium">
                        Naim & Luyyina
                    </div>
                    <div className="mt-4 text-lg">25 Mei 2023 / 08.30 WIB</div>
                    <div className="text-xl">
                        Instagram{" "}
                        <span className="font-semibold font-hazelnuts">
                            @naim
                        </span>
                    </div>
                    <button className="mt-10 items-center inline-flex space-x-2 text-gray-50 text-2xl rounded-lg px-4 py-3 bg-gradient-to-b from-purple-700 to-orange-500">
                        <FaInstagram className="w-6 h-6 text-gray-50" />
                        <span>Live Instagram</span>
                    </button>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${"/storage/assets/theme-1/background-akad.jpg"})`,
                    }}
                    className="absolute top-0 left-0 w-full h-full opacity-30 rounded-xl"
                ></div>
            </div>
        </section>
    );
};

export default LiveStreaming;
