import React from 'react'
import { FaLaughWink, FaTachometerAlt, FaCog, FaWrench, FaRegFolder, FaRegChartBar, FaTable, FaAngleLeft } from "react-icons/fa";
import Wrapper from './TopBar';
import Flexbox from 'flexbox-react';

export default function SideBar() {
    return (
        <div className="d-flex flex-column">
            <Flexbox>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas"><FaLaughWink /></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>

                    <hr className="sidebar-divider my-0"></hr>

                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas "><FaTachometerAlt /></i>
                            <span>Dashboard</span></a>
                    </li>

                    <hr className="sidebar-divider"></hr>

                    <div className="sidebar-heading">
                        Interface
                    </div>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas "><FaCog /></i>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <a className="collapse-item" href="buttons.html">Buttons</a>
                                <a className="collapse-item" href="cards.html">Cards</a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas "><FaWrench /></i>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <a className="collapse-item" href="utilities-color.html">Colors</a>
                                <a className="collapse-item" href="utilities-border.html">Borders</a>
                                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                <a className="collapse-item" href="utilities-other.html">Other</a>
                            </div>
                        </div>
                    </li>

                    <hr className="sidebar-divider"></hr>

                    <div className="sidebar-heading">
                        Addons
                    </div>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas "><FaRegFolder /></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <a className="collapse-item" href="login.html">Login</a>
                                <a className="collapse-item" href="register.html">Register</a>
                                <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                <div className="collapse-divider"></div>
                                <h6 className="collapse-header">Other Pages:</h6>
                                <a className="collapse-item" href="404.html">404 Page</a>
                                <a className="collapse-item" href="blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas "><FaRegChartBar /></i>
                            <span>Charts</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas"><FaTable /></i>
                            <span>Tables</span></a>
                    </li>

                    <hr className="sidebar-divider d-none d-md-block"></hr>

                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => {
                            const sideBar = document.querySelector('.sidebar');
                            if (sideBar.classList.contains('toggled')) {
                                sideBar.classList.remove('toggled');
                            } else {
                                sideBar.classList.add('toggled');
                            }
                        }
                        }><FaAngleLeft color='#fff' /></button>
                    </div>

                    <div className="sidebar-card d-none d-lg-flex">
                        <img class="sidebar-card-illustration mb-2" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt="..." />
                        <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                        <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                    </div>
                </ul>
                <Wrapper />
            </Flexbox>
        </div>
    )
}
