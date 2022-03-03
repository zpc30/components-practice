import React from 'react';

function Buttons() {
    return (
        <div className='butts'>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <a href='#'>laurasmith.website</a>
            <div className='buttsButt'>
                <button className='email'><img src='./images/icon.png'/> Email</button>
                <button className='lnkd'><img src='./images/Vector.png' />LinkedIn</button>
            </div>
        </div>
    )
}

export default Buttons;