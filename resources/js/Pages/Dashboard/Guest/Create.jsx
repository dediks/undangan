import { Head, router, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useToast from "@/Hooks/useToast";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";

export default function Create({ auth, guest = null }) {
    const invitationId = usePage().props.invitation.id;

    const guestData = guest
        ? guest
        : {
              nickname: "",
              fullname: "",
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
    } = useForm(guestData);

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        if (guest) {
            router.post(
                `/invitation/${invitationId}/guests/${guest["id"]}`,
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
        } else {
            post(`/invitation/${invitationId}/guest`);
        }
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {guest ? "Edit Data Tamu" : "Tambah Tamu"}
                </h2>
            }
        >
            <Head title="Tambah Tamu" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <form onSubmit={submit}>
                        <div className="flex flex-col space-y-5 p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <div>
                                <InputLabel
                                    htmlFor="nickname"
                                    value="Identifier"
                                />

                                <TextInput
                                    id="nickname"
                                    className="mt-1 block w-full"
                                    value={data.nickname ?? ""}
                                    onChange={(e) =>
                                        setData("nickname", e.target.value)
                                    }
                                    required
                                    isFocused
                                    autoComplete="nickname"
                                    placeholder=""
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.nickname}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="nickname"
                                    value="Nama Lengkap"
                                />

                                <TextInput
                                    id="nickname"
                                    className="mt-1 block w-full"
                                    value={data.fullname ?? ""}
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                    required
                                    isFocused
                                    autoComplete="fullname"
                                    placeholder=""
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.fullname}
                                />
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <PrimaryButton disabled={processing}>
                                    {guest ? "Update" : "Save"}
                                </PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enterFrom="opacity-0"
                                    leaveTo="opacity-0"
                                    className="transition ease-in-out"
                                >
                                    {guest ? (
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
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
