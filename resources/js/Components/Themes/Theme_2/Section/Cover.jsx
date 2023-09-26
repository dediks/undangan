import getTitle from "@/Helpers/getTitle";
import { getSectionTitle } from "@/Helpers/invitation";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { getDateInWord } from "@/Helpers/getDate";

const Cover = ({
    data,
    cover = {
        showCover: false,
    },
    setPlayMusic,
    setIsFullscreen,
}) => {
    const guest = usePage().props.data?.to;

    return (
        <section
            style={{
                backgroundImage: `url(/storage/images/${data.background_image})`,
            }}
            className={`${
                cover?.showCover ? "fixed" : "relative"
            } w-full z-10 bg-cover bg-no-repeat bg-local bg-center flex flex-col justify-between min-h-screen h-full`}
        >
            <div className="absolute w-full h-full min-h-screen bg-black/40"></div>
            <div className="w-full absolute min-h-screen flex items-center flex-col justify-between py-36 md:py-16">
                <div className="text-center text-gray-100 flex flex-col space-y-1 px-3">
                    <div className="text-base md:text-lg">
                        {getSectionTitle("cover", data.title)}
                    </div>
                    <div>
                        <span className="font-hazelnuts text-xl font-bold md:text-2xl md:font-dream_avenue">
                            {getTitle(data.bride_nickname, data.groom_nickname)}
                        </span>
                    </div>
                    <div className="text-base md:pt-4">
                        {getDateInWord(data.date)}
                    </div>
                </div>
                <div className="text-gray-100 text-center">
                    <div className="text-sm">Kepada</div>
                    <div className="mt-2 mb-1 text-xl py-2">
                        Dedik Sugiharto
                    </div>

                    {cover.showCover && (
                        <button
                            onClick={() => {
                                cover.setShowCover(false);
                            }}
                            className="flex items-center space-x-2 px-5 py-2 bg-gray-100 text-gray-800"
                        >
                            <BsFillEnvelopeOpenFill />
                            <span>Open Invitation</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cover;
