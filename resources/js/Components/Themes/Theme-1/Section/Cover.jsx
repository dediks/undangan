import useQueryParams from "@/Hooks/useQueryParams";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollMotionVariants } from "@/Libs/motion";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
};

const Cover = ({ setShowCover, toggle, setIsFullscreen }) => {
    const cover = usePage().props.data.cover;
    const guest = usePage().props.data.to;
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section
            className={`z-50 relative w-full bg-cover bg-center min-h-screen bg-slate-900 flex justify-center items-center`}
            style={{
                backgroundImage: `url(/storage/images/${cover.background_image})`,
            }}
        >
            <div className="absolute bg-slate-800 w-full h-full opacity-50"></div>
            <div className="text-center relative">
                <div
                    className="mb-10 w-full text-center py-4 px-2 flex-col space-y-2
            "
                >
                    <div className="font-hand text-gray-300 font-bold text-2xl md:text-4xl">
                        The Wedding of
                    </div>
                    <div className="text-gray-100 w-full py-6 justify-center flex space-x-2 text-center text-2xl">
                        <span className="font-dream_avenue text-5xl md:text-9xl">
                            Naim
                        </span>
                        <span className="font-dream_avenue text-5xl md:text-9xl">
                            &
                        </span>
                        <span className="font-dream_avenue text-5xl md:text-9xl">
                            Luyyina
                        </span>
                    </div>
                </div>
                <div>
                    {guest && (
                        <div className="text-gray-100 border border-neutral-400 py-4 rounded-lg">
                            <div>Teruntuk :</div>
                            <div className="md:mt-5 md:text-3xl text-2xl font-hazelnuts">
                                Dedik Sugiharto
                            </div>
                        </div>
                    )}

                    <a
                        onClick={() => {
                            setShowCover(false);
                            toggle();
                            setIsFullscreen(true);
                            document.body.requestFullscreen();
                        }}
                        className="space-x-2 items-center cursor-pointer inline-flex mt-10 font-bold text-gray-100 w-100 py-2 px-3 rounded-lg bg-yellow-600"
                    >
                        <FaEnvelopeOpenText />
                        <span>Buka Undangan</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cover;
