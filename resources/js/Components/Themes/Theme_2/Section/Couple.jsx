import { BsInstagram } from "react-icons/bs";

const Couple = ({ data }) => {
    return (
        <section className="relative bg-pink-300/80 text-gray-100 w-full h-[2300px] md:h-[1200px]">
            <div
                style={{
                    backgroundImage: `url("https://pixinvite.com/wp-content/uploads/2023/06/Bride-1188x2048.jpg")`,
                }}
                className="absolute w-full min-h-full bg-center bg-cover"
            ></div>
            <div className="px-10 md:flex md:flex-col md:space-y-16 md:px-48 absolute w-full h-full bg-center bg-cover md:backdrop-blur-xl backdrop-blur-md">
                <div className="text-center pt-16">
                    <h1 className="text-3xl font-dream_avenue">
                        Bride & Groom
                    </h1>
                    <div className="md:text-lg text-sm leading-5 mt-5 text-center ">
                        <p>Assalamualaikum Wr. Wb.</p>
                        <p className="px-6">
                            Dengan memohon rahmat dan ridho Allah Subhanallu Wa
                            Ta ala, InsyaAllah kami akan menyelenggarakan
                        </p>
                    </div>
                </div>
                <div className="mt-16 md:mt-0 lg:min-h-[800px] md:flex md:justify-between md:items-center 2xl:px-48 ">
                    <div className="self-end">
                        <div
                            className="mx-auto mt-4 border-2 md:border-4 shadow-white shadow-2xl rounded-sm border-white bg-gray-200 w-6/7 md:w-64 md:hover:scale-125 transition duration-500 cursor-pointer aspect-[3/4] md:aspect-[9/16] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('https://pixinvite.com/wp-content/uploads/2023/06/Bride-1188x2048.jpg')`,
                            }}
                        ></div>
                        <div className="mt-8 md:mt-24  md:text-center text-right flex flex-col md:items-center items-end">
                            <div className="cursor-pointer hover:rounded-md flex items-center space-x-2 w-fit pb-2 px-2 md:border-2 md:p-2 border-b border-gray-100">
                                <BsInstagram />
                                <span>Instagram</span>
                            </div>
                            <div className="font-arslan text-5xl leading-8 mt-8 md:w-64">
                                Dr. Farah Luthfia Nugroho
                            </div>
                            <div className="mt-8 leading-3 w-64">
                                <span className="font-bold">Putri Dari</span>
                                <div className="leading-4 mt-2">
                                    <span>Bapak</span>
                                    <span> </span>
                                    <span>drg. H. Budi Nugroho, MPPM</span>
                                    <span> </span>
                                    <span>dan</span>
                                    <span> </span>
                                    <span>Ibu</span>
                                    <span> </span>
                                    <span>Nora Dewanti</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:self-start md:mt-60 -rotate-12 mx-auto ring-2 ring-white p-6 w-24 h-24 rounded-full text-center my-16 text-white font-hazelnuts text-4xl md:text-5xl">
                        &
                    </div>
                    <div className="">
                        <div
                            className="mx-auto mt-4 border-2 md:border-4 shadow-white shadow-2xl rounded-sm border-white bg-gray-200 w-6/7 md:w-64 md:hover:scale-125 transition duration-500 cursor-pointer aspect-[3/4] md:aspect-[9/16] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('https://pixinvite.com/wp-content/uploads/2023/06/Bride-1188x2048.jpg')`,
                            }}
                        ></div>
                        <div className="mt-8 md:mt-24  md:text-center flex flex-col md:items-center">
                            <div className="cursor-pointer hover:rounded-md flex items-center space-x-2 w-fit pb-2 px-2 md:border-2 md:p-2 border-b border-gray-100">
                                <BsInstagram />
                                <span>Instagram</span>
                            </div>
                            <div className="font-arslan text-5xl leading-8 mt-8 md:w-64">
                                Dr. Farah Luthfia Nugroho
                            </div>
                            <div className="mt-8 leading-3 w-64">
                                <span className="font-bold">Putri Dari</span>
                                <div className="leading-4 mt-2">
                                    <span>Bapak</span>
                                    <span> </span>
                                    <span>drg. H. Budi Nugroho, MPPM</span>
                                    <span> </span>
                                    <span>dan</span>
                                    <span> </span>
                                    <span>Ibu</span>
                                    <span> </span>
                                    <span>Nora Dewanti</span>
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
