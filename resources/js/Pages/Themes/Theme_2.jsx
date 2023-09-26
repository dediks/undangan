import Intro from "@/Components/Themes/Theme_2/Section/Intro";
import Cover from "@/Components/Themes/Theme_2/Section/Cover";
import getTitle from "@/Helpers/getTitle";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { BsFillChatSquareQuoteFill, BsInstagram } from "react-icons/bs";
import Couple from "@/Components/Themes/Theme_2/Section/Couple";

const Themes_2 = ({ data, isPreview = false }) => {
    const [showCover, setShowCover] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <>
            <Head>
                <title head-key={data.id}>
                    {getTitle(data.bride_nickname, data.groom_nickname)}
                </title>
            </Head>

            <Cover
                cover={{
                    showCover,
                    setShowCover,
                }}
                data={data.cover}
                setIsFullscreen={setIsFullscreen}
            />
            {!showCover && (
                <div className="bg-gray-50 md:px-2 md:pb-2">
                    <Intro data={data.intro} />
                    <section className="min-h-[650px] lg:min-h-[1400px] relative bg-pink-100 p-3 lg:p-16 md:p-10 flex flex-col">
                        <div className="text-center flex flex-col justify-center items-center py-6">
                            <BsFillChatSquareQuoteFill className="text-4xl opacity-60 text-center" />
                            <p className="font-serif text-base sm:text-2xl text-black text-center leading-6 sm:leading-8 mt-5">
                                Yang terpenting dalam membuat pernikahan yang
                                bahagia bukanlah seberapa cocok anda berdua,
                                tetapi bagaimana anda menghadapi ketidakcocokan.
                                Pernikahan yang hebat bukanlah ketika pasanagan
                                yang nsempurna bersatu. Pernikahan yang hebat
                                adalah ketika pasangan yang tidak sempurna
                                belajar untuk menikmati perbedaan mereka."
                            </p>
                        </div>
                        <div className="relative md:p-16">
                            <div className="aspect-video relative bg-white p-0.5 shadow-xl">
                                <div
                                    className="bg-cover h-full"
                                    style={{
                                        backgroundImage: `url(
                                "https://www.theknot.com/tk-media/images/61e409ea-f4d7-4c33-9cd8-fca030b93abb~rs_768.h"
                            )`,
                                    }}
                                ></div>
                            </div>
                            <div className="left-0 right-0 flex md:relative absolute w-full -bottom-16 space-x-2 md:space-x-8">
                                <div className="shadow-xl w-6/12 aspect-video bg-white rounded-md p-1">
                                    <div
                                        className="p-1 bg-cover h-full"
                                        style={{
                                            backgroundImage: `url(
                                "https://www.theknot.com/tk-media/images/61e409ea-f4d7-4c33-9cd8-fca030b93abb~rs_768.h"
                            )`,
                                        }}
                                    ></div>
                                </div>
                                <div className="shadow-xl w-6/12 aspect-video bg-white rounded-md p-1">
                                    <div
                                        className="p-1 bg-cover h-full"
                                        style={{
                                            backgroundImage: `url(
                                "https://www.theknot.com/tk-media/images/61e409ea-f4d7-4c33-9cd8-fca030b93abb~rs_768.h"
                            )`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Couple />
                </div>
            )}
        </>
    );
};

export default Themes_2;
