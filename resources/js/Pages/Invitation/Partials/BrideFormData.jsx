import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import FileInput from "@/Components/FileInput";
import UploadImagePreview from "@/Components/UploadImagePreview";
import SelectInput from "@/Components/SelectInput";

export default function BrideFormData({ mustVerifyEmail, status, className }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            bride_nickname: "",
            groom_nickname: "",
            groom_fullname: "",
            bride_fullname: "",
            bride_father: "",
            bride_mother: "",
            groom_mother: "",
            groom_father: "",
            bride_photo: "",
            groom_photo: "",
            bride_as_child_position: 0,
            groom_as_child_position: 0,
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("invitation.store"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Mempelai Pria
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="container grid grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <InputLabel
                                htmlFor="bride_nickname"
                                value="Nama pendek mempelai pria"
                            />

                            <TextInput
                                id="bride_nickname"
                                className="mt-1 block w-full"
                                value={data.bride_nickname}
                                onChange={(e) =>
                                    setData("bride_nickname", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="bride_nickname"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.bride_nickname}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="bride_fullname"
                                value="Nama panjang mempelai pria"
                            />

                            <TextInput
                                id="bride_fullname"
                                className="mt-1 block w-full"
                                value={data.bride_fullname}
                                onChange={(e) =>
                                    setData("bride_fullname", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="bride_fullname"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.bride_fullname}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="bride_father"
                                value="Nama ayah mempelai pria"
                            />

                            <TextInput
                                id="bride_father"
                                className="mt-1 block w-full"
                                value={data.bride_father}
                                onChange={(e) =>
                                    setData("bride_father", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="bride_father"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.bride_father}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="bride_mother"
                                value="Nama ibu mempelai pria"
                            />

                            <TextInput
                                id="bride_mother"
                                className="mt-1 block w-full"
                                value={data.bride_mother}
                                onChange={(e) =>
                                    setData("bride_mother", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="bride_mother"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.bride_mother}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="bride_as_child_position"
                                value="Putra ke"
                            />
                            <SelectInput
                                id="bride_as_child_position"
                                className="mt-1 block w-full"
                                selected={data.bride_as_child_position}
                                onChange={(e) =>
                                    setData(
                                        "bride_as_child_position",
                                        e.target.value
                                    )
                                }
                                required
                                autoComplete="bride_as_child_position"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.bride_as_child_position}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <InputLabel
                                htmlFor="bride_photo"
                                value="Foto mempelai pria"
                            />

                            <UploadImagePreview />

                            <FileInput
                                id="bride_photo"
                                className="mt-1 block w-full "
                                value={data.bride_photo}
                                onChange={(e) =>
                                    setData("bride_photo", e.target.value)
                                }
                                isFocused
                                autoComplete="bride_photo"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.bride_photo}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <div>
                            <InputLabel
                                htmlFor="groom_nickname"
                                value="Nama pendek mempelai wanita"
                            />

                            <TextInput
                                id="groom_nickname"
                                className="mt-1 block w-full"
                                value={data.groom_nickname}
                                onChange={(e) =>
                                    setData("groom_nickname", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="groom_nickname"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.groom_nickname}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="groom_fullname"
                                value="Nama panjang mempelai wanita"
                            />

                            <TextInput
                                id="groom_fullname"
                                className="mt-1 block w-full"
                                value={data.groom_fullname}
                                onChange={(e) =>
                                    setData("groom_fullname", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="groom_fullname"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.groom_fullname}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="groom_father"
                                value="Nama ayah mempelai wanita"
                            />

                            <TextInput
                                id="groom_father"
                                className="mt-1 block w-full"
                                value={data.groom_father}
                                onChange={(e) =>
                                    setData("groom_father", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="groom_father"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.groom_father}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="groom_mother"
                                value="Nama ibu mempelai wanita"
                            />

                            <TextInput
                                id="groom_mother"
                                className="mt-1 block w-full"
                                value={data.groom_mother}
                                onChange={(e) =>
                                    setData("groom_mother", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="groom_mother"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.bride_mother}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="groom_as_child_position"
                                value="Putri ke"
                            />
                            <SelectInput
                                id="groom_as_child_position"
                                className="mt-1 block w-full"
                                selected={data.groom_as_child_position}
                                onChange={(e) =>
                                    setData(
                                        "groom_as_child_position",
                                        e.target.value
                                    )
                                }
                                required
                                autoComplete="groom_as_child_position"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.groom_as_child_position}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <InputLabel
                                htmlFor="groom_photo"
                                value="Foto mempelai wanita"
                            />

                            <UploadImagePreview />

                            <FileInput
                                id="groom_photo"
                                className="mt-1 block w-full "
                                value={data.groom_photo}
                                onChange={(e) =>
                                    setData("groom_photo", e.target.value)
                                }
                                isFocused
                                autoComplete="groom_photo"
                            />

                            <InputError
                                className="mt-2"
                                message={errors.groom_photo}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
