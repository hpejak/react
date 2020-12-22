import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './style.css'
import PageTitle from "./PageTitle";
import PageBody from "./PageBody";

function Training() {
    const titleText = "This is start of training"
    const passingValue = "Passing FirstValue"
    const somePassingValue = "I am passing some value"
    const someAdditionalData = 3


    return (
        <React.Fragment>
            <div className='container'>
                <PageTitle titleText={titleText} someAdditionalData={someAdditionalData}/>
                <PageBody passingValue={passingValue}
                          somePassingValue={somePassingValue}>
                    <p>Some additional text from children</p>
                </PageBody>
            </div>
        </React.Fragment>
    );
}


ReactDom.render(<Training/>, document.getElementById('training'))