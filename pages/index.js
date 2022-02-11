import Layout from "../component/layout";
import Categories from "../component/categories";
import Menu from "../component/menu";
import Bill from "../component/bill";
import Styles from "../styles/Home.module.css";
const Home = () =>{
  return (
    <Layout>
      <div className={Styles.container}>
        <div className={Styles.sectionA}>
          <Categories />
          <Menu />
        </div>
        <div className={Styles.sectionB}>
          <Bill />
        </div>
      </div>
    </Layout>
  )
}

export default Home;