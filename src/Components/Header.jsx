import {Link } from "react-router"

const Header = ()=>{
    return(
        <header>
            <Link to ="/">
            <button>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
                </Link>
        </header>
    )
}

export default Header 