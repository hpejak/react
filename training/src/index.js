import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './style.css'

function Training() {
    return (
        <React.Fragment>
            <div className='container'>
                <PageTitle/>
                <PageBody/>
            </div>
        </React.Fragment>
    );
}

const PageTitle = () => {
    return (
        <h3 >This is start of Training</h3>
    )
}

const PageBody = () => {
    return (
        <div>
            <p>Training is in progress</p>
        </div>
    )
}


ReactDom.render(<Training/>,document.getElementById('training'))