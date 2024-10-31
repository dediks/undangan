import { imageVariants, fadeInVariants } from "@/Libs/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsInstagram } from "react-icons/bs";

const childPostion = [
    "tunggal",
    "pertama",
    "kedua",
    "ketiga",
    "keempat",
    "kelima",
    "keenam",
];

const getChildPostion = (number) => {
    return childPostion[number];
};

const Couple = ({ data }) => {
    // console.log("Couple", data);
    const coupleSectionRef = useRef(null);
    const isInView = useInView(coupleSectionRef, { once: true });

    return (
        <section
            ref={coupleSectionRef}
            className="relative bg-red-900/80 text-gray-100 w-full min-h-[1800px]  md:pb-0 md:min-h-[1200px]"
        >
            <div
                style={{
                    backgroundImage: `url(storage/images/${data.bride_photo})`,
                }}
                className="absolute w-full min-h-full bg-center bg-cover left-0 right-0 top-0 bottom-0"
            ></div>
            <div className="pb-24  px-10 md:flex md:flex-col md:space-y-16 md:px-48 min-h-[1200px] w-full bg-center bg-cover md:backdrop-blur-xl bg-black/40 backdrop-blur">
                <div className="text-center xl:pt-20 pt-16">
                    <h1 className="text-3xl xl:text-4xl mb-10 font-serif">
                        Bride & Groom
                    </h1>
                    <div className="md:text-lg text-sm leading-5 mt-5 text-center ">
                        <p className="font-semibold xl:mt-10 font-serif">
                            Assalamualaikum Wr. Wb.
                        </p>
                        <p className="px-6 mt-2 xl:text-base font-serif font-light leading-relaxed">
                            Dengan memohon rahmat dan ridho Allah Subhanallu Wa
                            Ta ala, InsyaAllah kami akan menyelenggarakan
                        </p>
                    </div>
                </div>
                <div className="mt-16 md:mt-0 lg:min-h-[800px] md:flex md:justify-between md:items-center 2xl:px-48">
                    <div className="">
                        <motion.img
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={imageVariants}
                            viewport={{ once: true }}
                            className="mx-auto w-6/7 mt-4 shadow-black shadow-2xl rounded-sm  bg-red-800 md:w-64 md:hover:scale-125 transition duration-500 cursor-pointer aspect-[3/4] md:aspect-[9/16] object-cover object-center"
                            src={`storage/images/${data.bride_photo}`}
                        />

                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={fadeInVariants}
                            viewport={{ once: true, amount: 0.8 }}
                            className="mt-8 md:mt-24 md:text-center text-right flex flex-col md:items-center items-end"
                        >
                            <a
                                href={
                                    "https://www.instagram.com/chandra_fariha/"
                                }
                                className="cursor-pointer hover:rounded-md flex items-center space-x-2 w-fit pb-2 px-2 md:border-2 md:p-2 border-b border-gray-500"
                            >
                                <BsInstagram />
                                <span>Instagram</span>
                            </a>

                            <div className="font-mono text-xl leading-8 mt-8 md:w-64">
                                {data.bride_fullname}
                            </div>
                            <div className="mt-8 leading-3 w-64">
                                <span className="font-bold font-serif">
                                    Putri{" "}
                                    {childPostion[data.bride_as_child_position]}{" "}
                                    dari
                                </span>
                                <div className="leading-4 mt-2 font-serif">
                                    <span>Bapak</span>
                                    <span> </span>
                                    <span>{data.bride_father}</span>
                                    <span> </span>
                                    <span>dan</span>
                                    <span> </span>
                                    <span>Ibu</span>
                                    <span> </span>
                                    <span>{data.bride_mother}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="md:self-start md:mt-60 -rotate-12 mx-auto ring-2 ring-gray-500 p-6 w-24 h-24 rounded-full text-center my-16 text-gray-300 font-mono text-4xl md:text-5xl">
                        &
                    </div>
                    <div className="">
                        <motion.img
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={imageVariants}
                            viewport={{ once: true }}
                            className="mx-auto mt-4  shadow-black shadow-2xl rounded-sm bg-red-800 w-6/7 md:w-64 md:hover:scale-125 transition duration-500 cursor-pointer aspect-[3/4] md:aspect-[9/16] object-cover object-center"
                            src={`/storage/images/${data.groom_photo}`}
                            loading="lazy"
                        />
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={fadeInVariants}
                            viewport={{ once: true, amount: 0.8 }}
                            className="mt-8 md:mt-24  md:text-center flex flex-col md:items-center"
                        >
                            <a
                                href={
                                    "https://www.instagram.com/tmy_herd/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                                }
                                className="cursor-pointer hover:rounded-md flex items-center space-x-2 w-fit pb-2 px-2 md:border-2 md:p-2 border-b border-gray-500"
                            >
                                <BsInstagram />
                                <span>Instagram</span>
                            </a>
                            <div>
                                <div className="font-mono text-xl leading-8 mt-8 md:w-64">
                                    {data.groom_fullname}
                                </div>
                                <div className="mt-8 leading-3 w-64">
                                    <span className="font-bold font-serif">
                                        Putra{" "}
                                        {
                                            childPostion[
                                                data.groom_as_child_position
                                            ]
                                        }{" "}
                                        dari
                                    </span>
                                    <div className="font-serif leading-4 mt-2">
                                        <span>Bapak</span>
                                        <span> </span>
                                        <span>{data.groom_father}</span>
                                        <span> </span>
                                        <span>dan</span>
                                        <span> </span>
                                        <span>Ibu</span>
                                        <span> </span>
                                        <span>{data.groom_mother}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Couple;
