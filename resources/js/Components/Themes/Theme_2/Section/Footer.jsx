import { usePage } from "@inertiajs/react";
import React from "react";
import { MdOutlineWhatsapp, MdWhatsapp } from "react-icons/md";

const Footer = () => {
    const data = usePage().props.data;
    return (
        <section
            className="text-gray-300/80 text-center mt-16 lg:mt-32 bg-center bg-cover"
            style={{
                backgroundImage: `url(storage/images/${data.cover.background_image})`,
            }}
        >
            <div className="pt-16 md:pt-48 backdrop-opacity-50 bg-black/60">
                <div className="text-center text-base md:text-xl px-16">
                    Terimakasih
                </div>
                <div className="text-center text-base md:text-xl px-16 mt-2 leading-snug md:leading-normal">
                    Kami yang berbahagia, <br />
                    Keluarga besar dari kedua mempelai
                </div>
                <div className="mt-10 md:mt-24 text-center justify-center flex items-center mx-auto w-full space-x-3">
                    <span className="font-hazelnuts text-3xl md:text-5xl">
                        Chandra
                    </span>
                    <span className="">&</span>
                    <span className="font-hazelnuts text-3xl md:text-5xl">
                        Tommy
                    </span>
                </div>
                <div className="h-48 md:h-96 mt-64 md:mt-80 flex space-y-10 items-center flex-col w-full text-gray-50">
                    <span className="font-hazelnuts text-gray-300/80">
                        Made With Love By
                        <br />
                        ourmarry.com
                    </span>
                    <a
                        className="flex-initial w-8 border hover:bg-gray-200/20 border-gray-300/80 p-2 rounded-full"
                        href="https://wa.me/+6281553010422"
                    >
                        <MdOutlineWhatsapp className="text-gray-300/80" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;