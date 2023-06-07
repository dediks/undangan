const useDate = (date_in_string) => {
    let t = date_in_string.split(/[- :]/);

    // Apply each element to the Date function
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

    let day_in_word = "";

    switch (day) {
        case 0:
            day_in_word = "Minggu";
            break;
        case 1:
            day_in_word = "Senin";
            break;
        case 2:
            day_in_word = "Selasa";
            break;
        case 3:
            day_in_word = "Rabu";
            break;
        case 4:
            day_in_word = "Kamis";
            break;
        case 5:
            day_in_word = "Jum'at";
            break;
        case 6:
            day_in_word = "Sabtu";
            break;
    }

    let month_in_word = "";

    switch (month) {
        case 0:
            month_in_word = "Januari";
            break;
        case 1:
            month_in_word = "Februari";
            break;
        case 2:
            month_in_word = "Maret";
            break;
        case 3:
            month_in_word = "April";
            break;
        case 4:
            month_in_word = "Mei";
            break;
        case 5:
            month_in_word = "Juni";
            break;
        case 6:
            month_in_word = "Juli";
            break;
        case 7:
            month_in_word = "Agustus";
            break;
        case 8:
            month_in_word = "September";
            break;
        case 9:
            month_in_word = "Oktober";
            break;
        case 10:
            month_in_word = "November";
            break;
        case 11:
            month_in_word = "Desember";
            break;
    }

    return {
        date: `${day_in_word}, ${date} ${month_in_word} ${year}`,
        time: `${hour > 9 ? hour: '0'+hour }:${minutes > 9 ? minutes :'0'+minutes }`,
    };
};

export default useDate;
