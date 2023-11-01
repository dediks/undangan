import { coverVariants, scrollMotionVariants } from "@/Libs/motion";
import { motion } from "framer-motion";
import getTitle from "@/Helpers/getTitle";
import { getSectionTitle } from "@/Helpers/invitation";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { getDateInWord } from "@/Helpers/getDate";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";

const Cover = ({
    loading,
    data,
    cover = {
        showCover: false,
    },
    isPreview = false,
    setPlayMusic,
}) => {
    const guest = usePage().props.data?.to;

    return (
        <section
            style={{
                backgroundImage: `url(/storage/images/${data.cover.background_image})`,
            }}
            className={clsx(
                isPreview ? "max-h-screen" : "min-h-screen",
                cover?.showCover ? "fixed" : "relative rounded-t-xl",
                `rounded-t-3xl w-full z-10 bg-cover bg-no-repeat bg-local bg-center flex flex-col justify-between h-full`
            )}
        >
            <div
                className={clsx(
                    isPreview ? "max-h-screen" : "min-h-screen",
                    `absolute w-full h-full  bg-black/50`
                )}
            ></div>
            <div
                className={clsx(
                    isPreview ? "max-h-screen" : "min-h-screen ",
                    `w-full absolute flex items-center flex-col justify-between py-36 md:py-16 xl:py-24 2xl:py-48`
                )}
            >
                <motion.div
                    className="text-center text-gray-200 flex flex-col space-y-1 px-3"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div
                        variants={coverVariants}
                        className={clsx(isPreview ? "" : "")}
                    >
                        <div
                            className={clsx(
                                isPreview
                                    ? "md:text-base xl:text-xl"
                                    : "md:text-lg xl:text-2xl",
                                "text-base text-gray-300 font-light"
                            )}
                        >
                            {getSectionTitle("cover", data.cover.title)}
                        </div>
                        <div className="md:mt-2">
                            <span
                                className={clsx(
                                    isPreview
                                        ? "md:text-base  xl:text-xl"
                                        : "md:text-2xl  xl:text-4xl",
                                    "font-hazelnuts text-xl font-bold md:font-dream_avenue"
                                )}
                            >
                                {getTitle(
                                    data.bridegroom.bride,
                                    data.bridegroom.groom
                                )}
                            </span>
                        </div>
                        <div className="text-base md:pt-4">
                            {getDateInWord(data.cover.date)}
                        </div>
                    </motion.div>
                </motion.div>
                <div className="text-gray-200 text-center">
                    {guest && (
                        <>
                            <div className="text-sm">Kepada</div>
                            <div className="mt-2 mb-1 text-xl py-2">
                                {guest.fullname}
                            </div>
                        </>
                    )}

                    {cover.showCover && (
                        <button
                            onClick={() => {
                                cover.handleOpenCover();
                            }}
                            className="hover:bg-gray-200 rounded flex items-center space-x-2 px-5 py-2 bg-gray-200/80 text-gray-800"
                        >
                            {loading ? (
                                <>
                                    <CgSpinner className="animate-spin" />
                                    <span className="animate-pulse">
                                        Sedang Memuat..
                                    </span>
                                </>
                            ) : (
                                <>
                                    <BsFillEnvelopeOpenFill />
                                    <span className="font-semibold">
                                        Open Invitation
                                    </span>
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cover;
