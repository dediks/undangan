export default function getData(arrData = [], field, value = "") {
    let result = arrData.find((attr) => attr[field] == value);

    return result;
}
