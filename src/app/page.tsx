'use client'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { products } from '../common/dummy.data'
import ProductCard from '../components/ProductCard'
import { getBanners, getCategories } from '@/services/api.service'
import CustomSlider, { Settings } from '@/components/CustomSlider'
import { isAxiosError } from 'axios'
import { toast } from 'react-toastify'
import CategoryCard from '@/components/CategoryCard'
import LoadingShimmer from '@/components/LoadingShimmer'

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [banners, setBanners] = useState<Banner[]>([])

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await getCategories()
        setCategories(response.data?.payload ?? [])
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.code == "ERR_NETWORK") {
            toast.error(error.message)
          } else {
            toast.error(error.response?.data.message)
          }
        } else {
          toast.error("Lỗi không xác định")
        }
      }
    }
    fetchCategoryList()

    const fetchBannerList = async () => {
      try {
        const response = await getBanners()
        setBanners(response.data?.payload ?? [])
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.code == "ERR_NETWORK") {
            toast.error(error.message)
          } else {
            toast.error(error.response?.data.message)
          }
        } else {
          toast.error("Lỗi không xác định")
        }
      }
    }
    fetchBannerList()
  }, [])

  const categorySettings: Settings = {
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      { breakpoint: 1024, slidesToShow: 4 },
      { breakpoint: 768, slidesToShow: 3 },
      { breakpoint: 640, slidesToShow: 2 },
    ]
  }

  const bannerSettings: Settings = {
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      { breakpoint: 768, slidesToShow: 2 },
      { breakpoint: 425, slidesToShow: 1 },
    ]
  }

  return (
    <div className='w-full'>
      {/*  */}
      <div className='mt-12'>
        {banners && banners.length > 0 ?
          <CustomSlider {...bannerSettings}>
            {
              banners?.map(banner => {
                return (
                  <div className='slider-item flex-1 px-2' key={banner._id}>
                    <img src={banner.image ?? '/assets/image-not-found.jpg'} alt='banner' className='bg-gray-100 rounded-lg object-cover aspect-video h-full' />
                  </div>
                )
              })
            }
          </CustomSlider> : <LoadingShimmer />
        }

      </div>
      {/*  */}
      <div className='mt-12'>
        {categories && categories.length > 0 ?
          <CustomSlider {...categorySettings}>
            {
              categories.map(category => {
                return (
                  <div key={category?._id}>
                    <CategoryCard category={category} />
                  </div>
                )
              })
            }
          </CustomSlider> : <LoadingShimmer />
        }
      </div>
      {/*  */}
      <div className='mt-12'>
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
      {/*  */}
      <div className='mt-12'>
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