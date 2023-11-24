import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoIcon from '../../../assets/backend/images/logo-icon.png';
// import 'perfect-scrollbar/css/perfect-scrollbar.css';
// import PerfectScrollbar from 'perfect-scrollbar';

const Sidebar = () => {
    const pathname = window.location.pathname;
    // const sideScrollBarRef = useRef(null);

    // // useEffect(() => {
    // //     const scrollbar = new PerfectScrollbar(sideScrollBarRef.current);

    // //     return () => {
    // //         scrollbar.destroy(); // Clean up Perfect Scrollbar when the component unmounts
    // //     };
    // // }, [])

    return (
        <div className="sidebar-wrapper" data-simplebar="true">
            <Link to="/admin" className="sidebar-header">
                <div>
                    <img src={logoIcon} className="logo-icon" alt="logo icon" />
                </div>
                <div>
                    <h4 className="logo-text">Rocker</h4>
                </div>
                <div className="toggle-icon ms-auto"><i className='bx bx-arrow-back'></i>
                </div>
            </Link>
            {/* <!--navigation--> */}
            <ul className="metismenu" id="menu">
                <li className={pathname === '/admin' ? 'mm-active' : ''}>
                    <Link to="/admin">
                        <div className="parent-icon"><i className='bx bx-home-alt'></i>
                        </div>
                        <div className="menu-title">Dashboard</div>
                    </Link>
                </li>
                <li className={pathname === '/admin/brand' ? 'mm-show' : ''}>
                    <a className="has-arrow" role="button" data-bs-toggle="collapse" data-bs-target="#collapse-products" aria-expanded="false">
                        <div className="parent-icon"><i className="bx bx-category"></i>
                        </div>
                        <div className="menu-title">Products</div>
                    </a>
                    <ul className="collapse" id="collapse-products">
                        <li className={pathname === '/admin/brand' ? 'mm-active' : ''}>
                            <Link to="/admin/brand"><i className='bx bx-radio-circle'></i>
                                Brand
                            </Link>
                        </li>
                        <li> <a href="app-chat-box.html"><i className='bx bx-radio-circle'></i>Chat Box</a>
                        </li>
                        <li> <a href="app-file-manager.html"><i className='bx bx-radio-circle'></i>File Manager</a>
                        </li>
                        <li> <a href="app-contact-list.html"><i className='bx bx-radio-circle'></i>Contatcs</a>
                        </li>
                        <li> <a href="app-to-do.html"><i className='bx bx-radio-circle'></i>Todo List</a>
                        </li>
                        <li> <a href="app-invoice.html"><i className='bx bx-radio-circle'></i>Invoice</a>
                        </li>
                        <li> <a href="app-fullcalender.html"><i className='bx bx-radio-circle'></i>Calendar</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a className="has-arrow" role="button" data-bs-toggle="collapse" data-bs-target="#collapse-galleries" aria-expanded="false">
                        <div className="parent-icon"><i className="bx bx-image"></i>
                        </div>
                        <div className="menu-title">Galley</div>
                    </a>
                    <ul className="collapse" id="collapse-galleries">
                        <li className={pathname === '/admin/gallery-category' ? 'mm-active' : ''}>
                            <Link to="/admin/gallery-category"><i className='bx bx-radio-circle'></i>
                                Gallery Category
                            </Link>
                        </li>
                        <li className={pathname === '/admin/gallery' ? 'mm-active' : ''}>
                            <Link to="/admin/gallery">
                                <i className='bx bx-radio-circle'></i>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">UI Elements</li>
                {/* <li>
                    <a href="">
                        <div className="parent-icon"><i className='bx bx-cookie'></i>
                        </div>
                        <div className="menu-title">Widgets</div>
                    </a>
                </li> */}
                <li>
                    <a href="javascript:;" className="has-arrow">
                        <div className="parent-icon"><i className='bx bx-cart'></i>
                        </div>
                        <div className="menu-title">eCommerce</div>
                    </a>
                    <ul>
                        <li> <a href="ecommerce-products.html"><i className='bx bx-radio-circle'></i>Products</a>
                        </li>
                        <li> <a href="ecommerce-products-details.html"><i className='bx bx-radio-circle'></i>Product Details</a>
                        </li>
                        <li> <a href="ecommerce-add-new-products.html"><i className='bx bx-radio-circle'></i>Add New Products</a>
                        </li>
                        <li> <a href="ecommerce-orders.html"><i className='bx bx-radio-circle'></i>Orders</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className='bx bx-bookmark-heart'></i>
                        </div>
                        <div className="menu-title">Components</div>
                    </a>
                    <ul>
                        <li> <a href="component-alerts.html"><i className='bx bx-radio-circle'></i>Alerts</a>
                        </li>
                        <li> <a href="component-accordions.html"><i className='bx bx-radio-circle'></i>Accordions</a>
                        </li>
                        <li> <a href="component-badges.html"><i className='bx bx-radio-circle'></i>Badges</a>
                        </li>
                        <li> <a href="component-buttons.html"><i className='bx bx-radio-circle'></i>Buttons</a>
                        </li>
                        <li> <a href="component-cards.html"><i className='bx bx-radio-circle'></i>Cards</a>
                        </li>
                        <li> <a href="component-carousels.html"><i className='bx bx-radio-circle'></i>Carousels</a>
                        </li>
                        <li> <a href="component-list-groups.html"><i className='bx bx-radio-circle'></i>List Groups</a>
                        </li>
                        <li> <a href="component-media-object.html"><i className='bx bx-radio-circle'></i>Media Objects</a>
                        </li>
                        <li> <a href="component-modals.html"><i className='bx bx-radio-circle'></i>Modals</a>
                        </li>
                        <li> <a href="component-navs-tabs.html"><i className='bx bx-radio-circle'></i>Navs & Tabs</a>
                        </li>
                        <li> <a href="component-navbar.html"><i className='bx bx-radio-circle'></i>Navbar</a>
                        </li>
                        <li> <a href="component-paginations.html"><i className='bx bx-radio-circle'></i>Pagination</a>
                        </li>
                        <li> <a href="component-popovers-tooltips.html"><i className='bx bx-radio-circle'></i>Popovers & Tooltips</a>
                        </li>
                        <li> <a href="component-progress-bars.html"><i className='bx bx-radio-circle'></i>Progress</a>
                        </li>
                        <li> <a href="component-spinners.html"><i className='bx bx-radio-circle'></i>Spinners</a>
                        </li>
                        <li> <a href="component-notifications.html"><i className='bx bx-radio-circle'></i>Notifications</a>
                        </li>
                        <li> <a href="component-avtars-chips.html"><i className='bx bx-radio-circle'></i>Avatrs & Chips</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bx bx-repeat"></i>
                        </div>
                        <div className="menu-title">Content</div>
                    </a>
                    <ul>
                        <li> <a href="content-grid-system.html"><i className='bx bx-radio-circle'></i>Grid System</a>
                        </li>
                        <li> <a href="content-typography.html"><i className='bx bx-radio-circle'></i>Typography</a>
                        </li>
                        <li> <a href="content-text-utilities.html"><i className='bx bx-radio-circle'></i>Text Utilities</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"> <i className="bx bx-donate-blood"></i>
                        </div>
                        <div className="menu-title">Icons</div>
                    </a>
                    <ul>
                        <li> <a href="icons-line-icons.html"><i className='bx bx-radio-circle'></i>Line Icons</a>
                        </li>
                        <li> <a href="icons-boxicons.html"><i className='bx bx-radio-circle'></i>Boxicons</a>
                        </li>
                        <li> <a href="icons-feather-icons.html"><i className='bx bx-radio-circle'></i>Feather Icons</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="form-froala-editor.html">
                        <div className="parent-icon"><i className='bx bx-code-alt'></i>
                        </div>
                        <div className="menu-title">Froala Editor</div>
                    </a>
                </li>
                <li className="menu-label">Forms & Tables</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className='bx bx-message-square-edit'></i>
                        </div>
                        <div className="menu-title">Forms</div>
                    </a>
                    <ul>
                        <li> <a href="form-elements.html"><i className='bx bx-radio-circle'></i>Form Elements</a>
                        </li>
                        <li> <a href="form-input-group.html"><i className='bx bx-radio-circle'></i>Input Groups</a>
                        </li>
                        <li> <a href="form-radios-and-checkboxes.html"><i className='bx bx-radio-circle'></i>Radios & Checkboxes</a>
                        </li>
                        <li> <a href="form-layouts.html"><i className='bx bx-radio-circle'></i>Forms Layouts</a>
                        </li>
                        <li> <a href="form-validations.html"><i className='bx bx-radio-circle'></i>Form Validation</a>
                        </li>
                        <li> <a href="form-wizard.html"><i className='bx bx-radio-circle'></i>Form Wizard</a>
                        </li>
                        <li> <a href="form-text-editor.html"><i className='bx bx-radio-circle'></i>Text Editor</a>
                        </li>
                        <li> <a href="form-file-upload.html"><i className='bx bx-radio-circle'></i>File Upload</a>
                        </li>
                        <li> <a href="form-date-time-pickes.html"><i className='bx bx-radio-circle'></i>Date Pickers</a>
                        </li>
                        <li> <a href="form-select2.html"><i className='bx bx-radio-circle'></i>Select2</a>
                        </li>
                        <li> <a href="form-repeater.html"><i className='bx bx-radio-circle'></i>Form Repeater</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">Pages</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bx bx-lock"></i>
                        </div>
                        <div className="menu-title">Authentication</div>
                    </a>
                    <ul>
                        <li><a className="has-arrow" href="javascript:;"><i className='bx bx-radio-circle'></i>Basic</a>
                            <ul>
                                <li><a href="auth-basic-signin.html" target="_blank"><i className='bx bx-radio-circle'></i>Sign In</a></li>
                                <li><a href="auth-basic-signup.html" target="_blank"><i className='bx bx-radio-circle'></i>Sign Up</a></li>
                                <li><a href="auth-basic-forgot-password.html" target="_blank"><i className='bx bx-radio-circle'></i>Forgot Password</a></li>
                                <li><a href="auth-basic-reset-password.html" target="_blank"><i className='bx bx-radio-circle'></i>Reset Password</a></li>
                            </ul>
                        </li>
                        <li><a className="has-arrow" href="javascript:;"><i className='bx bx-radio-circle'></i>Cover</a>
                            <ul>
                                <li><a href="auth-cover-signin.html" target="_blank"><i className='bx bx-radio-circle'></i>Sign In</a></li>
                                <li><a href="auth-cover-signup.html" target="_blank"><i className='bx bx-radio-circle'></i>Sign Up</a></li>
                                <li><a href="auth-cover-forgot-password.html" target="_blank"><i className='bx bx-radio-circle'></i>Forgot Password</a></li>
                                <li><a href="auth-cover-reset-password.html" target="_blank"><i className='bx bx-radio-circle'></i>Reset Password</a></li>
                            </ul>
                        </li>
                        <li><a className="has-arrow" href="javascript:;"><i className='bx bx-radio-circle'></i>With Header Footer</a>
                            <ul>
                                <li><a href="auth-header-footer-signin.html" target="_blank"><i className='bx bx-radio-circle'></i>Sign In</a></li>
                                <li><a href="auth-header-footer-signup.html" target="_blank"><i className='bx bx-radio-circle'></i>Sign Up</a></li>
                                <li><a href="auth-header-footer-forgot-password.html" target="_blank"><i className='bx bx-radio-circle'></i>Forgot Password</a></li>
                                <li><a href="auth-header-footer-reset-password.html" target="_blank"><i className='bx bx-radio-circle'></i>Reset Password</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="user-profile.html">
                        <div className="parent-icon"><i className="bx bx-user-circle"></i>
                        </div>
                        <div className="menu-title">User Profile</div>
                    </a>
                </li>
                <li>
                    <a href="timeline.html">
                        <div className="parent-icon"> <i className="bx bx-video-recording"></i>
                        </div>
                        <div className="menu-title">Timeline</div>
                    </a>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bx bx-error"></i>
                        </div>
                        <div className="menu-title">Errors</div>
                    </a>
                    <ul>
                        <li> <a href="errors-404-error.html" target="_blank"><i className='bx bx-radio-circle'></i>404 Error</a>
                        </li>
                        <li> <a href="errors-500-error.html" target="_blank"><i className='bx bx-radio-circle'></i>500 Error</a>
                        </li>
                        <li> <a href="errors-coming-soon.html" target="_blank"><i className='bx bx-radio-circle'></i>Coming Soon</a>
                        </li>
                        <li> <a href="error-blank-page.html" target="_blank"><i className='bx bx-radio-circle'></i>Blank Page</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="faq.html">
                        <div className="parent-icon"><i className="bx bx-help-circle"></i>
                        </div>
                        <div className="menu-title">FAQ</div>
                    </a>
                </li>
                <li>
                    <a href="pricing-table.html">
                        <div className="parent-icon"><i className="bx bx-diamond"></i>
                        </div>
                        <div className="menu-title">Pricing</div>
                    </a>
                </li>
                <li className="menu-label">Charts & Maps</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bx bx-line-chart"></i>
                        </div>
                        <div className="menu-title">Charts</div>
                    </a>
                    <ul>
                        <li> <a href="charts-apex-chart.html"><i className='bx bx-radio-circle'></i>Apex</a>
                        </li>
                        <li> <a href="charts-chartjs.html"><i className='bx bx-radio-circle'></i>Chartjs</a>
                        </li>
                        <li> <a href="charts-highcharts.html"><i className='bx bx-radio-circle'></i>Highcharts</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bx bx-map-alt"></i>
                        </div>
                        <div className="menu-title">Maps</div>
                    </a>
                    <ul>
                        <li> <a href="map-google-maps.html"><i className='bx bx-radio-circle'></i>Google Maps</a>
                        </li>
                        <li> <a href="map-vector-maps.html"><i className='bx bx-radio-circle'></i>Vector Maps</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">Others</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bx bx-menu"></i>
                        </div>
                        <div className="menu-title">Menu Levels</div>
                    </a>
                    <ul>
                        <li> <a className="has-arrow" href="javascript:;"><i className='bx bx-radio-circle'></i>Level One</a>
                            <ul>
                                <li> <a className="has-arrow" href="javascript:;"><i className='bx bx-radio-circle'></i>Level Two</a>
                                    <ul>
                                        <li> <a href="javascript:;"><i className='bx bx-radio-circle'></i>Level Three</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="" target="_blank">
                        <div className="parent-icon"><i className="bx bx-folder"></i>
                        </div>
                        <div className="menu-title">Documentation</div>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <div className="parent-icon"><i className="bx bx-support"></i>
                        </div>
                        <div className="menu-title">Support</div>
                    </a>
                </li>
            </ul>
            {/* <!--end navigation--> */}
        </div>
    );
}

export default Sidebar;
