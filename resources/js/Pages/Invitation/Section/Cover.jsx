import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import UploadImagePreview from "@/Components/UploadImagePreview";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React from "react";

const Cover = ({ auth }) => {
    const {
        data,
        setData,
        post,
        put,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm("");

    const invitation = usePage().props.invitation;

    console.log(invitation);

    const submit = (e) => {
        e.preventDefault();

        if (invitation) {
            router.post(
                `/invitation/section/cover/${invitation["id"]}`,
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
                                        htmlFor="cover_background"
                                        value="Upload Cover Background"
                                    />
                                    <UploadImagePreview
                                        selectedFile={data.cover_background}
                                    />
                                    <FileInput
                                        id="cover_background"
                                        className="mt-1 block w-full "
                                        onChange={(e) => {
                                            setData(
                                                "cover_background",
                                                e.target.files[0]
                                            );
                                        }}
                                        isFocused
                                        autoComplete="cover_background"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.cover_background}
                                    />
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
