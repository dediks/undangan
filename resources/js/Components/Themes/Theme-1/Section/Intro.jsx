import { usePage } from "@inertiajs/react";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Intro = () => {
    const data = usePage().props.data;
    const cover = data.cover;

    return (
        <section
            className="bg-cover md:py-10 w-full min-h-screen flex justify-center items-center px-3"
            style={{
                backgroundImage: `url('storage/assets/theme-1/back-intro.png')`,
            }}
        >
            <div className="w-full">
                <img
                    className="md:w-32 w-20 mx-auto"
                    src="/storage/assets/theme-1/top.png"
                />
                <h1 className="md:mt-6 mt-4  md:text-5xl font-bold text-yellow-500 font-hand text-4xl text-center">
                    The Wedding of
                </h1>
                <div className="rounded-b-full md:py-6 mx-auto mt-6 relative flex justify-center items-center md:w-2/6 md:h-2/6  w-4/6 h-4/6">
                    <img
                        className="absolute z-2 w-11/12 h-full aspect-square"
                        src={`/storage/assets/theme-1/border-1.gif`}
                    />
                    <img
                        className="z-1 p-3 sm:p-2 md:p-3 bg-center object-cover w-10/12 md:w-9/12 aspect-square rounded-t-full rounded-b-2xl md:rounded-b-3xl"
                        src={`/storage/images/${cover.background_image}`}
                    />
                </div>
                <div className="text-center text-4xl flex justify-center space-x-2 mt-6 font-dream_avenue">
                    <span className="">Naim</span>
                    <span className="">&</span>
                    <span className="">Luyyina</span>
                </div>
                <div className="mt-6 md:mt-10 relative mx-auto flex items-center justify-center">
                    <img
                        className="absolute h-10 md:h-12 w-9/12 md:w-5/12"
                        src="/storage/assets/theme-1/border-3.png"
                    />
                    <div className="rounded-3xl py-2 text-xl flex">
                        <span>Minggu</span>
                        <span>, 2 Juli 2023</span>
                    </div>
                </div>
                <div className="text-neutral-600 text-center font-hazelnuts my-6 px-16">
                    Terimakasih telah menjadi bagian di hari istimewa kami
                </div>
                <div className="animate-bounce mt-16 flex flex-col items-center">
                    <div className="text-neutral-400 border-2 rounded-3xl px-4 py-1">
                        Scroll ke bawah
                    </div>
                    <MdKeyboardArrowDown className="text-neutral-400 mt-2" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
