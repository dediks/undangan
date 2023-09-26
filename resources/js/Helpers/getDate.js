const getDatea = (date_in_string) => {
    let t = date_in_string.split(/[- :]/);

    let d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
    let date_obj = new Date(d);

    const [day, month, date, year, hour, minutes, seconds] = [
        date_obj.getDay(),
        date_obj.getMonth(),
        date_obj.getDate(),
        date_obj.getFullYear(),
        date_obj.getHours(),
        date_obj.getMinutes(),
        date_obj.getSeconds(),
    ];

    return {
        date: `${getDayInWord(day)}, ${date} ${getMonthInWord(month)} ${year}`,
        time: `${hour > 9 ? hour : "0" + hour}:${
            minutes > 9 ? minutes : "0" + minutes
        }`,
    };
};

const getDate = (full_date) => {
    // 2023-09-16 to ['2023', '09', '16']
    let t = full_date.split(/[- :]/);
    let d = new Date(t[0], t[1] - 1, t[2]);
    let date_obj = new Date(d);

    console.log(date_obj);

    return [
        date_obj.getDay(),
        date_obj.getMonth(),
        date_obj.getDate(),
        date_obj.getFullYear(),
    ];
};

// 2023-09-16 to Sabtu, 16 September 2023
const getDateInWord = (plain_date) => {
    if (plain_date == null) {
        return "";
    }

    const [day, month, date, year] = getDate(plain_date);

    return `${getDayInWord(day)}, ${date} ${getMonthInWord(month)} ${year}`;
};

//10 to November, 0 to Januari
const getMonthInWord = (number_of_month) => {
    switch (parseInt(number_of_month)) {
        case 0:
            return "Januari";
        case 1:
            return "Februari";
        case 2:
            return "Maret";
        case 3:
            return "April";
        case 4:
            return "Mei";
        case 5:
            return "Juni";
        case 6:
            return "Juli";
        case 7:
            return "Agustus";
        case 8:
            return "September";
        case 9:
            return "Oktober";
        case 10:
            return "November";
        case 11:
            return "Desember";
    }
};

//0 to Senin
const getDayInWord = (day) => {
    switch (parseInt(day)) {
        case 1:
            return "Senin";
        case 2:
            return "Selasa";
        case 3:
            return "Rabu";
        case 4:
            return "Kamis";
        case 5:
            return "Jum'at";
        case 6:
            return "Sabtu";
        case 0:
            return "Minggu";
    }
};

export { getDateInWord };

export default getDate;
