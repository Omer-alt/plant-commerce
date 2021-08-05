import logo from "../assets/logo.png"
import "../styles/Banner.css"
function Banner(){
    return(
        <div className='pc-header'>
            <img src={logo} alt="logo" className="pc-logo" />
            <h1 className="pc-title">La maison jungle</h1>
        </div>
    );
}

export default Banner;