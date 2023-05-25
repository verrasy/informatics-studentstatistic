import '../App.css'
import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () =>{
    return(
        <div className="header">
            <ul>
                <li><AiOutlineHome/><a href="./" onClick={''}>about</a></li>
                <li><AiOutlineHome/><a href="./" onClick={''}>Blog</a></li>
                <li><AiOutlineHome/><a href="./" onClick={''}>Project</a></li>
                <li><AiOutlineHome/><a href="./" onClick={''}>Contact</a></li>
            </ul>
        </div>
    )
}
export default Navbar;