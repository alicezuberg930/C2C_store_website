'use client'
import { products, reviews } from '@/common/dummy.data'
import { icons } from '@/common/icons'
import { formatDate, formatVND } from '@/common/utils'
import React, { useEffect, useState } from 'react'

const ProductDetailsPage: React.FC<{ params: { id: string } }> = ({ params }) => {
    const { CiShare2, MdOutlineModeComment, MdOutlineThumbUp, CiCircleAlert, MdVerified, FaStar, FaChevronLeft, FaChevronRight, RiSubtractFill, IoIosAdd, MdOutlineAddShoppingCart, CiCircleInfo } = icons
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        let id = params.id.split('-').at(-1)
        setProduct(products.find(product => product._id === id)!)

        document.getElementById('img-container')?.addEventListener('mouseover', () => {
            document.getElementById('lens')?.classList.remove('-z-10')
            zoomImage()
        })
        document.getElementById('img-container')?.addEventListener('mouseout', () => {
            document.getElementById('lens')?.classList.add('-z-10')
        })
    }, [])

    const zoomImage = () => {
        const img = document.getElementById('featured') as HTMLImageElement;
        const lens = document.getElementById('lens');
        lens!.style.background = `url(${img.src})`
        let ratio = 1.5 //150% zoom
        lens!.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px'
        img.addEventListener('mousemove', (e: MouseEvent) => {
            moveLens(e)
        })
        lens!.addEventListener('mousemove', (e: MouseEvent) => {
            moveLens(e)
        })

        const moveLens = (e: MouseEvent) => {
            let pos = getCursor(e)
            // set position of the lens div relative to the image based on position of the cursor
            let lensLeft = pos.x - (lens!.offsetWidth / 2)
            let lensTop = pos.y - (lens!.offsetHeight / 2)
            // set bounds for lens
            if (lensLeft < 0) lensLeft = 0
            if (lensTop < 0) lensTop = 0
            if (lensLeft > img.width - lens!.offsetWidth) lensLeft = (img.width - lens!.offsetWidth)
            if (lensTop > img.height - lens!.offsetHeight) lensTop = (img.height - lens!.offsetHeight)
            lens!.style.left = lensLeft + 'px'
            lens!.style.top = lensTop + 'px'
            // set lens background position
            lens!.style.backgroundPosition = '-' + (pos.x * ratio / 1.1) + 'px -' + (pos.y * ratio / 1.1) + 'px'
        }

        const getCursor = (e: MouseEvent) => {
            // let e: any = window.event
            let bounds = img.getBoundingClientRect()
            let x = e!.pageX - bounds.left
            let y = e!.pageY - bounds.top
            x = x - window.scrollX
            y = y - window.scrollY
            return {
                'x': x,
                'y': y
            }
        }
    }

    return (
        <div className='w-full py-6'>
            <div className=''>
                <div className='w-full flex gap-4 p-3 rounded-md bg-white'>
                    <div className='w-1/3'>
                        <div id='img-container' className='relative z-10 aspect-square border border-blue-300 rounded-md'>
                            <div id='lens' className='w-44 h-44 absolute border-2 border-blue-300 cursor-none bg-no-repeat -z-10 rounded-md'>
                            </div>
                            <img id='featured' alt='' className='rounded-md object-center object-cover cursor-zoom-in' src={product?.images![0]} />
                        </div>
                        <div id='slide-wrapper' className='flex justify-between items-center'>
                            <button className='mr-3 w-6 h-6 inline-block' id='leftBtn'>
                                <FaChevronLeft className='w-6 h-6 text-gray-500' />
                            </button>
                            <div id='slider' className='-mx-2 w-[400px] overflow-x-hidden flex flex-nowrap'>
                                {
                                    product && product.images?.map((image, i) => {
                                        return (
                                            <img key={i} src={image} className={`thumbnail rounded-md w-16 h-16 object-cover inline-block m-2 border ${i == 0 ? 'border-blue-300' : ''}`} />
                                        )
                                    })
                                }
                            </div>
                            <button className='ml-3 w-6 h-6 inline-block' id='rightBtn'>
                                <FaChevronRight className='w-6 h-6 text-gray-500' />
                            </button>
                        </div>
                    </div>
                    <section className='flex flex-auto'>
                        <div className='flex-auto flex-col pr-3'>
                            <div className='font-semibold text-xl'>
                                <span>{product?.name}</span>
                            </div>
                            <div className='flex mt-2'>
                                <button className='gap-2 flex items-center'>
                                    <div className='underline text-xl'>4.5</div>
                                    <div className='flex'>
                                        <FaStar className='text-[#faca51] h-3 w-3' />
                                        <FaStar className='text-[#faca51] h-3 w-3' />
                                        <FaStar className='text-[#faca51] h-3 w-3' />
                                        <FaStar className='text-[#faca51] h-3 w-3' />
                                        <FaStar className='text-[#faca51] h-3 w-3' />
                                    </div>
                                </button>
                                <div className='mx-2'>|</div>
                                <button className='gap-2 flex items-center'>
                                    <div className='underline text-xl'>{23}</div>
                                    <span className='opacity-50'>đánh giá</span>
                                </button>
                                <div className='mx-2'>|</div>
                                <div className='gap-2 flex items-center'>
                                    <div className='underline text-xl'>200</div>
                                    <span className='opacity-50'>đã bán</span>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div className='flex items-center gap-3'>
                                    <div className='text-3xl text-blue-400 font-semibold'>{formatVND(product?.price! * ((100 - product?.sale!) / 100))}
                                    </div>
                                    {
                                        product && product?.sale! > 0 ?
                                            <>
                                                <div className='opacity-50 text-sm line-through'>{formatVND(product?.price!)}</div>
                                                <div className='w-auto p-1 text-sm rounded-lg text-blue-400 bg-blue-50'>
                                                    -{product?.sale}%
                                                </div>
                                            </>
                                            : <></>

                                    }
                                </div>
                            </div>
                            <div className='py-3'>
                                <div className='font-semibold text-lg'>Số lượng</div>
                                <div className='flex items-center my-3'>
                                    <div className='mr-4'>
                                        <div className='border rounded-md flex items-center'>
                                            <button className='p-2 border-r'>
                                                <RiSubtractFill className='w-5 h-5' />
                                            </button>
                                            <input type='text' id='quantity' defaultValue={1} className='w-12 h-8 mb-[1px] text-center outline-none' name='quantity' />
                                            <button className='p-2 border-l'>
                                                <IoIosAdd className='w-5 h-5' />
                                            </button>
                                        </div>
                                    </div>
                                    <span className='text-sm opacity-80'>{product?.stock} sản phẩm</span>
                                </div>
                            </div>
                            <div className='pb-4 border-b'>
                                <div className='flex gap-3'>
                                    <button
                                        className='rounded-sm py-2 px-3 text-blue-400 border border-blue-400 bg-blue-50 flex items-center justify-center gap-2'>
                                        <MdOutlineAddShoppingCart className='w-6 h-6' />
                                        <span>Thêm vào giỏ hàng</span>
                                    </button>
                                    <button className='rounded-sm py-2 px-10 text-white bg-blue-300'>Mua ngay</button>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className=''>
                                    <div className='font-semibold text-lg'>Thông tin vận chuyển</div>
                                    <div className='my-2'>
                                        <div className='flex items-center justify-between cursor-pointer gap-1 text-sm flex-1'>
                                            <span>Giao đến Q. 1, P. Cầu Kho, Hồ Chí Minh</span>
                                            <span className='text-[rgb(10,104,255)]'>Đổi</span>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='py-2 border-b'>
                                            <div className='flex gap-2 items-center'>
                                                <div className='w-8'>
                                                    <img src='https://salt.tikicdn.com/ts/upload/04/da/1e/eac32401f048ffd380e50dfeda2a1c55.png' alt='' className='h-4 w-8' />
                                                </div>
                                                <span>Giao siêu tốc 2h</span>
                                            </div>
                                            <div className=''>
                                                <div className=''>
                                                    <span className='text-[#27272A]'>
                                                        <span>Trước 17h hôm nay: </span>
                                                        <span>{formatVND(10000)} </span>
                                                        <span className='text-[#808089] line-through'>
                                                            {formatVND(25000)}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-2 border-b'>
                                            <div className='flex gap-2 items-center'>
                                                <div className='w-8'>
                                                    <img src='https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png' alt='' className='h-4 w-8' />
                                                </div>
                                                <span>Giao đúng sáng mai</span>
                                            </div>
                                            <div className=''>
                                                <div className=''>
                                                    <span className='text-[#27272A]'>
                                                        <span>8h - 12h, 08/11: </span>
                                                        <span>{formatVND(15000)} </span>
                                                        <span className='text-[#808089] line-through'>
                                                            {formatVND(16000)}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='py-2'>
                                        <div className=''>
                                            <div className='flex flex-wrap items-center gap-1'>
                                                <img src='../assets/free_ship.png' alt='freeship-icon' className='w-4 h-4' />
                                                <span className='text-sm'>Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</span>
                                                <CiCircleInfo className='w-4 h-4' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='h-6'></div>

                                <div className=''>
                                    <div className='font-semibold text-lg'>Thông tin bảo hành</div>
                                    <div className='py-2 border-b'>
                                        <div className='flex gap-1'>
                                            <span>Thời gian bảo hành:</span>
                                            <span className='text-[rgb(39,39,42)] font-semibold'>12 Tháng</span>
                                        </div>
                                    </div>
                                    <div className='py-2 border-b'>
                                        <div className='flex gap-1'>
                                            <span>Hình thức bảo hành:</span>
                                            <span className='text-[rgb(39,39,42)] font-semibold'>Điện tử</span>
                                        </div>
                                    </div>
                                    <div className='py-2 border-b'>
                                        <div className='flex gap-1'>
                                            <span>Nơi bảo hành:</span>
                                            <span className='text-[rgb(39,39,42)] font-semibold'>Bảo hành chính hãng</span>
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <div className='flex gap-1'>
                                            <span>Hướng dẫn bảo hành:</span>
                                            <span className='text-[rgb(10,104,255)]'>Xem chi tiết</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='h-6'></div>

                                <div className=''>
                                    <div className='font-semibold text-lg'>Thông tin chi tiết</div>
                                    <div className='py-2 border-b'>
                                        <div className='grid gap-1 grid-cols-2'>
                                            <span className='text-[rgb(128,128,137)] max-w-[300px]'>Thương hiệu</span>
                                            <span>OEM</span>
                                        </div>
                                    </div>
                                    <div className='py-2 border-b'>
                                        <div className='grid gap-1 grid-cols-2'>
                                            <span className='text-[rgb(128,128,137)] max-w-[300px]'>Thể loại</span>
                                            <span>{product?.category}</span>
                                        </div>
                                    </div>
                                    <div className='py-2 border-b'>
                                        <div className='grid gap-1 grid-cols-2'>
                                            <span className='text-[rgb(128,128,137)] max-w-[300px]'>Xuất xứ</span>
                                            <span>{product?.productCode}</span>
                                        </div>
                                    </div>
                                    <div className='py-2 border-b'>
                                        <div className='grid gap-1 grid-cols-2'>
                                            <span className='text-[rgb(128,128,137)] max-w-[300px]'>Chất liệu</span>
                                            <span className=''>{product?.name}</span>
                                        </div>
                                    </div>
                                    <div className='py-2'>
                                        <div className='grid gap-1 grid-cols-2'>
                                            <span className='text-[rgb(128,128,137)] max-w-[300px]'>Sản phẩm có bảo hành không?</span>
                                            <span>Không</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='h-6'></div>

                                <div className='pr-3'>
                                    <div className='font-semibold text-lg'>Mô tả sản phẩm</div>
                                    <div className='py-2' dangerouslySetInnerHTML={{ __html: product?.description! }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='w-full mt-4 p-3 rounded-md bg-white'>
                    <div className='font-semibold text-lg'>Đánh giá sản phẩm</div>
                    <div className='mt-4 pb-3 border-b'>
                        <div className='flex gap-12'>
                            <div>
                                <span>Tổng quan</span>
                                <div className='flex items-center gap-3'>
                                    <div className='text-3xl font-bold'>{4.5}</div>
                                    <div className='flex flex-wrap gap-1'>
                                        <FaStar className='text-[#faca51] h-6 w-6' />
                                        <FaStar className='text-[#faca51] h-6 w-6' />
                                        <FaStar className='text-[#faca51] h-6 w-6' />
                                        <FaStar className='text-[#faca51] h-6 w-6' />
                                        <FaStar className='text-[#faca51] h-6 w-6' />
                                    </div>
                                </div>
                                <div className='my-2 opacity-80 text-sm font-[200]'>({341} đánh giá)
                                </div>
                            </div>
                            <div className='-my-1'>
                                <div className='flex items-center gap-3 my-1'>
                                    <div className='flex'>
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                    </div>
                                    <div className='w-36 bg-blue-300 h-3 rounded-lg' id='progress_bar'>
                                        <div className=''></div>
                                    </div>
                                    <div className='text-gray-500 text-sm'>{13}</div>
                                </div>
                                <div className='flex items-center gap-3 my-1'>
                                    <div className='flex'>
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                    </div>
                                    <div className='w-36 bg-blue-300 h-3 rounded-lg' id='progress_bar'>
                                        <div className=''></div>
                                    </div>
                                    <div className='text-gray-500 text-sm'>{134}</div>
                                </div>
                                <div className='flex items-center gap-3 my-1'>
                                    <div className='flex'>
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                    </div>
                                    <div className='w-36 bg-blue-300 h-3 rounded-lg' id='progress_bar'>
                                        <div className=''></div>
                                    </div>
                                    <div className='text-gray-500 text-sm'>{442}</div>
                                </div>
                                <div className='flex items-center gap-3 my-1'>
                                    <div className='flex'>
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                    </div>
                                    <div className='w-36 bg-blue-300 h-3 rounded-lg' id='progress_bar'>
                                        <div className=''></div>
                                    </div>
                                    <div className='text-gray-500 text-sm'>{3}</div>
                                </div>
                                <div className='flex items-center gap-3 my-1'>
                                    <div className='flex'>
                                        <FaStar className='text-[#faca51] h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                        <FaStar className='text-gray-300 h-4 w-4' />
                                    </div>
                                    <div className='w-36 bg-blue-300 h-3 rounded-lg' id='progress_bar'>
                                        <div className=''></div>
                                    </div>
                                    <div className='text-gray-500 text-sm'>{1}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 pb-3'>
                        <span>Lọc theo</span>
                        <div className='flex flex-wrap gap-3 mt-2'>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>Mới nhất</span>
                            </div>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>Có hình ảnh</span>
                            </div>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>Đã mua hàng</span>
                            </div>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>5 sao</span>
                            </div>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>4 sao</span>
                            </div>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>3 sao</span>
                            </div>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>2 sao</span>
                            </div>
                            <div className='px-3 py-2 rounded-lg border filter'>
                                <span className='filter-review__text'>1 sao</span>
                            </div>
                        </div>
                    </div>
                    <div className='pb-3'>
                        {
                            reviews.map(review => {
                                return (
                                    <div key={review._id} className='flex gap-4 py-4 border-t'>
                                        <div className='w-1/5'>
                                            <div className='flex items-center gap-3 mb-2'>
                                                <div className='rounded-full'>
                                                    <img className='w-12 h-12 rounded-full' src={review.user?.avatar} alt={review._id} />
                                                </div>
                                                <div>
                                                    <div className='text-ellipsis line-clamp-1'>{review.user?.name}</div>
                                                    <div className='text-sm text-gray-500'>Đã tham gia 2 tháng</div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between text-gray-500'>
                                                <MdOutlineModeComment className='w-4 h-4' />
                                                <span className='text-sm'>{review.reviews} Đánh giá</span>
                                            </div>
                                            <div className='border my-2'></div>
                                            <div className='flex items-center justify-between text-gray-500'>
                                                <MdOutlineThumbUp className='w-4 h-4' />
                                                <span className='text-sm'>0 Lượt cảm ơn</span>
                                            </div>
                                        </div>
                                        <div className='flex-1'>
                                            <div className=''>
                                                <div className='flex flex-wrap gap-1'>
                                                    {
                                                        Array.from({ length: review.star! }).map((_, i) => {
                                                            return (
                                                                <FaStar className='text-[#faca51] h-6 w-6' key={i} />
                                                            )
                                                        })
                                                    }
                                                    {
                                                        Array.from({ length: 5 - review.star! }).map((_, i) => {
                                                            return (
                                                                <FaStar className='text-gray-300 h-6 w-6' key={i} />
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className='my-3'>
                                                <div className='text-green-500 flex items-center gap-1'>
                                                    <MdVerified className='w-5 h-5' fill='green' />
                                                    <span className='text-sm'>Đã mua hàng</span>
                                                </div>
                                            </div>
                                            <span className='text-sm'>{review.comment}</span>
                                            <div className='flex flex-nowrap overflow-x-hidden w-full gap-3 my-2'>
                                                {
                                                    review.medias?.map(media => {
                                                        return <img key={media} src={media} alt={media} className='h-24 w-24' />
                                                    })
                                                }
                                            </div>
                                            <div className='flex gap-2 items-center mb-3'>
                                                <span className='text-sm text-gray-500'>Đánh giá vào {formatDate()}</span>
                                                <span className='w-1 h-1 rounded-full bg-gray-500'></span>
                                                <span className='text-sm text-gray-500'>Đã dùng 1 giờ</span>
                                            </div>
                                            <div className='flex items-center justify-between text-gray-500'>
                                                <div className='flex gap-5'>
                                                    <span className='flex items-center gap-1'>
                                                        <MdOutlineThumbUp className='w-6 h-6' />
                                                        <span className='text-sm'>0</span>
                                                    </span>
                                                    <span className='flex items-center gap-1'>
                                                        <MdOutlineModeComment className='w-6 h-6' />
                                                        <span className='text-sm'>0</span>
                                                    </span>
                                                </div>
                                                <span className='flex items-center gap-1'>
                                                    <CiShare2 className='w-6 h-6' />
                                                    <span className='text-sm'>Chia sẻ</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage