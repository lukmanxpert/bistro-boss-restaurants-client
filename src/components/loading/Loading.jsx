import React from 'react';
import { ThreeCircles } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;