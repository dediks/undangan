import { MdCalendarMonth } from "react-icons/md";
import { TiCalendarOutline } from "react-icons/ti";

const month_in_number = {
    Januari: 1,
    Februari: 2,
    Maret: 3,
    April: 4,
    Mei: 5,
    Juni: 6,
    Juli: 7,
    Agustus: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12,
};

export default function AddToCalendarButton({
    day,
    year,
    month,
    data,
    className,
}) {
    let month_target = month;
    month_target = month_target < 10 ? "0" + month_target : month_target;
    const date_target = day < 10 ? "0" + day : day;

    const now = new Date();
    const date_now = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    const month_now =
        now.getMonth() + 1 < 10 ? "0" + now.getMonth() + 1 : now.getMonth() + 1;

    const google_calendar_url = `https://www.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20Of%20`;

    const dates =
        now.getFullYear() +
        "" +
        month_now +
        "" +
        date_now +
        "/" +
        year +
        "" +
        month_target +
        "" +
        date_target;

    console.log(dates);

    const full_url = `${
        google_calendar_url + "Naim"
    }%20&%20${"Luyyina"}&details=${"Cirebon"},%20${day}%20${month}%20${year}%20${"alamat lengkap"}&dates=${dates}&location=${"https://maplink.com"}`;

    return (
        <button className="mt-8 inline-flex justify-center items-center space-x-2 text-gray-100 text-xl bg-amber-500 rounded-full px-8 py-4">
            <a
                className="flex items-center space-x-2"
                target="_blank"
                href={full_url}
                rel="noreferrer"
            >
                <MdCalendarMonth />
                <span>Simpan Acara ke Kalender</span>
            </a>
        </button>
    );
}
