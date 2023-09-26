import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import UploadImagePreview from "@/Components/UploadImagePreview";
import useToast from "@/Hooks/useToast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React, { Suspense, lazy, useEffect, useState } from "react";
import TextInput from "@/Components/TextInput";

let CoverTheme = () => {
    return (
        <div className="text-red-800 bg-white min-h-full flex justify-center items-center">
            Sedang Memuat...
        </div>
    );
};

const getCoverTheme = (theme_id) => {
    switch (theme_id) {
        case "Theme_1":
            CoverTheme = lazy(() =>
                import(`@/Components/Themes/Theme-1/Section/Cover`)
            );
        case "Theme_2":
            CoverTheme = lazy(() =>
                import(`@/Components/Themes/Theme_2/Section/Cover`)
            );
    }
};

const CoverSection = ({ auth, invitation, coverData, isPreview = false }) => {
    const { data, setData, errors, processing, recentlySuccessful } =
        useForm(coverData);

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        if (invitation && coverData) {
            router.post(
                `/invitation/cover/${coverData["id"]}`,
                {
                    _method: "put",
                    ...data,
                },
                {
                    onSuccess: (res) => {
                        // console.log("heeeeeee");
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
        }
    };

    useEffect(() => {
        getCoverTheme("Theme_2");
    }, []);

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Section Cover
                </h2>
            }
        >
            <Head title="Edit Section Cover" />
            <div className="px-8 py-12 flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-8/12">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <section className="flex flex-col space-y-8">
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        className="mt-1 block w-full"
                                        value={data.title ?? ""}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        required
                                        autoComplete="title"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.title}
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="invitation_date"
                                        value="Date"
                                    />

                                    <input
                                        id="invitation_date"
                                        className="mt-1 block w-full"
                                        value={data.date ?? ""}
                                        onChange={(e) => {
                                            setData("date", e.target.value);
                                        }}
                                        type="date"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.date_in_string}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="background_image"
                                        value="Image"
                                    />
                                    <UploadImagePreview
                                        selectedFile={data.background_image}
                                    />
                                    <FileInput
                                        id="background_image"
                                        className="mt-1 block w-full "
                                        onChange={(e) => {
                                            setData(
                                                "background_image",
                                                e.target.files[0]
                                            );
                                        }}
                                        isFocused
                                        autoComplete="background_image"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.background_image}
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
                    </form>
                </div>
                <div className="md:w-4/12 p-4 bg-white shadow-xl">
                    <div className="relative rounded-md aspect-[9/16] bg-black">
                        <Suspense fallback={<div>Loading...</div>}>
                            <CoverTheme data={data} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CoverSection;
