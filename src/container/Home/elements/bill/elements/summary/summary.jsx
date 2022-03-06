import NumberFormat from 'react-number-format';
import Styles from '../../../../../../styles/bill.module.css'

const Summary = ({total}) => {
    let tax = total * 10/100;

    return(
        <div className={Styles.total}>
        <div className={Styles.totalBill}>
            <table>
                <tr>
                    <td className={Styles.italic}>Subtotal</td>
                    <td></td>
                    <td className={Styles.bold}><NumberFormat value={total} thousandSeparator={true} prefix={'Rp '} displayType={'text'} /></td>
                </tr>
                <tr>
                    <td className={Styles.italic}>Tax</td>
                    <td></td>
                    <td className={Styles.bold}><NumberFormat value={tax} thousandSeparator={true} prefix={'Rp '} displayType={'text'} /></td>
                </tr>
            </table>
                <div className={Styles.line}></div>
                <table>
                    <tr>
                        <td className={Styles.italic}>Total</td>
                        <td></td>
                        <td className={Styles.bold}><NumberFormat value={total+tax} thousandSeparator={true} prefix={'Rp '} displayType={'text'} /></td>
                    </tr>
                </table>
        </div>
        </div>
    )
}

export default Summary