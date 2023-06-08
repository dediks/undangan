import { FilePond, registerPlugin } from "react-filepond";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import FileInput from "@/Components/FileInput";
import UploadImagePreview from "@/Components/UploadImagePreview";
import SelectInput from "@/Components/SelectInput";
import BrideFormSection from "./BrideFormSection";
import GroomFormSection from "./GroomFormSection";
import useToast from "@/Hooks/useToast";

export default function BrideGroomFormSection({
    className,
    invitation = null,
}) {
    const invitationData = invitation
        ? invitation
        : {
              bride_nickname: "",
              groom_nickname: "",
              groom_fullname: "",
              bride_fullname: "",
              bride_father: "",
              bride_mother: "",
              groom_mother: "",
              groom_father: "",
              bride_as_child_position: 0,
              groom_as_child_position: 0,
              groom_photo: null,
              bride_photo: null,
              bride_domicile: "",
              groom_domicile: "",
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
    } = useForm(invitationData);

    const showToast = useToast();

    const submit = (e) => {
        e.preventDefault();

        if (invitation) {
            router.post(
                `/invitation/bridegroom/${invitation["id"]}`,
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
            post("/invitation/bridegroom");
        }
    };

    return (
        <section className={className}>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="container grid md:grid-cols-2 gap-8">
                    <section className="flex flex-col space-y-8">
                        <BrideFormSection
                            data={data}
                            errors={errors}
                            setData={setData}
                            progress={progress}
                        />
                    </section>
                    <section className="flex flex-col space-y-8">
                        <GroomFormSection
                            data={data}
                            errors={errors}
                            setData={setData}
                            progress={progress}
                        />
                    </section>
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
                            <p className="text-sm text-gray-600">Updated</p>
                        ) : (
                            <p className="text-sm text-gray-600">Saved.</p>
                        )}
                    </Transition>
                </div>
            </form>
        </section>
    );
}
