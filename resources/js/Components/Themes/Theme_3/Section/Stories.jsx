import { fadeInVariants } from "@/Libs/motion";
import { motion } from "framer-motion";

export default function Stories({ data }) {
    const renderStories = data.stories.map((story, idx) => {
        return (
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={fadeInVariants}
                viewport={{ once: true }}
                className="mt-6 rounded-lg"
                key={idx}
            >
                <div className="rounded-lg shadow-2xl">
                    <img src={story.image} alt="" className="rounded-sm" />
                </div>
                <div className="w-full mt-4 items-center space-x-2 flex text-gray-50 font-light text-base xl:text-xl 2xl:text-2xl">
                    <div className="w-full border-t border-gray-500"></div>
                    <span className="min-w-fit text-center">{story.date}</span>
                    <div className="w-full border-t border-gray-500"></div>
                </div>
                <h1 className="text-gray-100 text-lg xl:text-3xl mt-2 font-mono">
                    {story.title}
                </h1>
                {story.story && (
                    <p className="pb-10 md:pb-20 text-gray-100 mt-8 md:mt-10 font-serif">
                        {story.story}
                    </p>
                )}
            </motion.div>
        );
    });

    return (
        <section className="w-full relative">
            <div
                className="w-full h-full absolute bg-cover bg-center"
                style={{
                    backgroundImage: `url(storage/images/${data.background_image})`,
                }}
            ></div>
            <div className="w-full absolute h-24 bg-gradient-to-b from-black to-transparent"></div>
            <div className="backdrop-brightness-90  backdrop-grayscale px-8 pt-10 pb-12 lg:pt-24 relative overflow-clip">
                <div className="w-full">
                    <h2 className="font-serif text-center text-gray-200 text-3xl lg:text-4xl">
                        {data.title ?? ""}
                    </h2>
                    <p className="text-center font-serif text-gray-400 mt-4 mb-6">
                        Ini cerita kami
                    </p>
                    <div className="lg:w-7/12 lg:mx-auto lg:mt-16">
                        {renderStories}
                    </div>
                </div>
            </div>
        </section>
    );
}
