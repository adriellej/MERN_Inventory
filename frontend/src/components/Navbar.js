import "../css/navbar.css";
import { Link } from 'react-router-dom';

// import { ArrowRightStartOnRectangleIcon} from '@heroicons/react/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
    return (
        <div className="navbar_main_container">
            <div className='navbar_links'>
                <Link>Home</Link><br/>
                <Link>Devices</Link><br/>
                <Link>Asset History</Link><br/>
                <Link>Logout</Link><br/>

                {/* <Link >
                    <span className='nav_icon'><PencilSquareIcon /></span>
                </Link>

                <Link>
                    <span className='nav_icon logout_icon'><PencilSquareIcon /></span>
                </Link> */}
            </div>
                
        </div>
    )
}


export default Navbar;