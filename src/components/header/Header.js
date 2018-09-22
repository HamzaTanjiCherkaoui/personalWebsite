import React from 'react';
import './Header.css';

const Header = ({rightNav ,logo,title, subTitle, additionalDetails}) => {
    return (
        <React.Fragment>
            <div class="header">
                <div>
                    {rightNav}
                </div>
            </div>
            <div class="brand">
                {logo && <img src={logo} class="logo"/>}
                <h1>
                    {title}
                    <span class="white">
                        |</span>
                    <span class="light">{subTitle}
                        {additionalDetails}
                    </span>
                </h1>

            </div>
        </React.Fragment>
    );
}

export default Header ; 