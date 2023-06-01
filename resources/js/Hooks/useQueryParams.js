export default function useQueryParams() {
    const search = window.location.search;
    const urlSearchParams = new URLSearchParams(search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
}
