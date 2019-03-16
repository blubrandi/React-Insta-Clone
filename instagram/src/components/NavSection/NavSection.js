import React from 'react'

import SearchBar from '../SearchBar/SearchBar'
import './NavSection.css'


const NavSection = () => {
    return (
        <div className="navSection">
            <div className="brandArea">
                <div className="brandIcon">
                    <i class="fab fa-instagram"></i>
                </div>
                <div className="brandName">
                    <img className="logo" src={require('./insta-logo.png')} alt="logo" />
                </div>
            </div>
            <div className="navSearch">
                <SearchBar />
            </div>
            <div className="navIcons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default NavSection