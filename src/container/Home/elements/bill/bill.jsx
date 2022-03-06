
import Styles from '../../../../styles/bill.module.css';

import Summary from './elements/summary';
import CardList from './elements/cardList';
import Payment from './elements/payment';
import { useState } from 'react'






const Bill = ({store, deleteItem, total, submitPayment}) =>{
    const [method, setMethod] = useState('')

    const getmethod = (i) => {
        setMethod(i)
    }
    const handleClick = () => {
        submitPayment(method)
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                <h1>Bills</h1>
                <div className={Styles.line}></div>
            </div>
            <CardList list={store} deleteItem={deleteItem}/>
            <Summary total={total}/>
            <Payment paymentMethod={getmethod}/>
            <div className={Styles.action}>
                <button onClick={() => handleClick()}>Print Bill</button>
            </div>
        </div>
    )
}

export default Bill