import { Link } from "react-router-dom";
import '../assets/style/header.css'

function Header() {
    return (<>
        <header>
            <nav>
                <Link className="linknav"> HOME</Link>
            </nav>
        </header>
    </>  );
}

export default Header;