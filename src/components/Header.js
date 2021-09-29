import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
// importing icons from material UI icons
import {
    Search,
    SupervisorAccount,
    Home,
    BusinessCenter,
    Chat,
    Notifications
} from '@mui/icons-material';


function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="data:image/jpeg;base64,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" alt="" />

                <div className="header__search"> 
                    <Search/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={Home} title='Home' />
                <HeaderOption Icon={SupervisorAccount} title='My Network' />
                <HeaderOption Icon={BusinessCenter} title='Jobs' />
                <HeaderOption Icon={Chat} title='Messaging' />
                <HeaderOption Icon={Notifications} title='Notifications' />
                <HeaderOption avatar='https://pbs.twimg.com/profile_images/1283282006948941828/M92gbnbE_400x400.jpg' title='me'/>
            </div>

        </div>
    )
}

export default Header