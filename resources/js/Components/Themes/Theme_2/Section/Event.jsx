import { getDateInWord, getTimeInWord } from "@/Helpers/getDate";
import { createElement } from "react";
import { GiDiamondRing, FaMapMarkedAlt } from "react-icons/all";
import ImageSlider from "../ImageSlider";

const iconList = {
    GiDiamondRing: GiDiamondRing,
    FaMapMarkedAlt: FaMapMarkedAlt,
};

export default function Event({ data, attributes, isPreview = false }) {
    const renderEvent = Object.values(data.events).map((event) => {
        return (
            <div
                className="border-black shadow-xl py-8 bg-neutral-100 lg:py-16 lg:text-xl"
                key={event.id}
            >
                <div className="text-center flex flex-col items-center">
                    {createElement(iconList["GiDiamondRing"], {
                        id: event.id,
                        className: "text-4xl",
                    })}
                    <div className="flex flex-col space-y-2 mt-2">
                        <h2>{event.title}</h2>
                        <span>{getDateInWord(event.start)}</span>
                        <span>Pukul : {getTimeInWord(event.start)}</span>
                    </div>
                </div>
                <div className="mt-10 text-center flex flex-col items-center">
                    {createElement(iconList["FaMapMarkedAlt"], {
                        id: event.id,
                        className: "text-4xl",
                    })}
                    <div className="flex flex-col mt-2">
                        <span>Lokasi Acara</span>
                        <span>{event.location}</span>
                    </div>
                    <a
                        target="__blank"
                        href={event.map_link}
                        className="hover:bg-gray-700 cursor-pointer text-gray-100 mt-6 flex space-x-2 bg-neutral-800 px-4 py-2 items-center"
                    >
                        <FaMapMarkedAlt className="" />
                        <span>Google Maps</span>
                    </a>
                </div>
            </div>
        );
    });

    return (
        <section className="w-full bg-gray-50 text-gray-800">
            <div className="text-center px-8 xl:px-64 xl:py-46 lg:py-36 py-8 leading-tight">
                <div className="flex flex-col space-y-4 lg:space-y-8">
                    <span className="text-center text-sm xl:text-xl">
                        Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya
                        untukmu pasangan hidup dari jenismu sendiri supaya kamu
                        dapat ketenangan hati dan dijadikannya kasih sayang
                        diantara kamu. Sesungguhnya yang demikian menjadi
                        tanda-tanda kebesarannya-Nya bagi orang-orang yang
                        berpikir.
                    </span>
                    <div className="flex items-center w-full space-x-4">
                        <div className="w-full border-t border-gray-800"></div>
                        <span className="min-w-fit">Q.S. Ar-Rum: 21</span>
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                </div>
                <div className="mt-10 relative z-30 md:h-72 lg:h-72">
                    <ImageSlider images={data.image_galleries} />
                </div>
                <div className="flex flex-col space-y-6 relative z-50">
                    {renderEvent}
                </div>
            </div>
        </section>
    );
}
