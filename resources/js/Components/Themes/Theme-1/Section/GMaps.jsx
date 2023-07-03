import { usePage } from "@inertiajs/react";
import React from "react";

const GMaps = () => {
    const gmapData = usePage().props.data.gmap;
    const url = `https://www.google.com/maps/embed/v1/place?key=${gmapData.api_key}&q=${gmapData.query}`;

    return (
        <section className="p-4 md:px-12 mt-16">
            <h1 className="font-hazelnuts text-center text-4xl">
                Gmaps Details
            </h1>
            <div className="mt-6 md:mt-12 w-full relative">
                <iframe
                    className="rounded-2xl w-full h-96 md:h-[800px]"
                    src={url}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default GMaps;
