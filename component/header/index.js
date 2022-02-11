import Styles from  "../../styles/Home.module.css";
import Link from "next/link";

const Header = () =>{
    return(
        <div className={Styles.header}>
            <div>
                <span>Burgees</span>
            </div>
            <div className={Styles.nav_menu}>
                <Link  href="">
                    <a className={Styles.nav_item}>link</a>
                </Link>
                <Link  href="">
                    <a className={Styles.nav_item}>link</a>
                </Link>
                <Link  href="">
                    <a className={Styles.nav_item}>link</a>
                </Link>
                
            </div>
        </div>
    )
}


export default Header