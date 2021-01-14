import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Product Management',
        to: '/products-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExace }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExace} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active} >
                    <Link to={to} >
                        {label}
                    </Link>
                </li>);
        }} />
    );
}

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <a className="navbar-brand" href="#"> Call API </a>
                    <ul className="nav navbar-nav">
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </div>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExace={menu.exact} />
                );
            });
        }
        return result;
    }
}

export default Menu;
