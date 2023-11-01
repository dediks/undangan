import getData from "@/Helpers/getData";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";

const Quotes = ({ data, attributes, isPreview = false }) => {
    console.log("quotes data", data);
    console.log("quotes attributes", attributes);

    return (
        <section className="min-h-[650px] lg:min-h-[1400px] relative bg-gray-200 p-3 lg:p-16 md:p-10 flex flex-col">
            <div className="text-center flex flex-col justify-center items-center py-6 lg:px-36 lg:py-12">
                <BsFillChatSquareQuoteFill className="text-4xl opacity-60 text-center" />
                <p className="font-serif text-base sm:text-2xl text-black text-center leading-6 sm:leading-8 mt-5">
                    {data?.quote?.quote?.content ?? ""}
                </p>
            </div>
            <div className="relative md:p-16 lg:p-24">
                <div className="aspect-video relative bg-white p-0.5 shadow-xl">
                    <div
                        className="bg-cover h-full bg-center"
                        style={{
                            backgroundImage: `url(${
                                getData(
                                    data.images,
                                    "id",
                                    getData(
                                        attributes,
                                        "attribute_name",
                                        "image_1"
                                    ).value
                                ).image_url
                            }
        )`,
                        }}
                    ></div>
                </div>
                <div className="left-0 right-0 flex md:relative absolute w-full -bottom-16 space-x-2 md:space-x-8">
                    <div className="shadow-xl w-6/12 aspect-video bg-white rounded-md p-1">
                        <div
                            className="p-1 bg-cover h-full bg-center"
                            style={{
                                backgroundImage: `url(${
                                    getData(
                                        data.images,
                                        "id",
                                        getData(
                                            attributes,
                                            "attribute_name",
                                            "image_2"
                                        ).value
                                    ).image_url
                                })`,
                            }}
                        ></div>
                    </div>
                    <div className="shadow-xl w-6/12 aspect-video bg-white rounded-md p-1">
                        <div
                            className="p-1 bg-cover h-full bg-center"
                            style={{
                                backgroundImage: `url(${
                                    getData(
                                        data.images,
                                        "id",
                                        getData(
                                            attributes,
                                            "attribute_name",
                                            "image_3"
                                        ).value
                                    ).image_url
                                })`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quotes;
