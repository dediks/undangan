import React from "react";

const GMaps = () => {
    return (
        <section className="p-4 md:px-12 mt-16">
            <h1 className="font-hazelnuts text-center text-4xl">
                Gmaps Details
            </h1>
            <div className="mt-6 md:mt-12 w-full relative">
                <iframe
                    className="rounded-2xl w-full h-96"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15870.601243576491!2d106.0435605!3d-6.0426259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418f5036998355%3A0xb6b072895e8952e7!2sGraha%20Mutiara%20Asri!5e0!3m2!1sen!2sid!4v1684691426516!5m2!1sen!2sid"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default GMaps;
