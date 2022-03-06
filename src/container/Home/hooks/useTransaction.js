import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const useTransaction = () => {
    const [menu, setMenu] = useState('food')
    const [list, setList] = useState([]);
    const [totalBill, setTotalBill] = useState(0);
    
    const handleClick = (message) =>{
      setMenu(message)
    }
    const handleSubmit = (name, sizeItem, qty, total, img) =>{
      setList(prevList => [...prevList, {
          id:prevList.length,
          name,
          qty,
          sizeItem,
          total,
          thumb:img
      }])
      setTotalBill(totalBill + total)
    }
    const handleDelete = (i) => {
      setList(lists => lists.filter(item => item.id !== i))
      // console.log(list[i])
      setTotalBill(totalBill - list[i].total)
    }
    const handlePayment = (method) => {
      // alert(method)
      // console.log('purchased item > ',list)
      // console.log('total Payment >', totalBill)
      // console.log('payment method >', method)
      MySwal.fire(
        'All Set!',
        'Please kindly wait while we making your food',
        'success'
      )
      setList([])
      setTotalBill(0)
    }

    return {
      menu,
      list,
      totalBill,
      handleClick,
      handleSubmit,
      handleDelete,
      handlePayment
    }
}

export default useTransaction
