import Image from 'next/image';
import Styles from './menu.module.css';
const hello = 'helo'

const Card = () => {
    return(
        <div className={Styles.card}>
            <Image src='/menus-img/burger-1.jpg' width={152} height={248} alt='gambar'></Image>
            <div className={Styles.context}>
                <div className={Styles.description}>
                    <h4>Regular Burgees</h4>
                    <p>Regular size with 1 slice of beed and bunch of veges</p>
                    <h2>Rp 45K</h2>
                </div>
                <h5>Size</h5>
                <div className={Styles.utility}>
                    <div className={Styles.size}>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                    <div className={Styles.quantity}>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                </div>
                <div className={Styles.action}>
                    <button>Add to bill</button>
                </div>
            </div>
        </div>
    )
}

const Menu = () =>{
    return(
        <>
            <h1>Menu</h1>
            <div className={Styles.container}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
        </>
    )
}

export default Menu

