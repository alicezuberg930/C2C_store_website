import React from 'react'
import { formatVND } from '../common/utils'
import { icons } from '../common/icons'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { FaStar } = icons

    return (
        <div className='px-2 mt-2 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full'>
            <div className='bg-white rounded-md mb-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group'>
                <div className='relative'>
                    {
                        product!.sale! > 0 ?
                            <div className='absolute top-0 right-0 z-50'>
                                <div className='text-white bg-red-500 flex items-center border rounded-tr-md rounded-bl-md px-3 py-1.5'>
                                    <span className='text-xs text-center font-semibold'>-{product.sale}%</span>
                                </div>
                            </div> : <></>
                    }
                    <Link className='text-decoration-none' href={`/product/${product._id}`}>
                        <div className='aspect-[1/1.1] w-full relative overflow-hidden rounded-t-md'>
                            <Image fill loading='lazy' className='object-cover group-hover:scale-105 transition-transform duration-1000' src={product.images![0]} alt={product.name!} sizes='width: 100%, height: 100%' />
                        </div>
                        <div className='py-1 px-2'>
                            <span className='text-wrap line-clamp-2 text-bold text-sm h-[calc(20px*2)]'>{product.name}</span>
                            <div className='mt-2'>
                                <span className='text-blue-500 font-semibold text-lg'>{formatVND(product.price!)}</span>
                            </div>
                            <div className='flex items-center'>
                                <div className=''>
                                    <div className='flex'>
                                        <FaStar size={12} fill='#faca51' />
                                        <FaStar size={12} fill='#faca51' />
                                        <FaStar size={12} fill='#faca51' />
                                        <FaStar size={12} fill='#faca51' />
                                        <FaStar size={12} fill='#faca51' />
                                    </div>
                                </div>
                                <div className='text-sm opacity-70'>(263)</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard