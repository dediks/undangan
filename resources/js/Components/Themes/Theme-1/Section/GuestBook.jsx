import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import useToast from "@/Hooks/useToast";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { MdVerified, MdWhatsapp } from "react-icons/md";

const GuestBook = () => {
    const invitationData = usePage().props.data;

    console.log(invitationData);

    const {
        data,
        setData,
        post,
        put,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm();

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const guest = urlParams.get("to");

        post(`/guestbook/${invitationData.id}?to=${guest}`);
    };

    return (
        <section className="p-4 mt-10">
            <div className="text-center flex flex-col space-y-4">
                <h1 className="font-hazelnuts text-center text-4xl">
                    Buku Tamu
                </h1>
                <span className="leading-tight font-hazelnuts text-gray-400 text-center text-xl mt-4">
                    Berikan Doa / Ucapan Terbaik Anda Kepada Kedua Mempelai
                </span>
            </div>
            <div className="mt-10 border border-gray-100 p-4 bg-amber-50 ">
                <div className="text-base font-bold text-center py-4">
                    17 Ucapan
                </div>
                <form onSubmit={submit} className="flex flex-col space-y-4">
                    <div>
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name ?? ""}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                            placeholder="Nama"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div>
                        <textarea
                            id="comment"
                            className="mt-1 block w-full"
                            value={data.comment ?? ""}
                            onChange={(e) => setData("comment", e.target.value)}
                            required
                            autoComplete="comment"
                            placeholder="Ucapan"
                        ></textarea>

                        <InputError className="mt-2" message={errors.comment} />
                    </div>
                    <div>
                        <SelectInput
                            id="will_attend"
                            className="mt-1 block w-full"
                            selected={data.will_attend}
                            onChange={(e) =>
                                setData("will_attend", e.target.value)
                            }
                            required
                            autoComplete="will_attend"
                        >
                            <option className="text-gray-500" value="">
                                Konfirmasi Kehadiran
                            </option>
                            <option className="text-gray-500" value="yes">
                                Ya
                            </option>
                            <option className="text-gray-500" value="no">
                                Tidak
                            </option>
                        </SelectInput>

                        <InputError
                            className="mt-2"
                            message={errors.will_attend}
                        />
                    </div>
                    <div>
                        <button className="px-4 py-1 rounded bg-pink-800 font-bold text-gray-100">
                            Kirim
                        </button>
                    </div>
                </form>
                <hr className="border border-neutral-200 my-8" />
                <div className="w-full flex flex-col space-y-5">
                    {invitationData.guests.length > 0 &&
                        invitationData.guests.map((guest, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-full flex space-x-3"
                                >
                                    <div className="w-10 p-2 flex items-center justify-center font-bold self-start rounded-full bg-red-800 opacity-50 text-gray-50">
                                        {guest.nickname.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="w-11/12 flex flex-col">
                                        <div className="font-bold text-lg flex space-x-2 items-center">
                                            <span>{guest.nickname}</span>
                                            <MdVerified className="text-blue-400" />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-gray-500 text-sm">
                                                {guest.nickname}
                                            </span>
                                        </div>
                                        <div className="mt-2 flex space-x-1 items-center font-light text-xs text-gray-500">
                                            <HiOutlineClock />
                                            <span>{guest.created_at}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="mt-10 p-4 flex flex-col space-y-4">
                <div>
                    <InputLabel htmlFor="name_for_wa" value="Nama" />
                    <TextInput
                        id="name_for_wa"
                        className="mt-1 block w-full"
                        value={data.name ?? ""}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                        placeholder="Nama"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <InputLabel htmlFor="comment_for_wa" value="Ucapan" />
                    <textarea
                        id="comment_for_wa"
                        className="mt-1 block w-full"
                        value={data.comment ?? ""}
                        onChange={(e) => setData("comment", e.target.value)}
                        required
                        autoComplete="comment_for_wa"
                        placeholder="Ucapan"
                    ></textarea>

                    <InputError className="mt-2" message={errors.comment} />
                </div>
                <div>
                    <InputLabel
                        htmlFor="will_attend_for_wa"
                        value="Konfirmasi Kehadiran"
                    />
                    <SelectInput
                        id="will_attend_for_wa"
                        className="mt-1 block w-full"
                        selected={data.will_attend}
                        onChange={(e) => setData("will_attend", e.target.value)}
                        required
                        autoComplete="will_attend_for_wa"
                    >
                        <option className="text-gray-500" value="">
                            Konfirmasi Kehadiran
                        </option>
                        <option className="text-gray-500" value="1">
                            Ya
                        </option>
                        <option className="text-gray-500" value="0">
                            Tidak
                        </option>
                    </SelectInput>

                    <InputError className="mt-2" message={errors.will_attend} />
                </div>
                <div className="w-full text-center">
                    <button className="mt-5 mx-auto flex space-x-2 items-center px-4 py-2 rounded-2xl bg-green-800 font-bold text-gray-100">
                        <MdWhatsapp />
                        <span>Kirim ke Whatsapp</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GuestBook;