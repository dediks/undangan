import { BsInstagram } from "react-icons/bs";

const Couple = ({ data }) => {
    console.log("Couple", data);
    return (
        <section className="relative bg-gray-200/80 text-gray-100 w-full h-[1800px] md:h-[1200px]">
            <div
                style={{
                    backgroundImage: `url(storage/images/${data.bride_photo})`,
                }}
                className="absolute w-full min-h-full bg-center bg-cover"
            ></div>
            <div className="px-10 md:flex md:flex-col md:space-y-16 md:px-48 absolute w-full h-full bg-center bg-cover md:backdrop-blur-xl bg-black/40 backdrop-blur">
                <div className="text-center xl:pt-20 pt-16">
                    <h1 className="text-3xl xl:text-4xl font-dream_avenue">
                        Bride & Groom
                    </h1>
                    <div className="md:text-lg text-sm leading-5 mt-5 text-center ">
                        <p className="font-semibold xl:mt-10">
                            Assalamualaikum Wr. Wb.
                        </p>
                        <p className="px-6 mt-2 xl:text-base">
                            Dengan memohon rahmat dan ridho Allah Subhanallu Wa
                            Ta ala, InsyaAllah kami akan menyelenggarakan
                        </p>
                    </div>
                </div>
                <div className="mt-16 md:mt-0 lg:min-h-[800px] md:flex md:justify-between md:items-center 2xl:px-48">
                    <div className="">
                        <img
                            className="mx-auto w-6/7 mt-4 border-2 md:border-4 shadow-white shadow-2xl rounded-sm border-gray-300 bg-gray-200 md:w-64 md:hover:scale-125 transition duration-500 cursor-pointer aspect-[3/4] md:aspect-[9/16] object-cover object-center"
                            src={`storage/images/${data.bride_photo}`}
                        />

                        <div className="mt-8 md:mt-24 md:text-center text-right flex flex-col md:items-center items-end">
                            <div className="cursor-pointer hover:rounded-md flex items-center space-x-2 w-fit pb-2 px-2 md:border-2 md:p-2 border-b border-gray-100">
                                <BsInstagram />
                                <span>Instagram</span>
                            </div>
                            <div className="font-arslan text-5xl leading-8 mt-8 md:w-64">
                                {data.bride_fullname}
                            </div>
                            <div className="mt-8 leading-3 w-64">
                                <span className="font-bold">Putri Dari</span>
                                <div className="leading-4 mt-2">
                                    <span>Bapak</span>
                                    <span> </span>
                                    <span>{data.bride_father}</span>
                                    <span> </span>
                                    <span>dan</span>
                                    <span> </span>
                                    <span>Ibu</span>
                                    <span> </span>
                                    <span>{data.bride_mother}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:self-start md:mt-60 -rotate-12 mx-auto ring-2 ring-white p-6 w-24 h-24 rounded-full text-center my-16 text-white font-hazelnuts text-4xl md:text-5xl">
                        &
                    </div>
                    <div className="">
                        <div
                            className="mx-auto mt-4 border-2 md:border-4 shadow-white shadow-2xl rounded-sm border-gray-300 bg-gray-200 w-6/7 md:w-64 md:hover:scale-125 transition duration-500 cursor-pointer aspect-[3/4] md:aspect-[9/16] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(storage/images/${data.groom_photo})`,
                            }}
                        ></div>
                        <div className="mt-8 md:mt-24  md:text-center flex flex-col md:items-center">
                            <div className="cursor-pointer hover:rounded-md flex items-center space-x-2 w-fit pb-2 px-2 md:border-2 md:p-2 border-b border-gray-200">
                                <BsInstagram />
                                <span>Instagram</span>
                            </div>
                            <div className="font-arslan text-5xl leading-8 mt-8 md:w-64">
                                {data.groom_fullname}
                            </div>
                            <div className="mt-8 leading-3 w-64">
                                <span className="font-bold">Putri Dari</span>
                                <div className="leading-4 mt-2">
                                    <span>Bapak</span>
                                    <span> </span>
                                    <span>{data.groom_father}</span>
                                    <span> </span>
                                    <span>dan</span>
                                    <span> </span>
                                    <span>Ibu</span>
                                    <span> </span>
                                    <span>{data.groom_mother}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Couple;
