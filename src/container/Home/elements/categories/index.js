import Image from 'next/image';

import Styles from './categories.module.css';

const Categories = ({press}) =>{
    return (
        <>
        <h1 className={Styles.title}>Category</h1>
        <div className={Styles.container}>
            <div className={Styles.card} onClick={() => press('food')}>
                <Image src={'/categories-img/burgers.png'} width={51} height={51} alt=""></Image>
                <h3 className={Styles.title}>Burgers</h3>
            </div>
            <div className={Styles.card} onClick={() => press('fries')}>
                <Image src={'/categories-img/fries.png'} width={51} height={51} alt=""></Image>
                <h3 className={Styles.title}>Fries</h3>
            </div>
            <div className={Styles.card} onClick={() => press('drinks')}>
                <Image src={'/categories-img/drinks.png'} width={51} height={51} alt=""></Image>
                <h3 className={Styles.title}>Drinks</h3>
            </div>
          
        </div>
        </>
    )
}

export default Categories