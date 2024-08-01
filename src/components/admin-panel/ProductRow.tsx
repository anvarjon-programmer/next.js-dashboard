
import { IProduct } from '@/app/admin/dashboard/page';
import { setProduct } from '@/redux/features/productSlice';
import { useAppDispatch } from '@/redux/hook';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react'
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBack2Fill, RiDeleteBin5Line } from 'react-icons/ri';
interface PropsType{
    srNo:number;
    setOpenPopup:Dispatch<SetStateAction<boolean>>;
    setUpdateTable:Dispatch<SetStateAction<boolean>>;
    product:IProduct

}

const ProductRow = ({srNo,setOpenPopup, setUpdateTable,product}:PropsType) => {
    const dispatch = useAppDispatch()

    const onEdit = () => {
        dispatch(setProduct(product))
        setOpenPopup(true)
    }

    const onDelete = () =>{
        // will do latter
    }
  return <tr>
    <td>
        <div>{srNo}</div>
    </td>
    <td>
        <div>{product.name}</div>
    </td>
    <td>${product.price}</td>
    <td className='py-2'>
        <Image src={product.imgSrc} width={40} height={40} alt='product_img'/>
    </td>
    <td>
        <div className='text-2xl flex items-center gap-2 text-gray-600'>
            <CiEdit className='cursor-pointer hover:text-black ' onClick={onEdit}/>
            <RiDeleteBin5Line className='text-[20px] cursor-pointer hover:text-red-600' onClick={onDelete}/>
        </div>
    </td>
  </tr>
}

export default ProductRow