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

const Intro = ({ auth, introData }) => {
    const dataIntro = introData
        ? introData
        : {
              image: "",
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
    } = useForm(dataIntro);

    const invitation = usePage().props.invitation;

    const showToast = useToast();

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
            <div className="py-12">
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <section className="flex flex-col space-y-8">
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="image"
                                        value="Upload Image"
                                    />
                                    <UploadImagePreview
                                        selectedFile={data.image}
                                    />
                                    <FileInput
                                        id="image"
                                        className="mt-1 block w-full "
                                        onChange={(e) => {
                                            setData("image", e.target.files[0]);
                                        }}
                                        isFocused
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.image}
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

export default Intro;
