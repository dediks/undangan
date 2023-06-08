import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import FileInput from "@/Components/FileInput";
import UploadImagePreview from "@/Components/UploadImagePreview";
import SelectInput from "@/Components/SelectInput";
import InputFile from "@/Components/InputFile";
import Test from "@/Components/Test";

export default function GroomFormSection({ data, errors, setData, progress }) {
    return (
        <>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Mempelai Pria
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <div>
                <InputLabel
                    htmlFor="groom_nickname"
                    value="Nama pendek mempelai pria"
                />

                <TextInput
                    id="groom_nickname"
                    className="mt-1 block w-full"
                    value={data.groom_nickname ?? ""}
                    onChange={(e) => setData("groom_nickname", e.target.value)}
                    required
                    isFocused
                    autoComplete="groom_nickname"
                />

                <InputError className="mt-2" message={errors.groom_nickname} />
            </div>
            <div>
                <InputLabel
                    htmlFor="groom_fullname"
                    value="Nama panjang mempelai pria"
                />

                <TextInput
                    id="groom_fullname"
                    className="mt-1 block w-full"
                    value={data.groom_fullname ?? ""}
                    onChange={(e) => setData("groom_fullname", e.target.value)}
                    required
                    isFocused
                    autoComplete="groom_fullname"
                />

                <InputError className="mt-2" message={errors.groom_fullname} />
            </div>
            <div>
                <InputLabel
                    htmlFor="groom_father"
                    value="Nama ayah mempelai pria"
                />

                <TextInput
                    id="groom_father"
                    className="mt-1 block w-full"
                    value={data.groom_father ?? ""}
                    onChange={(e) => setData("groom_father", e.target.value)}
                    required
                    isFocused
                    autoComplete="groom_father"
                />

                <InputError className="mt-2" message={errors.groom_father} />
            </div>
            <div>
                <InputLabel
                    htmlFor="groom_mother"
                    value="Nama ibu mempelai pria"
                />

                <TextInput
                    id="groom_mother"
                    className="mt-1 block w-full"
                    value={data.groom_mother ?? ""}
                    onChange={(e) => setData("groom_mother", e.target.value)}
                    required
                    isFocused
                    autoComplete="groom_mother"
                />

                <InputError className="mt-2" message={errors.groom_mother} />
            </div>
            <div>
                <InputLabel
                    htmlFor="groom_domicile"
                    value="Domisili Mempelai Pria"
                />

                <TextInput
                    id="groom_domicile"
                    className="mt-1 block w-full"
                    value={data.groom_domicile ?? ""}
                    onChange={(e) => setData("groom_domicile", e.target.value)}
                    required
                    isFocused
                    autoComplete="groom_domicile"
                />

                <InputError className="mt-2" message={errors.groom_domicile} />
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
                        setData("groom_as_child_position", e.target.value)
                    }
                    required
                    autoComplete="groom_as_child_position"
                >
                    <option value={1}>Pertama</option>
                    <option value={2}>Kedua</option>
                    <option value={3}>Ketiga</option>
                    <option value={4}>Keempat</option>
                    <option value={5}>Kelima</option>
                </SelectInput>

                <InputError
                    className="mt-2"
                    message={errors.groom_as_child_position}
                />
            </div>
            <div className="flex flex-col space-y-2">
                <InputLabel htmlFor="groom_photo" value="Foto mempelai pria" />

                <UploadImagePreview selectedFile={data.groom_photo} />
                <FileInput
                    id="groom_photo"
                    className="mt-1 block w-full "
                    onChange={(e) => {
                        setData("groom_photo", e.target.files[0]);
                    }}
                    isFocused
                    autoComplete="groom_photo"
                />
                <InputError className="mt-2" message={errors.groom_photo} />
            </div>
        </>
    );
}
