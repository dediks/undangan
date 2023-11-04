import { fadeInVariants } from "@/Libs/motion";
import { motion } from "framer-motion";

export default function Stories({ data }) {
    const renderStories = data.stories.map((story, idx) => {
        return (
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={fadeInVariants}
                viewport={{ once: true, amount: 1 }}
                className="mt-6 rounded-lg"
                key={idx}
            >
                <div className="rounded-lg shadow-2xl">
                    <img
                        src={story.image}
                        alt=""
                        className="rounded-lg border-4 border-gray-200"
                    />
                </div>
                <div className="w-full mt-4 items-center space-x-2 flex text-gray-50 font-light text-base xl:text-xl 2xl:text-2xl">
                    <div className="w-full border-t border-gray-200"></div>
                    <span className="min-w-fit text-center">{story.date}</span>
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <h1 className="text-gray-100 text-xl xl:text-3xl mt-2">
                    {story.title}
                </h1>
                {story.story && (
                    <p className="pb-10 md:pb-20 text-gray-300 mt-8 md:mt-10">
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
            <div className="backdrop-brightness-90 bg-black/20 backdrop-grayscale px-8 pt-10 pb-12 lg:pt-24 relative overflow-clip">
                <div className="w-full">
                    <h2 className="font-hazelnuts text-center text-gray-50 text-2xl lg:text-4xl">
                        {data.title ?? ""}
                    </h2>
                    <div className="lg:w-7/12 lg:mx-auto lg:mt-16">
                        {renderStories}
                    </div>
                </div>
            </div>
        </section>
    );
}
