import React from 'react';

import Profile from './components/Profile';
import Buttons from './components/Buttons';
import Info from './components/Info';
import Social from './components/Social';


function App() {
    return (
        <div className='card'>
            <Profile />
            <Buttons />
            <Info />
            <Social />
        </div>
    )
}

export default App;