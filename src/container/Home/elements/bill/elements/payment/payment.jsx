import Styles from '../../../../../../styles/bill.module.css';
import Cash from '../../../../../../../public/icons/cash';
import CreditCard from '../../../../../../../public/icons/credit-card';
import Emoney from '../../../../../../../public/icons/e-money';

import {useState} from 'react'

const Payment = ({paymentMethod}) => {
    const [payment, setPayment] = useState('')
    const handleClick = (method) =>{
        setPayment(method)
        paymentMethod(method)
    }
    return (
        <div className={Styles.payment}>
        <h4>Payment</h4>
        <div className={payment === 'cash' ? Styles.paymentItemActive : Styles.paymentItem} onClick={() => handleClick('cash')}>
            <Cash  color={payment === 'cash' ? 'white' : '#287562'}/>
            <span>Cash</span>
        </div>
        <div className={payment === 'credit' ? Styles.paymentItemActive : Styles.paymentItem} onClick={() => handleClick('credit')}>
            <CreditCard color={payment === 'credit' ? 'white' : '#287562'}/>
            <span>Credit Card</span>
        </div>
        <div className={payment === 'emoney' ? Styles.paymentItemActive : Styles.paymentItem} onClick={() => handleClick('emoney')}>
            <Emoney color={payment === 'emoney' ? 'white' : '#287562'}/>
            <span>E-money</span>
        </div>
    </div>
    )
}

export default Payment