import * as React from 'react';
import MyImage from '../../images/mypic.jpg'

export interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (<header className='header'>
        <div className='heading'>
            <img className='circle-img' src={MyImage} alt='Sk Ramizuddin' />
            <div className='text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary-main'>Hi, I'm Ramiz</span>
                    <span className='heading-primary-sub'>Web Developer at day, Android Developer at night</span>
                </h1>
                <a className='btn btn-white btn-animated' href='#'>Get to know me</a>
            </div>
        </div>
    </header>);
}

export default Header;