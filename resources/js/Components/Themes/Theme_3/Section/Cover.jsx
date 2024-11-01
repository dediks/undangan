import { coverVariants, scrollMotionVariants } from "@/Libs/motion";
import { AnimatePresence, motion } from "framer-motion";
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
        <>
            <motion.section
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    backgroundImage: `url(/storage/images/${data.cover.background_image})`,
                }}
                className={clsx(
                    isPreview ? "max-h-screen" : "h-[101vh] min-h-screen",
                    cover?.showCover ? "fixed" : "relative xl:rounded-t-3xl",
                    `w-full z-10 bg-cover bg-no-repeat bg-local bg-center flex flex-col justify-between h-full`
                )}
            >
                <div
                    className={clsx(
                        isPreview ? "max-h-screen" : "min-h-screen",
                        cover?.showCover ? "" : `xl:rounded-t-3xl`,
                        `absolute w-full h-full  bg-black/50`
                    )}
                ></div>
                <div
                    className={clsx(
                        isPreview ? "max-h-screen" : "min-h-screen",
                        `w-full absolute flex items-center flex-col justify-between py-36 md:py-16 xl:py-24 2xl:py-48`
                    )}
                >
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={coverVariants}
                        className="text-center text-gray-200 flex flex-col space-y-1 px-3"
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
                                    "font-mono text-3xl font-bold"
                                )}
                            >
                                {getTitle(
                                    data.bridegroom.bride,
                                    data.bridegroom.groom
                                )}
                            </span>
                        </div>
                        <div className="text-sm pt-2 md:pt-4 text-gray-50/90">
                            {getDateInWord(data.cover.date)}
                        </div>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={coverVariants}
                        className="text-gray-200 text-center"
                    >
                        {guest && (
                            <>
                                <div className="text-sm text-gray-100/80">
                                    Kepada
                                </div>
                                <div className="mt-2 mb-1 text-xl py-2">
                                    {guest.fullname}
                                </div>
                            </>
                        )}

                        {cover.showCover && (
                            <button
                                type="button"
                                onClick={() => {
                                    cover.handleOpenCover();
                                }}
                                className="rounded hover:bg-red-900/80 border flex items-center space-x-2 px-5 py-2 bg-red-800/50 text-gray-100"
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
                                        <span className="font-mono">
                                            Open Invitation
                                        </span>
                                    </>
                                )}
                            </button>
                        )}
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default Cover;
