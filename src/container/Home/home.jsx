import Layout from "../../component/layout";
import Categories from "./elements/categories";
import Menu from "./elements/menu";
import Bill from "./elements/bill";
import Styles from "../../styles/Home.module.css";
import useTransaction from "./hooks/useTransaction";




const HomeContainer = () =>{

  const {
    menu, list, totalBill, handleClick, handleSubmit, handleDelete, handlePayment
  } = useTransaction()

  return (
      <Layout>
        <div className={Styles.container}>
          <div className={Styles.sectionA}>
            <Categories press={handleClick}/>
            <Menu menuList={menu} submitItem={handleSubmit}/>
          </div>
          <div className={Styles.sectionB}>
            
            <Bill store={list} deleteItem={handleDelete} total={totalBill} submitPayment={handlePayment} />
          </div>
        </div>
      </Layout>
  )
}

export default HomeContainer;