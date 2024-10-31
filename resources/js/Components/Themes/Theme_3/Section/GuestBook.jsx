import React from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import useToast from "@/Hooks/useToast";
import { useForm, usePage } from "@inertiajs/react";
import { HiOutlineClock } from "react-icons/hi";
import { BsSendFill } from "react-icons/bs";
import { MdVerified, MdWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInFastVariants, fadeInVariants } from "@/Libs/motion";

const GuestBook = ({ guest_book }) => {
    const invitationData = usePage().props.data;
    const tamu = invitationData.to;

    console.log("guest_book:", guest_book);

    const {
        data,
        setData,
        post,
        put,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm(tamu);

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const guest = urlParams.get("to");

        post(`/guestbook/${invitationData.id}?to=${guest}`, {
            wantsJson: true,
            preserveScroll: true,
            onSuccess: (res) => {
                showToast(res.props.flash.message, {
                    type: res.props.flash.status,
                    position: "top-right",
                    autoClose: 3000,
                });
            },
        });
    };

    return (
        <div className="p-4 mt-10 md:px-28">
            <section className="p-4 mt-10">
                <div className="text-center flex flex-col space-y-4">
                    <h1 className="font-mono text-center text-3xl md:text-4xl text-gray-200">
                        {guest_book.title ?? ""}
                    </h1>
                    <span className="leading-tight font-serif text-gray-300 text-center md:text-xl mt-4">
                        {guest_book.description ?? ""}
                    </span>
                </div>
                <div className="text-gray-400 mt-10">
                    <div className="text-base font-bold text-center py-4">
                        {invitationData.guests.length} Ucapan
                    </div>
                    {tamu && (
                        <form
                            onSubmit={submit}
                            className="flex flex-col space-y-4 md:space-y-8"
                        >
                            <div>
                                <TextInput
                                    id="fullname"
                                    className="mt-1 block w-full bg-gray-800"
                                    value={data.fullname ?? ""}
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                    required
                                    placeholder="Nama"
                                />

                                <InputError
                                    className="mt-2 bg-gray-800"
                                    message={errors.fullname}
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    className="mt-1 block w-full bg-gray-800"
                                    value={data.message ?? ""}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    required
                                    placeholder="Ucapan"
                                ></textarea>

                                <InputError
                                    className="mt-2"
                                    message={errors.message}
                                />
                            </div>
                            <div>
                                <SelectInput
                                    id="will_attend"
                                    className="mt-1 block w-full bg-gray-800"
                                    onChange={(e) =>
                                        setData("will_attend", e.target.value)
                                    }
                                    value={data.will_attend}
                                    required
                                >
                                    <option
                                        className="text-gray-500"
                                        value=""
                                        disabled
                                    >
                                        Konfirmasi Kehadiran
                                    </option>
                                    <option
                                        className="text-gray-500"
                                        value="yes"
                                    >
                                        Ya
                                    </option>
                                    <option
                                        className="text-gray-500"
                                        value="no"
                                    >
                                        Tidak
                                    </option>
                                </SelectInput>

                                <InputError
                                    className="mt-2"
                                    message={errors.will_attend}
                                />
                            </div>
                            <div className="w-full md:flex md:justify-center">
                                <button className="bg-red-800 mt-5 mx-auto flex space-x-2 md:px-6 hover:bg-gray-800/90 hover:outline-1 hover:outline-gray-100 items-center px-4 py-2  font-bold text-gray-100">
                                    <BsSendFill />
                                    <span className="font-sans">
                                        KIRIM UCAPAN
                                    </span>
                                </button>
                            </div>
                        </form>
                    )}
                    <hr className="border border-gray-700 my-8" />
                </div>
                <div className="w-full flex flex-col space-y-5 max-h-[400px] overflow-y-auto">
                    {invitationData.guests.length > 0 &&
                        invitationData.guests.map((guest, index) => {
                            return (
                                <motion.div
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    variants={fadeInFastVariants}
                                    viewport={{ once: true }}
                                    key={index}
                                    className="w-full flex space-x-3"
                                >
                                    <div className="w-11/12 flex flex-col text-gray-300">
                                        <div className="font-bold text-lg flex space-x-2 items-center">
                                            <span>{guest.fullname}</span>
                                            {guest.will_attend == "yes" && (
                                                <MdVerified className="text-blue-400" />
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-gray-500 text-sm">
                                                {guest.message}
                                            </span>
                                        </div>
                                        <div className="mt-2 flex space-x-1 items-center font-light text-xs text-gray-500">
                                            <HiOutlineClock />
                                            <span>{guest.updated_at}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </div>
            </section>
            <hr className="md:py-8 border-b border-gray-800 " />
            {/* <WhatsappForm /> */}
        </div>
    );
};

export default GuestBook;
