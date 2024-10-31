const Title = ({ id, brideName, groomName }) => {
    return `${brideName ? brideName : "Bride Name "} & ${
        groomName ? groomName : "Groom Name"
    }`;
};

export default Title;
