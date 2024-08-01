"use client"
import ProductRow from '@/components/admin-panel/ProductRow';
import { setLoading } from '@/redux/features/loadingSlice';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export interface IProduct {
  _id:string;
  imgSrc:string;
  fileKey:string;
  name:string;
  price:string;
  category:string
}

const Dashboard = () => {
  const [products,setProducts] = useState([]);
  const [upenPopup,setUpenPopup] = useState(false);
  const [updateTable,setUpdateTable] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true))
    axios
    .get("/api/get_products")
    .then((res) => setProducts(res.data))
    .catch(err => console.log(err)
    ).finally(() => dispatch(setLoading(false)))
  },[updateTable])
  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-xl'>All Products</h2>

        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product:IProduct, index) => (
                  <ProductRow
                  key={product._id}
                  srNo={index +1}
                  setUpenPopup={setUpenPopup}
                  setUpdateTable={setUpdateTable}
                  product={product}/>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      {/* {upenPopup && (
      <Popup setUpenPopup={setUpenPopup} setUpdateTable={setUpdateTable}/>
      )} */}
    </div>
  )
}

export default Dashboard