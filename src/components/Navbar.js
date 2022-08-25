import airbnbLogo from "../assets/img/airbnb.svg";


export default function Navbar(){

    return (

        <nav>
            <img src={airbnbLogo} className="nav-logo" alt="airbnb-logo" />
        </nav>
    );

}
