import Cover from "@/Components/Themes/Theme_3/Section/Cover";
import getTitle from "@/Helpers/getTitle";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import React, { createContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import MusicButton from "@/Components/MusicButton";
import useAudio from "@/Hooks/useAudio";
import useFullscreen from "@/Hooks/useFullscreen";
import Intro from "@/Components/Themes/Theme_3/Section/Intro";
import Quotes from "@/Components/Themes/Theme_3/Section/Quotes";
import Couple from "@/Components/Themes/Theme_3/Section/Couple";
import Event from "@/Components/Themes/Theme_3/Section/Event";
import Stories from "@/Components/Themes/Theme_3/Section/Stories";
import ImageGallery from "@/Components/ImageGallery";
import Gift from "@/Components/Themes/Theme_3/Section/Gift";
import WhatsappForm from "@/Components/Themes/Theme_3/Section/WhatsappForm";
import GuestBook from "@/Components/Themes/Theme_3/Section/GuestBook";
import Footer from "@/Components/Themes/Theme_3/Section/Footer";

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.8,
        },
    },
};

const Themes_3 = ({ data, isPreview = false }) => {
    const [showCover, setShowCover] = useState(true);
    const [loading, setLoading] = useState(false);
    const [playing, toggle] = useAudio(data?.music?.url);

    const [fullscreen, setFullscreen] = useFullscreen();

    const handleOpenCover = () => {
        // document.body.requestFullscreen();
        setLoading(true);

        setTimeout(() => {
            if (data?.music?.url) toggle();
            setShowCover(false);
            setFullscreen(true);
            setLoading(false);
        }, 3000);
    };

    return (
        <div
            className={clsx(
                !showCover ? "md:p-1 2xl:p-6 rounded-lg bg-gray-900" : ""
            )}
        >
            <Head>
                <title head-key={data.id}>
                    {getTitle(data.bride_nickname, data.groom_nickname)}
                </title>
            </Head>

            <Cover
                loading={loading}
                cover={{
                    showCover,
                    handleOpenCover,
                }}
                data={{
                    cover: data.cover,
                    bridegroom: {
                        bride: data.bride_nickname,
                        groom: data.groom_nickname,
                    },
                }}
            />
            {!showCover && (
                <div>
                    {data.intro && data.intro.attributes.length > 0 && (
                        <Intro
                            data={{
                                intro: data.intro,
                                bridegroom: {
                                    bride: data.bride_nickname,
                                    groom: data.groom_nickname,
                                },
                                events: data.events,
                            }}
                            attributes={data?.intro?.attributes}
                            isCoverOpen={!showCover}
                        />
                    )}
                    {data.quote_section &&
                        data.quote_section.attributes.length > 0 && (
                            <Quotes
                                data={{
                                    quote: data.quote_section,
                                    images: data.galleries,
                                }}
                                attributes={data?.quote_section?.attributes}
                            />
                        )}
                    <Couple data={data} />
                    <Event
                        data={{
                            events: data.events,
                            image_galleries: data.galleries,
                        }}
                    />
                    <Stories
                        data={data.story_section}
                        attributes={data.story_section.attributes}
                    />
                    <section className="w-full bg-gradient-to-b from-black via-red-900 to-gray-900 pb-12">
                        <div className="px-8 pt-10 lg:px-32 lg:py-64">
                            <h1 className="text-gray-200 font-serif text-3xl text-center mb-8 lg:text-3xl xl:text-4xl">
                                Gallery Pernikahan
                            </h1>
                            {/* <p>Ini</p> */}
                            <div className="w-full lg:mt-32">
                                <ImageGallery />
                            </div>
                        </div>
                    </section>
                    <section>
                        <Gift data={data.gifts} />
                    </section>
                    <section className="bg-gradient-to-b from-red-900 text-gray-200">
                        <WhatsappForm />
                    </section>
                    <section>
                        <GuestBook guest_book={data.guest_book_section} />
                    </section>
                    <section>
                        <Footer />
                    </section>
                </div>
            )}
        </div>
    );
};

export default Themes_3;
