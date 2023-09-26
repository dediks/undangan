import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import UploadImagePreview from "@/Components/UploadImagePreview";
import useToast from "@/Hooks/useToast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React, { Suspense, lazy, useEffect } from "react";

let IntroTheme = () => {
    return (
        <div className="text-red-800 bg-white min-h-full flex justify-center items-center">
            Sedang Memuat...
        </div>
    );
};

const getIntroTheme = (theme_id) => {
    switch (theme_id) {
        case "Theme_1":
            IntroTheme = lazy(() =>
                import(`@/Components/Themes/Theme-1/Section/Intro`)
            );
        case "Theme_2":
            IntroTheme = lazy(() =>
                import(`@/Components/Themes/Theme_2/Section/Intro`)
            );
    }
};

const getFormInput = (type) => {
    switch (type) {
        case "text":
            // import component text;
            break;
        case "boolean":
            //radio button
            break;
        case "image":
            // input file
            break;
        case "slideshow":
            // import komponen slideshow
            break;
        case "relation":
            break;
    }
};

const IntroSection = ({ auth, invitation, introData, schema }) => {
    const dataIntro = introData
        ? introData
        : {
              image: "",
              title: "",
          };

    const { data, setData, post, put, errors, processing, recentlySuccessful } =
        useForm(dataIntro);

    const showToast = useToast();

    useEffect(() => {
        getIntroTheme("Theme_2");
    }, []);

    const submit = (e) => {
        e.preventDefault();

        if (invitation && introData) {
            put(
                `/invitation/intro/${dataIntro["id"]}`,
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
            post(`/invitation/${invitation.id}/intro`);
        }
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Section Intro
                </h2>
            }
        >
            <Head title="Edit Section Intro" />
            <div className="px-2 md:py-12 flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-8/12">
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <section className="flex flex-col space-y-8">
                                    {Object.entries(schema.attributes).map(
                                        (attribute) => {
                                            switch (attribute[1].type) {
                                                case "text":
                                                    return (
                                                        <div
                                                            className="w-full"
                                                            key={attribute[0]}
                                                        >
                                                            <InputLabel
                                                                htmlFor={
                                                                    attribute[0]
                                                                }
                                                                value={
                                                                    attribute[1]
                                                                        .displayName
                                                                }
                                                            />

                                                            <input
                                                                id={
                                                                    attribute[0]
                                                                }
                                                                className="mt-1 block w-full"
                                                                value={
                                                                    data[
                                                                        attribute[0]
                                                                    ] ?? ""
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setData(
                                                                        attribute[0],
                                                                        e.target
                                                                            .value
                                                                    );
                                                                }}
                                                                type={
                                                                    attribute[1]
                                                                        .type
                                                                }
                                                            />

                                                            <InputError
                                                                className="mt-2"
                                                                message={
                                                                    errors[
                                                                        attribute[0]
                                                                    ]
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                case "boolean":
                                                    //radio button
                                                    break;
                                                case "image":
                                                    console.log(attribute[0]);
                                                    return (
                                                        <div
                                                            key={attribute[0]}
                                                            className="flex flex-col space-y-2"
                                                        >
                                                            <InputLabel
                                                                htmlFor={
                                                                    attribute[0]
                                                                }
                                                                value="Upload Image"
                                                            />
                                                            <UploadImagePreview
                                                                selectedFile={
                                                                    data[
                                                                        "image"
                                                                    ]
                                                                }
                                                            />
                                                            <FileInput
                                                                id={
                                                                    attribute[0]
                                                                }
                                                                className="mt-1 block w-full "
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setData(
                                                                        data[
                                                                            attribute[0]
                                                                        ],
                                                                        e.target
                                                                            .files[0]
                                                                    );
                                                                }}
                                                                isFocused
                                                            />

                                                            <InputError
                                                                className="mt-2"
                                                                message={
                                                                    errors[
                                                                        data[
                                                                            attribute[0]
                                                                        ]
                                                                    ]
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                case "slideshow":
                                                    // import komponen slideshow
                                                    break;
                                                case "relation":
                                                    break;
                                            }
                                        }
                                    )}

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
                <div className="md:w-4/12 p-4 bg-white shadow-xl">
                    <div className="relative rounded-md aspect-[9/16] bg-black">
                        <Suspense fallback={<div>Loading...</div>}>
                            <IntroTheme data={data} isPreview={true} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default IntroSection;
