import React from 'react';

const Card = ({name, data, id}) => {

    const clickEvent = (entryName) => {
        console.log("Some message " + entryName)
    }

    return (
        <div className="pageData" onMouseOver={() => {console.log("This is " + id + " id")}}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{data}</p>
            <button type="button" onClick={() => clickEvent(name)}>Click Me</button>
        </div>
    );
}

export default Card