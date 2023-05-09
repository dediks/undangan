import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import UploadImagePreview from "@/Components/UploadImagePreview";
import useToast from "@/Hooks/useToast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Transition } from "@headlessui/react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React from "react";

const Cover = ({ auth, coverData }) => {
    const {
        data,
        setData,
        post,
        put,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm(coverData);

    const invitation = usePage().props.invitation;

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
            <div className="py-12">
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <section className="flex flex-col space-y-8">
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="background_image"
                                        value="Upload Cover Background"
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
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Cover;
