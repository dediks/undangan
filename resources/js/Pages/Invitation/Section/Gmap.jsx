import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import UploadImagePreview from "@/Components/UploadImagePreview";
import useToast from "@/Hooks/useToast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Gmap = ({ auth, gmapData, apiKey }) => {
    const dataGmap = gmapData
        ? gmapData
        : {
              title: "",
              query: "",
              latitude: "",
              longitude: "",
              zoom: "",
              type: "",
              show: "",
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
    } = useForm(dataGmap);

    const invitation = usePage().props.invitation;

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        if (invitation && gmapData) {
            put(
                `/invitation/gmap/${dataGmap["id"]}`,
                {
                    _method: "put",
                    ...data,
                },
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
        } else {
            post(`/invitation/${invitation.id}/gmap`);
        }
    };

    const [query, setQuery] = useState(
        gmapData ? gmapData["query"] : "surabaya"
    );

    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${
        query != "" ? query : "surabaya"
    }`;

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Section Gmap
                </h2>
            }
        >
            <Head title="Edit Section Intro" />
            <div className="py-12">
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <section className="flex flex-col space-y-8">
                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="title" value="Judul" />

                                    <TextInput
                                        id="title"
                                        className="mt-1 block w-full"
                                        value={data.title ?? ""}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        isFocused
                                        autoComplete="title"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.title}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="query" value="query" />

                                    <TextInput
                                        id="query"
                                        className="mt-1 block w-full"
                                        value={data.query ?? ""}
                                        onChange={(e) => {
                                            setData("query", e.target.value);
                                            setQuery(e.target.value);
                                        }}
                                        required
                                        isFocused
                                        autoComplete="query"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.query}
                                    />
                                </div>
                                <div>
                                    <iframe
                                        width="450"
                                        height="250"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={embedUrl}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="latitude"
                                        value="latitude"
                                    />

                                    <TextInput
                                        id="latitude"
                                        className="mt-1 block w-full"
                                        value={data.latitude ?? ""}
                                        onChange={(e) =>
                                            setData("latitude", e.target.value)
                                        }
                                        isFocused
                                        autoComplete="latitude"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.latitude}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="longitude"
                                        value="longitude"
                                    />

                                    <TextInput
                                        id="longitude"
                                        className="mt-1 block w-full"
                                        value={data.longitude ?? ""}
                                        onChange={(e) =>
                                            setData("longitude", e.target.value)
                                        }
                                        isFocused
                                        autoComplete="longitude"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.longitude}
                                    />
                                </div>
                                <div className="mt-8 flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>
                                        {invitation ? "Update" : "Save"}
                                    </PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enterFrom="opacity-0"
                                        leaveTo="opacity-0"
                                        className="transition ease-in-out"
                                    >
                                        {invitation ? (
                                            <p className="text-sm text-gray-600">
                                                Updated
                                            </p>
                                        ) : (
                                            <p className="text-sm text-gray-600">
                                                Saved.
                                            </p>
                                        )}
                                    </Transition>
                                </div>
                            </section>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Gmap;
