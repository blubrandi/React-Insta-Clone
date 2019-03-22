import React from 'react';

import './SearchBar.css'

const SearchBar = props => {
  return (
      <div className="headerSection">
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
                <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
            </div>
            <div className="navIcons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
        </div>
  );
};

export default SearchBar;
