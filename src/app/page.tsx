import Image from 'next/image'
import React from 'react'
import { products } from '../common/dummy.data'
import ProductCard from '../components/ProductCard'

const HomePage: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='w-full mt-16'>
        <h2 className="text-2xl font-bold before:pr-3 before:border-l-4 before:border-l-blue-500">Sản Phẩm Mới</h2>
        <div className="flex flex-wrap -mx-2 mt-2">
          {
            products.map(product => {
              return (
                <ProductCard key={product._id} product={product} />
              )
            })
          }
        </div>
      </div>

      <div className='w-full mt-16'>
        <h2 className="text-2xl font-bold before:pr-3 before:border-l-4 before:border-l-blue-500">Đang khuyến mãi</h2>
        <div className="flex flex-wrap -mx-2 mt-2">
          {
            products.map(product => {
              return (
                <ProductCard key={product._id} product={product} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage