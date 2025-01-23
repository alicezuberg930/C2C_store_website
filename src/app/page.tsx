'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { products } from '../common/dummy.data'
import ProductCard from '../components/ProductCard'
import BannerSlider from '@/components/BannerSlider'
import { getCategories } from '@/services/api.service'
import CustomSlider from '@/components/CustomSlider'

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const a = async () => {
      let aa = await getCategories()
      setCategories(aa.data?.payload ?? [])
    }
    a()
  }, [])

  return (
    <div className='w-full'>
      <BannerSlider />

      <CustomSlider categories={categories} title='Danh mục' />

      <div className='w-full mt-12'>
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

      <div className='w-full mt-12'>
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