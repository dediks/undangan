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
import { useRef } from "react";
import useImage from "@/Hooks/useImage";

let _URL = window.URL || window.webkitURL;

const getImageDetail = (image) => {
    let file, img;
    let width = 0;
    let height = 0;

    if ((file = image.files[0])) {
        img = new Image();
        var objectUrl = _URL.createObjectURL(file);
        img.onload = function () {
            width = this.width;
            height = this.height;

            console.log("height dalam", height);
            console.log("width dalam", width);
            _URL.revokeObjectURL(objectUrl);
        };
        img.src = objectUrl;
    }
    console.log("height", height);
    console.log("width", width);

    return [width, height];
};

export default function Create({ auth }) {
    const invitationId = usePage().props.invitation.id;
    const uploadedImageRef = useRef(null);

    const imageData = {
        alt: "",
        height: "",
        width: "",
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
    } = useForm(imageData);

    const setWidthHeightData = (target) => {
        let file, img;

        if ((file = target.files[0])) {
            img = new Image();
            let objectUrl = _URL.createObjectURL(file);
            img.onload = function (e) {
                setData((data) => ({ ...data, height: this.height }));
                setData((data) => ({ ...data, width: this.width }));

                _URL.revokeObjectURL(objectUrl);
            };
            img.src = objectUrl;
        }
    };

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        post(
            route("galleries.store", {
                invitationId: invitationId,
            }),
            {
                onSuccess: (res) => {
                    console.log("onSuccess", res);
                    showToast("berhasil", {
                        type: "success",
                        position: "top-right",
                        autoClose: 3000,
                    });
                },
                onError: (errors) => {
                    console.log("error", errors);
                },
            }
        );
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Upload Image
                </h2>
            }
        >
            <Head title="Uplaod Image" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <form onSubmit={submit}>
                        <div className="flex flex-col space-y-5 p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="image" value="Image" />
                                    <UploadImagePreview
                                        uploadedImageRef={uploadedImageRef}
                                        selectedFile={data.image}
                                    />
                                    <FileInput
                                        id="image"
                                        className="mt-1 block w-full "
                                        onChange={(e) => {
                                            setData("image", e.target.files[0]);
                                            setWidthHeightData(e.target);
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
                            <div>
                                <InputLabel
                                    htmlFor="alt"
                                    value="Deskripsi foto"
                                />

                                <TextInput
                                    id="alt"
                                    className="mt-1 block w-full"
                                    value={data.alt ?? ""}
                                    onChange={(e) =>
                                        setData("alt", e.target.value)
                                    }
                                    isFocused
                                    autoComplete="alt"
                                    placeholder="Deskripsi foto"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.alt}
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
