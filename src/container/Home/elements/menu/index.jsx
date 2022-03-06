import data from '../../../../data/data.json'
import Card from '../../../../component/card/card';
import Styles from '../../../../styles/menu.module.css';




const Menu = ({menuList, submitItem}) =>{
    let datas= {} ;
    if (menuList == 'food') {datas = data.food}
    else if (menuList == 'drinks'){ datas = data.drinks }
    else if (menuList == 'fries'){ datas = data.fries }
    else if (menuList == 'others'){ datas = data.others }
    return(
        <>
            <div className={Styles.container}>
                {datas.map((data, index) => {
                    return(
                        <Card 
                        key={index} 
                        name={data.name} 
                        img={data.image} 
                        sizes={data.size}
                        price={data.price}
                        submitItem={submitItem}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Menu

