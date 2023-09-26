const getTitle = (groomNickname, brideNickname) => {
    return `
        ${groomNickname ?? "Groom Nickname"} & ${
        brideNickname ?? "Bride Nickname"
    }
    `;
};

export default getTitle;
