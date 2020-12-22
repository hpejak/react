import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './style.css'

function Training() {
    const somePassingValue = "I am passing some value"
    const someAdditionalData = 14

    return (
        <React.Fragment>
            <div className='container'>
                <PageTitle someAdditionalData={someAdditionalData}/>
                <PageBody somePassingValue={somePassingValue}/>
            </div>
        </React.Fragment>
    );
}

const PageTitle = (props) => {
    return (
        <div className="titleClass">
            <h3 >This is start of Training {props.someAdditionalData}</h3>
        </div>
    )
}

const PageBody = (props) => {
    return (
        <div>
            <p>Training is in progress</p>
            <p>{props.somePassingValue}</p>
            <PageData firstInput={Data.data1} />
            <PageData firstInput={Data.data2} />
        </div>
    )
}

const PageData = (props) =>  {
    return(
        <p>
            {props.firstInput}
        </p>
    )
}


const Data = {
    data1: 'Some of text for Page',
    data2: 'Additional data for Page'
};

ReactDom.render(<Training/>,document.getElementById('training'))