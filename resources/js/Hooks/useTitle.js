const useTitle = (props) => {
    return `
        ${props.groomNickname ?? "Groom Nickname"} & ${
        props.brideNickname ?? "Bride Nickname"
    }
    `;
};

export default useTitle;
