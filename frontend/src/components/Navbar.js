import "../css/navbar.css";
import { Link } from 'react-router-dom';
import { HomeIcon, ComputerDesktopIcon, ClockIcon, UserCircleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    return (
        <div className="navigation_bar">
            <div className="navbar_main_container">
                <div className='navbar_links'>
                    <Link>
                        <HomeIcon className="nav_icon" title="Home"/>
                    </Link><br/>
                    <Link >
                        <ComputerDesktopIcon className="nav_icon" title="Inventory"/>
                    </Link><br/>
                    <Link >
                        <ClockIcon className="nav_icon" title="Asset History"/>
                    </Link><br/>

                    <div className="bottom_icons">
                        {/* Account will be an avatar and contains logout button as dropdown */}
                        <Link>
                            <UserCircleIcon className="nav_icon" title="Account"/>
                        </Link>
                        <Link>
                            <ArrowRightStartOnRectangleIcon className="nav_icon" title="Logout"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;