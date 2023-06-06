import React from "react";
import { MdLocationPin, MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { coverVariants, scrollMotionVariants } from "@/Libs/motion";

const Couple = ({ data }) => {
    return (
        <section className="flex justify-center items-center mt-28 px-3 py-10">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-yellow-600 font-arslan text-3xl">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                </h2>
                <span className="mt-4 text-center font-hazelnuts text-lg font-semibold">
                    Assalamu'alaikum Warahmatullahi Wabarakatuh.{" "}
                </span>
                <p className="leading-tight xl:leading-relaxed md:leading-normal xl:px-48 md:px-16 md:py-6 mt-4 text-center md:text-xl text-yellow-500">
                    Maha suci Allah yang telah menciptakan mahluk-Nya
                    berpasang-pasangan. Ya Allah, perkenankanlah kami
                    merangkaikan kasih sayang yang Kau ciptakan diantara kami
                    untuk mengikuti Sunnah Rasul-Mu dalam rangka membentuk
                    keluarga yang sakinah, mawaddah, warahmah.
                </p>
                <div className="flex flex-col px-4 space-y-8 md:space-y-0 md:flex-row md:space-x-4 justify-center items-center lg:h-[750px]">
                    <div className="h-full basis-5/12 flex-auto">
                        <motion.div
                            className=""
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={scrollMotionVariants}
                        >
                            <div className="md:w-6/12 w-11/12 mx-auto mt-6 md:mt-12 relative flex justify-center items-center h-full aspect-[3/4]">
                                <img
                                    className="absolute z-2 w-11/12 h-full aspect-square"
                                    src={`/storage/assets/theme-1/border-2.gif`}
                                />
                                <img
                                    className="z-1 p-3 sm:p-2 h-full md:p-3 bg-center object-cover w-10/12 rounded-t-full rounded-b-full"
                                    src={`/storage/images/${data?.groom_photo}`}
                                />
                            </div>
                        </motion.div>
                        <div className="w-full justify-center flex space-x-2 items-center text-xl mt-8">
                            <MdLocationPin className="text-amber-500 " />
                            <span>Tuban</span>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-6 mt-6">
                            <div className="font-dream_avenue  md:text-8xl text-7xl text-center">
                                {data.groom_nickname ?? "Groom Nickname"}
                            </div>
                            <div className="text-center font-hazelnuts rounded-lg px-4 py-2 text-xl sm:text-2xl bg-amber-100/80 text-gray-600 font-semibold">
                                {data.groom_fullname ?? "Groom Fullname"}
                            </div>
                        </div>
                        <div className="text-center text-amber-600 text-xl mt-6">
                            <div>Putra Pertama Dari Keluarga</div>
                            <div className="">
                                <span>Bapak </span>
                                <span className="font-bold">
                                    {data.groom_father ?? "Groom Father Name"}
                                </span>
                                <span> &amp; Ibu </span>
                                <span className="font-bold">
                                    {data.groom_mother ?? "Groom Mother Name"}
                                </span>
                            </div>
                        </div>
                        <div className="mt-10 flex space-x-3 items-center justify-center">
                            <a
                                href="https://instagram.com/nm.ainun?igshid=OGQ5ZDc2ODk2ZA=="
                                className="p-2 bg-amber-500/80 rounded-full text-gray-200"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            {/* <a className="p-2 bg-amber-500 rounded-full text-gray-200">
                        <MdFacebook className="w-6 h-6" />
                    </a>
                    <a className="p-2 bg-amber-500 rounded-full text-gray-200">
                        <FaTwitter className="w-6 h-6" />
                    </a> */}
                        </div>
                    </div>
                    <div className="basis-2/12 flex items-center justify-center ">
                        <img
                            className="aspect-auto -rotate-6 mx-auto"
                            src="/storage/assets/theme-1/and.png"
                        />
                    </div>
                    <div className="h-full basis-5/12 flex-auto">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={scrollMotionVariants}
                        >
                            <div className="w-11/12 md:w-6/12 mx-auto mt-6 md:mt-12 relative flex justify-center items-center h-full aspect-[3/4]">
                                <img
                                    className="absolute z-2 w-11/12 h-full aspect-square"
                                    src={`/storage/assets/theme-1/border-2.gif`}
                                />
                                <img
                                    className="z-1 p-3 sm:p-2 md:p-3 bg-center h-full object-cover w-10/12 rounded-t-full rounded-b-full"
                                    src={`/storage/images/${data?.bride_photo}`}
                                />
                            </div>
                        </motion.div>

                        <div className="w-full justify-center flex space-x-2 items-center text-xl mt-8">
                            <MdLocationPin className="text-amber-500 " />
                            <span>Banten</span>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-6 mt-6">
                            <div className="font-dream_avenue md:text-8xl text-7xl text-center">
                                {data.bride_nickname ?? "Bride Nickname"}
                            </div>
                            <div className="text-center font-hazelnuts rounded-lg px-4 py-2 text-xl sm:text-2xl bg-amber-100 text-gray-600 font-semibold">
                                {data.bride_fullname ?? "Bride Fullname"}
                            </div>
                        </div>
                        <div className="text-center text-amber-600 text-xl mt-6">
                            <div>Putri Ketiga Dari Keluarga</div>
                            <div className="">
                                <span>Bapak </span>
                                <span className="font-bold">
                                    {data.bride_father ?? "Bride Father Name"}
                                </span>
                                <span> &amp; Ibu </span>
                                <span className="font-bold">
                                    {data.bride_mother ?? "Bride Mother Name"}
                                </span>
                            </div>
                        </div>
                        <div className="mt-10 flex space-x-3 items-center justify-center">
                            <a
                                href="https://instagram.com/luyyinatsa?igshid=MzRlODBiNWFlZA=="
                                className="p-2 bg-amber-500 rounded-full text-gray-200"
                            >
                                <FaInstagram className="w-6 h-6 text-gray-50" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Couple;
