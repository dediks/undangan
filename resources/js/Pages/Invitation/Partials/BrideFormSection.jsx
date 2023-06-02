import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import FileInput from "@/Components/FileInput";
import UploadImagePreview from "@/Components/UploadImagePreview";
import SelectInput from "@/Components/SelectInput";

export default function BrideFormSection({ data, errors, setData, progress }) {
    return (
        <>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Mempelai Wanita
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <div>
                <InputLabel
                    htmlFor="bride_nickname"
                    value="Nama pendek mempelai wanita"
                />

                <TextInput
                    id="bride_nickname"
                    className="mt-1 block w-full"
                    value={data.bride_nickname ?? ""}
                    onChange={(e) => setData("bride_nickname", e.target.value)}
                    required
                    isFocused
                    autoComplete="bride_nickname"
                />

                <InputError className="mt-2" message={errors.bride_nickname} />
            </div>
            <div>
                <InputLabel
                    htmlFor="bride_fullname"
                    value="Nama panjang mempelai wanita"
                />

                <TextInput
                    id="bride_fullname"
                    className="mt-1 block w-full"
                    value={data.bride_fullname ?? ""}
                    onChange={(e) => setData("bride_fullname", e.target.value)}
                    required
                    isFocused
                    autoComplete="bride_fullname"
                />

                <InputError className="mt-2" message={errors.bride_fullname} />
            </div>
            <div>
                <InputLabel
                    htmlFor="bride_father"
                    value="Nama ayah mempelai wanita"
                />

                <TextInput
                    id="bride_father"
                    className="mt-1 block w-full"
                    value={data.bride_father ?? ""}
                    onChange={(e) => setData("bride_father", e.target.value)}
                    required
                    isFocused
                    autoComplete="bride_father"
                />

                <InputError className="mt-2" message={errors.bride_father} />
            </div>
            <div>
                <InputLabel
                    htmlFor="bride_mother"
                    value="Nama ibu mempelai wanita"
                />

                <TextInput
                    id="bride_mother"
                    className="mt-1 block w-full"
                    value={data.bride_mother ?? ""}
                    onChange={(e) => setData("bride_mother", e.target.value)}
                    required
                    isFocused
                    autoComplete="bride_mother"
                />

                <InputError className="mt-2" message={errors.bride_mother} />
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
                        setData("bride_as_child_position", e.target.value)
                    }
                    required
                    autoComplete="bride_as_child_position"
                >
                    <option value={1}>Pertama</option>
                    <option value={2}>Kedua</option>
                    <option value={3}>Ketiga</option>
                    <option value={4}>Keempat</option>
                    <option value={5}>Kelima</option>
                </SelectInput>

                <InputError
                    className="mt-2"
                    message={errors.bride_as_child_position}
                />
            </div>
            <div className="flex flex-col space-y-2">
                <InputLabel htmlFor="groom_photo" value="Foto mempelai pria" />
                <UploadImagePreview selectedFile={data.bride_photo} />
                <FileInput
                    id="bride_photo"
                    className="mt-1 block w-full "
                    onChange={(e) => {
                        setData("bride_photo", e.target.files[0]);
                    }}
                    isFocused
                    autoComplete="bride_photo"
                />

                <InputError className="mt-2" message={errors.bride_photo} />
            </div>
        </>
    );
}
