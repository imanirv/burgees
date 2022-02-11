import Image from 'next/image';
import Styles from './menu.module.css';

const Menu = () =>{
    return(
        <>
            <h1>Menu</h1>
            <div>
                <div className={Styles.card}>
                    <Image src='/menus-img/burger-1.jpg' width={152} height={248}></Image>
                    <div className={Styles.context}>
                        <h4>Regular Burgees</h4>
                        <p>Regular size with 1 slice of beed and bunch of veges</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu