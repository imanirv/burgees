import { CardMini } from '../../../../../../component/card';
import Styles from '../../../../../../styles/bill.module.css';

const CardList = ({list, deleteItem}) =>{
    return(
        <div className={Styles.card}>
            {list.map((item, i) =>{
                return(
                    <CardMini key={i} 
                    name={item.name} 
                    size={item.sizeItem} 
                    qty={item.qty} 
                    total={item.total}
                    thumb={item.thumb}
                    id={i}
                    deleteItem={deleteItem}
                    />
                )
            })}
        </div>
    )
}

export default CardList