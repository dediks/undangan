import React from "react";

function Test(props) {
    const { label, ...otherProps } = props;

    console.log({ ...otherProps });
    return <div>Test</div>;
}

export default Test;
