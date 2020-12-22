import React from 'react';

const Card = ({name, data, id}) => {
    return (
        <div className="pageData">
            <p>{id}</p>
            <p>{name}</p>
            <p>{data}</p>
            </div>
    );
}

export default Card