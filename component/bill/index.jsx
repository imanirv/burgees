import Image from 'next/image';
import Styles from './bill.module.css';

import Delete from '../../public/icons/delete';
import Cash from '../../public/icons/cash';
import CreditCard from '../../public/icons/credit-card';
import Emoney from '../../public/icons/e-money';

const CardList = () =>{
    return(
        <div className={Styles.card}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

const Card  = () =>{
    return(
        <div className={Styles.cardItem}>
        <Image alt="buyed item" src='/menus-img/burger-1.jpg' width={65} height={65} className={Styles.imgItem} />
        <div className={Styles.description}>
            <p className={Styles.title}>Regular Burgees</p>
            <div className={Styles.utils}>
                <p>X1</p>
                <p className={Styles.bold}>Rp 80K</p>
            </div>
        </div>
        <div className={Styles.size}>
            <button>L</button>
        </div>
        <div className={Styles.delete}>
            <button><Delete/></button>
        </div>
    </div>
    )
}
const Bill = () =>{
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                <h1>Bills</h1>
                <div className={Styles.line}></div>
            </div>
            <CardList />
            <div className={Styles.total}>
                <div >
                    <textarea className={Styles.note} name="" id="" cols="25" rows="10" placeholder='notes...'></textarea>
                </div>
                <div className={Styles.totalBill}>
                    <table>
                        <tr>
                            <td className={Styles.italic}>Subtotal</td>
                            <td></td>
                            <td className={Styles.bold}>Rp 80K</td>
                        </tr>
                        <tr>
                            <td className={Styles.italic}>Tax</td>
                            <td></td>
                            <td className={Styles.bold}>Rp 80K</td>
                        </tr>
                    </table>
                        <div className={Styles.line}></div>
                        <table>
                            <tr>
                                <td className={Styles.italic}>Total</td>
                                <td></td>
                                <td className={Styles.bold}>Rp 80k</td>
                            </tr>
                        </table>
                </div>
            </div>
            <div className={Styles.payment}>
                <h4>Payment</h4>
                <div className={Styles.paymentItem}>
                    <Cash/>
                    <span>Cash</span>
                </div>
                <div className={Styles.paymentItem}>
                    <CreditCard/>
                    <span>Credit Card</span>
                </div>
                <div className={Styles.paymentItem}>
                    <Emoney/>
                    <span>E-money</span>
                </div>
            </div>
            <div className={Styles.action}>
                <button>pay now</button>
            </div>
        </div>
    )
}

export default Bill