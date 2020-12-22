import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './style.css'
import Card from "./Card";

function Training() {
    const titleText = "This is start of training"
    const passingValue = "Passing FirstValue"
    const somePassingValue = "I am passing some value"
    const someAdditionalData = 3


    return (
        <React.Fragment>
            <div className='container'>
                <PageTitle titleText={titleText} someAdditionalData={someAdditionalData} />
                <PageBody passingValue={passingValue} somePassingValue={somePassingValue}>
                    <p>Some additional text from children</p>
                </PageBody>
            </div>
        </React.Fragment>
    );
}

const PageTitle = ({titleText, someAdditionalData}) => {
    return (
        <div className="titleClass" align="center">
            <h2 >{ titleText + ' ' + someAdditionalData}</h2>
        </div>
    )
}

const PageBody = (props) => {
    const {passingValue, somePassingValue, children}  = props;
    return (
        <div>
            <p>Training is in progress</p>
            <p>{passingValue}</p>
            <p>{somePassingValue}</p>
            {children}
            <PageData />
        </div>
    )
}

const PageData = (props) => {
    return (<section>
        {data.map((dataObject) => {
            return (
                <Card {...dataObject} key={dataObject.id}/>
            );
        })}
    </section>)
}


const data = [{
    name: 'Some Text',
    data: 'Data for Page',
    id: 1,
},{
    name: 'Additional Text',
    data: 'Additional data for Page',
    id: 2,
}];

ReactDom.render(<Training/>,document.getElementById('training'))