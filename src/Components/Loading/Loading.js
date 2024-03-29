//npm i react-loading //or// yarn add react-loading
//https://www.npmjs.com/package/react-loading


import React from 'react';
import ReactLoading from 'react-loading';

function Loading() {

    // loading icon
    return (
        <div className="loading-container">
            <ReactLoading type={'spin'} color={'green'} height={'20%'} width={'20%'} />
        </div>
    )
}

export default Loading