import * as React from 'react';
import MyImage from '../../images/mypic.jpg'

export interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (<header className='header'>
        <div className='header__heading'>
            <img className='img--circle' src={MyImage} alt='Sk Ramizuddin' />
            <div className='header__text-box'>
                <h1 className='header__heading-primary'>
                    <span className='header__heading-primary--main'>Hi, I'm Ramiz</span>
                    <span className='header__heading-primary--sub'>Web Developer at day, Android Developer at night</span>
                </h1>
                <a className='btn btn--white btn--animated' href='#'>Get to know me</a>
            </div>
        </div>
    </header>);
}

export default Header;