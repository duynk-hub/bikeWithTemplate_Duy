import React from 'react';
import PropTypes from 'prop-types';

MainMenu.propTypes = {

};

function MainMenu(props) {
    return (
        <div>
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu" style={{ display: 'block' }}>
                        <li className="text-center">
                            <img src="/assets/img/gg.png" className="user-image img-responsive" />
                        </li>
                        <li>
                            <a className="active-menu"><i className="fa fa-dashboard fa-3x" /> Dashboard</a>
                        </li>
                        <li>
                            <a href="table.html"><i className="fa fa-table fa-3x" /> Bike Manager Table</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default MainMenu;