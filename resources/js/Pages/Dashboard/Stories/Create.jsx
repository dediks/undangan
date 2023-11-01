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

export default function Create({ auth }) {
    const invitationId = usePage().props.invitation.id;

    const storyData = {
        title: "",
        story: "",
        date: "",
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
    } = useForm(storyData);

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        post(`/invitation/${invitationId}/stories`, {
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
        });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Story
                </h2>
            }
        >
            <Head title="Create Story" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <form onSubmit={submit}>
                        <div className="flex flex-col space-y-5 p-4 sm:p-8 bg-white shadow sm:rounded-lg">
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
                                    placeholder="cth: Fase Perkenalan"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.title}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="story" value="Cerita" />

                                <textarea
                                    id="story"
                                    className="mt-1 block w-full"
                                    value={data.story ?? ""}
                                    onChange={(e) =>
                                        setData("story", e.target.value)
                                    }
                                    isFocused
                                    autoComplete="story"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.story}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="date" value="Waktu" />

                                <TextInput
                                    id="date"
                                    className="mt-1 block w-full"
                                    value={data.date ?? ""}
                                    onChange={(e) =>
                                        setData("date", e.target.value)
                                    }
                                    isFocused
                                    autoComplete="date"
                                    placeholder="cth: September 2022"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.date}
                                />
                            </div>
                            <div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="image" value="Image" />
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
                                        autoComplete="image"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.image}
                                    />
                                </div>
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
