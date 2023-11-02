import { Head, router, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useToast from "@/Hooks/useToast";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import FileInput from "@/Components/FileInput";
import UploadImagePreview from "@/Components/UploadImagePreview";
import SelectInput from "@/Components/SelectInput";
import { useState } from "react";

const bankList = [
    { bca: "BCA" },
    { bri: "BRI" },
    { bni: "BNI" },
    { btpn: "BTPN" },
];
const digitalBankList = [
    { gopay: "GOPAY" },
    { shoopepay: "SHOOPEPAY" },
    { ovo: "OVO" },
    { dana: "DANA" },
];

export default function Create({ auth }) {
    const invitationId = usePage().props.invitation.id;

    const giftData = {
        title: "",
        address: "",
        name: "",
        bank: "",
        type: "cashless",
    };

    const {
        data,
        setData,
        post,
        put,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm(giftData);

    const showToast = useToast();

    const [isTransfer, setIsTransfer] = useState(true);

    const submit = (e) => {
        e.preventDefault();

        post(
            route("gifts.store", {
                invitationId: invitationId,
            }),
            {
                onSuccess: (res) => {
                    console.log(res);
                    showToast("berhasil", {
                        type: "success",
                        position: "top-right",
                        autoClose: 3000,
                    });
                },
                onError: (errors) => {
                    console.log(errors);
                },
            }
        );
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Data Gift
                </h2>
            }
        >
            <Head title="Uplaod Image" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <form onSubmit={submit}>
                        <div className="flex flex-col space-y-5 p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <div>
                                <InputLabel htmlFor="type" value="Type" />
                                <SelectInput
                                    id="type"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("type", e.target.value)
                                    }
                                >
                                    <option value={"cashless"}>Cashless</option>
                                    <option value={"kado"}>Kado</option>
                                </SelectInput>

                                {data.type == "cashless" && (
                                    <SelectInput
                                        id="bank"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("bank", e.target.value)
                                        }
                                    >
                                        {bankList.map((bank, key) => {
                                            const keys = Object.keys(bank);

                                            return (
                                                <option
                                                    key={keys[0]}
                                                    value={keys[0]}
                                                    className="text-black"
                                                >
                                                    {keys[0]}
                                                </option>
                                            );
                                        })}
                                    </SelectInput>
                                )}

                                <InputError
                                    className="mt-2"
                                    message={errors.bank}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput
                                    id="title"
                                    className="mt-1 block w-full"
                                    value={data.title ?? ""}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    isFocused
                                    autoComplete="title"
                                    placeholder="cth: Dompet Digital"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.title}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="name" value="Atas Nama" />

                                <TextInput
                                    id="name"
                                    className="mt-1 block w-full"
                                    value={data.name ?? ""}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    isFocused
                                    autoComplete="name"
                                    placeholder="cth: A.N Marcus Aurelius"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.name}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="address" value="Address" />

                                <TextInput
                                    id="address"
                                    className="mt-1 block w-full"
                                    value={data.address ?? ""}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    isFocused
                                    autoComplete="address"
                                    placeholder="No rekening / No hp atau Alamat Rumah"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.address}
                                />
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <PrimaryButton disabled={processing}>
                                    Save
                                </PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enterFrom="opacity-0"
                                    leaveTo="opacity-0"
                                    className="transition ease-in-out"
                                >
                                    <p className="text-sm text-gray-600">
                                        Saved.
                                    </p>
                                </Transition>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
