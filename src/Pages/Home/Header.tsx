import * as React from 'react';

export interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (<header className='header'>
        Welcome to my World!!
    </header>);
}

export default Header;