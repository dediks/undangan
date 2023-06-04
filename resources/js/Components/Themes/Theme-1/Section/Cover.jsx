import useQueryParams from "@/Hooks/useQueryParams";
import { AnimatePresence, motion } from "framer-motion";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { coverVariants } from "@/Libs/motion";

const show = {
    opacity: 1,
    duration: 3,
};

const hide = {
    opacity: 0,
    duration: 2,
    transitionEnd: {
        display: "none",
    },
};

const Cover = ({ setShowCover, toggle, setIsFullscreen }) => {
    const data = usePage().props.data;
    const cover = usePage().props.data.cover;
    const guest = usePage().props.data.to;

    const [isVisible, setIsVisible] = useState(true);

    return (
        <section
            className={`z-50 relative w-full bg-cover bg-center min-h-screen bg-slate-900 flex justify-center items-center`}
            style={{
                backgroundImage: `url(/storage/images/${cover.background_image})`,
            }}
        >
            <div className="absolute bg-slate-800 w-full h-full opacity-50"></div>
            <div className="text-center relative">
                <motion.div
                    className="w-full"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div variants={coverVariants}>
                        <div
                            className="mb-10 w-full text-center py-4 px-2 flex-col space-y-2
            "
                        >
                            <div className="font-hand text-gray-300 font-bold text-2xl md:text-4xl">
                                The Wedding of
                            </div>
                            <div className="text-gray-100 w-full py-6 justify-center flex space-x-2 text-center text-2xl">
                                <span className="font-dream_avenue text-5xl md:text-9xl">
                                    {data.groom_nickname}
                                </span>
                                <span className="font-dream_avenue text-5xl md:text-9xl">
                                    &
                                </span>
                                <span className="font-dream_avenue text-5xl md:text-9xl">
                                    {data.bride_nickname}
                                </span>
                            </div>
                        </div>
                        <div>
                            {guest && (
                                <div className="text-gray-100 border border-neutral-400 py-4 rounded-lg">
                                    <div>Teruntuk :</div>
                                    <div className="md:mt-5 md:text-3xl text-2xl font-hazelnuts">
                                        {guest.fullname == "" ||
                                        guest.fullname != null
                                            ? guest.fullname.toUpperCase()
                                            : guest.nickname.toUpperCase()}
                                    </div>
                                </div>
                            )}

                            <a
                                onClick={() => {
                                    setIsVisible(false);
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Cover;
