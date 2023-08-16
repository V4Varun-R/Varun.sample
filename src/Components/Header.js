import logo from "../assets/logo033.png";
import './header.css'
export default function Header(){
    return(
        <>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="w-20">
                        <img src={logo} className="company-logo"/> 
                    </div>
                    <nav className="w-50">
                        <ul className="d-flex justify-content-evenly">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        
        </>
    )
}