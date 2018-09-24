import React from 'react';
import './Header.css';

const Header = ({rightNav ,logo,logoColor,title, subTitle, additionalDetails}) => {
    return (
        <React.Fragment>
            <div className="header">
                <div>
                    {rightNav}
                </div>
            </div>
            <div className="brand">
                {logo && <img src={logo} className="logo" alt="logo"/>}
                {logoColor && <div className={`image ${logoColor}`}></div>}
                {title && <h1>
                    {title}
                    <span className="white">
                        |</span>
                    <span className="light">{subTitle}
                        {additionalDetails}
                    </span>
                </h1>}

            </div>
        </React.Fragment>
    );
}

export default Header ; 