import React from 'react';
import './Skeleton.css';

const Skeleton = () => {
    return(
        <section>
            <ul>
                <li className='background'>
                    <div className='image'></div>
                </li>
                <li className='background'></li>
                <li className='background'></li>
            </ul>
        </section>
    );
}

export { Skeleton }