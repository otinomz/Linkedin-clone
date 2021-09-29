import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'


function Sidebar() {
    
    const recentItem = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{ topic }</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQGCO8w3OQDVow/profile-displaybackgroundimage-shrink_350_1400/0/1617962687061?e=1638403200&v=beta&t=WkIA4YcKXrcBdUUr_OmkdvC7YKi4ZcTzCG00Kfab-Lg" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Otinomo Richard</h2>
                <h4>awesomeotinomz@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">
                        2543
                    </p>  
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">
                        2543
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('programming')}
            </div>

        </div>
    )
}

export default Sidebar
