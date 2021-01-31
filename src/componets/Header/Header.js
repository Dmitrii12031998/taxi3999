import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

return <div className="container">
    <nav>
        <Link to='/'>Logo</Link>
        <Link to="/">About</Link>
        <Link to="/">Galery</Link>
    </nav>
</div>
}

export default Header