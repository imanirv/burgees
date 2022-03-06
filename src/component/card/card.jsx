/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Styles from '../../styles/menu.module.css';
import NumberFormat from 'react-number-format';

const Card = ({name, img, sizes, price, submitItem}) => {
    const [counter, setCounter] = useState(0)
    const [sizeItem, setSizeItem] = useState('')

    const handleAdd = () =>{
        setCounter(counter+1)
    }
    const handleMin = () =>{
        setCounter(counter-1)
    }
    const handleSize = (s) => {
        setSizeItem(s)
    }

    const handleSubmit = () => {
        submitItem(name, sizeItem, counter, price*counter, img)
        setCounter(0);
        setSizeItem('');
    }

    

    return(
        <div className={Styles.card}>
            <div className={Styles.img} >
                <img  src={`/menus-img/${img}`} alt='gambar'  />
            </div>
            <div className={Styles.context}>
                <div className={Styles.description}>
                    <h4>{name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo! Voluptates, </p>
                    <h2><NumberFormat value={price} thousandSeparator={true} prefix={'Rp '} displayType={'text'} /> </h2>
                </div>
                <h5>Size</h5>
                <div className={Styles.utility}>
                    <div className={Styles.size}>
                        {sizes.map((size, index) => {
                            if (sizeItem == size) {
                                return(
                                    <button className={Styles.selected} key={index} onClick={()=>handleSize(size)}>{size}</button>
                                    )
                                } else{
                                    return (
                                        <button key={index} onClick={()=>handleSize(size)}>{size}</button>
                                    )
                            }
                        })}
                       
                    </div>
                    <div className={Styles.quantity}>
                        <button onClick={() => handleMin()}>-</button>
                        <span>{counter}</span>
                        <button onClick={() => handleAdd()}>+</button>
                    </div>
                </div>
                <div className={Styles.action}>
                    <button onClick={() => handleSubmit()}>Add to bill</button>
                </div>
            </div>
        </div>
    )
}

export default Card;