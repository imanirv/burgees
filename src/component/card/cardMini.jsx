import Image from 'next/image';
import NumberFormat from 'react-number-format';
import Styles from '../../styles/bill.module.css';
import Delete from '../../../public/icons/delete';

const Card  = ({
    name,
    size,
    qty,
    total,
    thumb,
    id,
    deleteItem
}) =>{
    return(
        <div className={Styles.cardItem}>
        <Image alt="buyed item" src={`/menus-img/${thumb}`} width={65} height={65} className={Styles.imgItem} />
        <div className={Styles.description}>
            <p className={Styles.title}>{name}</p>
            <div className={Styles.utils}>
                <p>X{qty}</p>
                <p className={Styles.bold}><NumberFormat value={total} thousandSeparator={true} prefix={'Rp '} displayType={'text'} /></p>
            </div>
        </div>
        <div className={Styles.size}>
            <button>{size}</button>
        </div>
        <div className={Styles.delete}>
            <button onClick={() => deleteItem(id)}><Delete/></button>
        </div>
    </div>
    )
}

export default Card