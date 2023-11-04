import getData from "@/Helpers/getData";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { fadeInVariants } from "@/Libs/motion";
import { useRef } from "react";

const Quotes = ({ data, attributes, isPreview = false }) => {
    // console.log("quotes data", data);
    // console.log("quotes attributes", attributes);

    const quoteSectionRef = useRef(null);
    const imageRef = useRef(null);
    const imageTwoRef = useRef(null);

    const isInView = useInView(quoteSectionRef, { once: true });
    const isImageInView = useInView(imageRef, { once: true });
    const isTwoImageInView = useInView(imageTwoRef, { once: true });

    console.log("quote in view", isInView);
    return (
        <section
            ref={quoteSectionRef}
            className="min-h-[650px] xl:min-h-[800px] lg:min-h-[1400px] relative bg-gray-200 p-3 lg:p-16 md:p-10"
        >
            <div className="text-center flex flex-col justify-center items-center py-6 lg:px-36 lg:py-12">
                <BsFillChatSquareQuoteFill className="text-4xl opacity-60 text-center" />
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={fadeInVariants}
                    className="font-serif text-base sm:text-2xl text-black text-center leading-6 sm:leading-8 mt-5"
                >
                    {data?.quote?.quote?.content ?? ""}
                </motion.div>
            </div>
            <div className="w-full relative lg:px-24 lg:pb-32 lg:pt-10">
                <div ref={imageRef}>
                    <motion.div
                        initial={{
                            y: -30,
                            opacity: 0,
                        }}
                        animate={
                            isImageInView && {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 2.4,
                                    delay: 0,
                                    ease: "easeInOut",
                                },
                            }
                        }
                        className="w-full h-52 md:h-full aspect-video relative bg-white p-0.5 shadow-xl"
                    >
                        <img
                            className="w-full md:p-1 h-full object-cover object-center"
                            height={200}
                            width={200}
                            src={
                                getData(
                                    data.images,
                                    "id",
                                    getData(
                                        attributes,
                                        "attribute_name",
                                        "image_1"
                                    ).value
                                )?.image_url
                            }
                            loading="lazy"
                        />
                        {/* "storage/images/01h646epfk2dj7mrmbe6ssvjej/galleries/gallery_28.webp" */}
                    </motion.div>
                </div>
                <div
                    ref={imageTwoRef}
                    className="h-24 md:h-full min-h-min left-0 right-0 flex md:relative absolute w-full -bottom-16 space-x-2 md:space-x-8"
                >
                    <motion.div
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={
                            isTwoImageInView && {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    delay: 1,
                                    ease: "easeInOut",
                                },
                            }
                        }
                        className="shadow-xl h-full w-6/12 aspect-video bg-white rounded-md p-1"
                    >
                        <img
                            className="w-full md:p-1 h-full object-cover object-center"
                            height={200}
                            width={200}
                            src={
                                getData(
                                    data.images,
                                    "id",
                                    getData(
                                        attributes,
                                        "attribute_name",
                                        "image_2"
                                    ).value
                                )?.image_url
                            }
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={
                            isTwoImageInView && {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    delay: 1,
                                    ease: "easeInOut",
                                },
                            }
                        }
                        className="shadow-xl w-6/12 h-full aspect-video bg-white rounded-md p-1"
                    >
                        <img
                            className="w-full md:p-1 h-full object-cover object-center"
                            height={200}
                            width={200}
                            src={
                                getData(
                                    data.images,
                                    "id",
                                    getData(
                                        attributes,
                                        "attribute_name",
                                        "image_3"
                                    ).value
                                )?.image_url
                            }
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Quotes;
