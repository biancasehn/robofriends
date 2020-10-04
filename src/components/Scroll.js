import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '68vh'}}>
            {props.children}
        </div>
    );
};

export default Scroll;