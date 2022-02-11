import Image from 'next/image';

import Styles from './categories.module.css';

const Categories = () =>{
    return (
        <>
        <h1>Category</h1>
        <div className={Styles.container}>
            <div className={Styles.card}>
                <Image src={'/categories-img/burgers.png'} width={51} height={51}></Image>
                <h3 className={Styles.title}>Burgers</h3>
            </div>
            <div className={Styles.card}>
                <Image src={'/categories-img/fries.png'} width={51} height={51}></Image>
                <h3 className={Styles.title}>Fries</h3>
            </div>
            <div className={Styles.card}>
                <Image src={'/categories-img/drinks.png'} width={51} height={51}></Image>
                <h3 className={Styles.title}>Drinks</h3>
            </div>
            <div className={Styles.card}>
                <Image src={'/categories-img/others.png'} width={51} height={51}></Image>
                <h3 className={Styles.title}>Others</h3>
            </div>
        </div>
        </>
    )
}

export default Categories