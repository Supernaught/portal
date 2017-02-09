import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sticky } from 'react-sticky';

import SearchBox from '../../presentational/SearchBox';
import ProfileAvatar from '../../presentational/ProfileAvatar';
import { searchUser } from '../../../api/search-api';

import './index.css';

export default class Header extends Component {

  handleSearchFilter(searchFilter) {
    this.props.actions.setFilter(searchFilter);
    this.props.actions.fetchFilterResult(searchUser(searchFilter));
  }

  render() {
    const searchboxComponent = (this.props.noSearch) ? null :
            <SearchBox 
              resultList={this.props.filterResult} 
              onUserInput={this.handleSearchFilter.bind(this)} />;

    return (
      <Sticky className="header content">
        <div className="header__container content__wrapper">
        	<div className="header__section">
            <Link className="header__nav header__nav--container header__logo-wrapper" to={"/"}>
          		<svg className="header__logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49"><defs></defs><title>app-logo</title><path d="M19.32,30.68c-.7-.7-1.37-1.4-2-2.11-1.09-1.2-2.11-2.4-3-3.6A10.73,10.73,0,0,0,25,35.74c-1.2-.93-2.41-2-3.6-3C20.72,32.05,20,31.38,19.32,30.68Z" transform="translate(-0.5 -0.5)"/><path d="M25,.5A24.5,24.5,0,1,0,49.5,25,24.5,24.5,0,0,0,25,.5Zm-.8,10.39A14.15,14.15,0,0,1,38.54,29.05a14,14,0,0,1-3.35,5.75L35,35l-.2.19a24.19,24.19,0,0,1-3.19-1.72,10.68,10.68,0,0,0,1.86-1.86,10.42,10.42,0,0,0,1.3-2.15A10.75,10.75,0,0,0,20.54,15.23a10.42,10.42,0,0,0-2.15,1.3,10.68,10.68,0,0,0-1.86,1.86,24.18,24.18,0,0,1-1.72-3.19L15,15l.2-.19a14,14,0,0,1,5.75-3.35A14.13,14.13,0,0,1,24.2,10.89ZM40.36,40.36c-1.2,1.2-3.68,2.07-8.7-.37l-.6-.3c-.65-.34-1.33-.72-2-1.14a14.15,14.15,0,0,1-17.6-17.6c-.42-.68-.8-1.35-1.14-2l-.3-.6c-2.44-5-1.57-7.5-.37-8.7s3.68-2.07,8.7.37a16.2,16.2,0,0,0-3.59,2.19c-1.43-.47-2.38-.48-2.7-.16s-.31,1.27.16,2.7a17.92,17.92,0,0,0,1,2.42,31.78,31.78,0,0,0,2,3.37q.71,1.06,1.6,2.21a57.14,57.14,0,0,0,4.9,5.53,57.14,57.14,0,0,0,5.53,4.9q1.15.89,2.21,1.6a31.78,31.78,0,0,0,3.37,2,17.92,17.92,0,0,0,2.42,1c1.43.47,2.38.48,2.7.16s.31-1.27-.16-2.7A16.2,16.2,0,0,0,40,31.66C42.43,36.68,41.56,39.16,40.36,40.36Z" transform="translate(-0.5 -0.5)"/></svg>
            </Link>
            <Link className="header__nav" to={"/"} 
                  activeClassName={'header__nav--active'} 
                  onlyActiveOnIndex={true}>Home</Link>
            <Link className="header__nav" to={"/employees"} 
                  activeClassName={'header__nav--active'} 
                  onlyActiveOnIndex={true}>Employees</Link>
            <Link className="header__nav" to={"/employees/davy"} 
                  activeClassName={'header__nav--active'} 
                  onlyActiveOnIndex={true}>Profile</Link>
        	</div>
        	<div className="header__section">
            {searchboxComponent}
            <div className="header__nav dropdown">
              <ProfileAvatar className="header__user-picture" />
              <svg className="dropdown__toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7,10L12,15L17,10H7Z" />
              </svg>
              <div className="dropdown__menu">
                <Link to="/employees/davy" className="dropdown__menu-item">Your Profile</Link>
                <Link to="" className="dropdown__menu-item">Edit Profile</Link>
                <Link to="/about" className="dropdown__menu-item">About</Link>
                <hr/>
                <Link to="" className="dropdown__menu-item">Sign out</Link>
              </div>
            </div>
        	</div>
        </div>
      </Sticky>
    )
  }
}