import React, { useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { MdWhatsapp } from "react-icons/md";
import { usePage } from "@inertiajs/react";

const WhatsappForm = () => {
    const invitationData = usePage().props.data;

    const [data, setData] = useState({
        name: "",
        comment: "",
        will_attend: "",
    });

    const handleClick = () => {
        const message = data.comment;
        const will_attend = data.will_attend;
        const name = data.name;

        let a = `Halo, saya ${name}. ${message}. Saya ${will_attend}`;

        console.log(message);

        const url = `https://wa.me/${
            invitationData.phone_number
        }?text=${encodeURI(a)}`;

        window.location.href = url;
    };

    return (
        <div className="p-4 flex flex-col space-y-10 md:px-28 pb-16 pt-16">
            <div className="text-center flex flex-col space-y-4">
                <h1 className="font-serif text-center text-2xl md:text-4xl">
                    Reservasi
                </h1>
                <span className="leading-tight font-serif text-gray-300 text-center md:text-xl mt-4">
                    Mohon Mengisi Buku Tamu untuk keperluan data.
                </span>
            </div>
            <div className="">
                <InputLabel
                    htmlFor="name_for_wa"
                    value="Nama"
                    className="text-gray-200 font-serif"
                />
                <TextInput
                    id="name_for_wa"
                    className="mt-1 block w-full bg-black/50 font-serif"
                    value={data.name ?? ""}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    required
                    autoComplete="name"
                    placeholder="Nama"
                />
            </div>
            <div>
                <InputLabel
                    htmlFor="comment_for_wa"
                    value="Ucapan"
                    className="text-gray-200 font-serif"
                />
                <textarea
                    id="comment_for_wa"
                    className="mt-1 block w-full bg-black/50 font-serif"
                    value={data.comment ?? ""}
                    onChange={(e) =>
                        setData({ ...data, comment: e.target.value })
                    }
                    required
                    autoComplete="comment_for_wa"
                    placeholder="Ucapan"
                ></textarea>
            </div>
            <div>
                <InputLabel
                    htmlFor="will_attend_for_wa"
                    value="Konfirmasi Kehadiran"
                    className="text-gray-200 font-serif"
                />
                <SelectInput
                    id="will_attend_for_wa"
                    className="mt-1 block w-full bg-black/50 font-serif"
                    selected={data.will_attend}
                    onChange={(e) =>
                        setData({ ...data, will_attend: e.target.value })
                    }
                    required
                    autoComplete="will_attend_for_wa"
                >
                    <option className="bg-black text-gray-200" value="">
                        Kehadiran
                    </option>
                    <option
                        className="bg-black text-gray-200"
                        value="Diusahakan hadir"
                    >
                        Diusahakan hadir
                    </option>
                    <option
                        className="bg-black text-gray-200"
                        value="Maaf belum bisa hadir"
                    >
                        Maaf belum bisa hadir
                    </option>
                </SelectInput>
            </div>
            <div className="w-full text-center">
                <button
                    onClick={handleClick}
                    className="hover:bg-gray-700/90 hover:outline-1 hover:outline-gray-100 mt-5 mx-auto flex space-x-2 items-center px-4 py-2 border border-black bg-red-800/50 font-bold text-gray-100"
                >
                    <MdWhatsapp />
                    <span className="font-sans">KIRIM KE WHATSAPP</span>
                </button>
            </div>
        </div>
    );
};

export default WhatsappForm;
