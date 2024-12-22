"use client"
import { products } from "@/common/dummy.data"
import { icons } from "@/common/icons"
import { formatVND } from "@/common/utils"
import React, { useEffect, useState } from "react"

const ProductDetailsPage: React.FC<{ id: string }> = ({ id }) => {
    const { FaStar, FaChevronLeft, FaChevronRight, RiSubtractFill, IoIosAdd, MdOutlineAddShoppingCart, CiCircleInfo } = icons
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        setProduct(products[0])
        // setProduct(products.find(product => product._id === id)!)
    }, [])
    console.log(products.find(product => product._id === id));

    return (
        <div className="w-full bg-[#f6f5fa] py-6">
            <div className="">
                <div className="w-full flex gap-4 p-3 rounded-md bg-white">
                    <div className="">
                        <div id="img-container" className="relative z-10">
                            <div id="lens"
                                className="w-44 h-44 absolute border-2 border-blue-400 cursor-none bg-no-repeat -z-10">
                            </div>
                            <img id="featured" alt="" className="h-[470px] w-full object-cover cursor-zoom-in"
                                src="{{ $product->getPhotosAttribute()[0]['original_url'] }}" />
                        </div>
                        <div id="slide-wrapper" className="flex justify-between items-center">
                            <button className="mr-3 w-6 h-6 inline-block" id="leftBtn">
                                <FaChevronLeft className="w-6 h-6 text-gray-500" />
                            </button>
                            <div id="slider" className="-mx-2 w-[400px] overflow-x-hidden flex flex-nowrap">
                                {
                                    product && product.images?.map(image => {
                                        return (
                                            <img key={image} src={image} className="thumbnail w-16 h-16 object-cover inline-block m-2 border-[1.1px] {{ $key == 0 ? 'border-blue-300' : '' }}" />
                                        )
                                    })
                                }
                            </div>
                            <button className="ml-3 w-6 h-6 inline-block" id="rightBtn">
                                <FaChevronRight className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>
                    </div>
                    <section className="flex flex-auto">
                        <div className="flex-auto flex-col pr-3">
                            <div className="font-semibold text-xl">
                                <span>{product?.name}</span>
                            </div>
                            <div className="flex mt-2">
                                <button className="gap-2 flex items-center">
                                    <div className="underline text-xl">4.5</div>
                                    <div className="flex">
                                        <FaStar className="text-[#faca51] h-3 w-3" />
                                        <FaStar className="text-[#faca51] h-3 w-3" />
                                        <FaStar className="text-[#faca51] h-3 w-3" />
                                        <FaStar className="text-[#faca51] h-3 w-3" />
                                        <FaStar className="text-[#faca51] h-3 w-3" />
                                    </div>
                                </button>
                                <div className="mx-2">|</div>
                                <button className="gap-2 flex items-center">
                                    <div className="underline text-xl">{23}</div>
                                    <span className="opacity-50">đánh giá</span>
                                </button>
                                <div className="mx-2">|</div>
                                <div className="gap-2 flex items-center">
                                    <div className="underline text-xl">200</div>
                                    <span className="opacity-50">đã bán</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl text-blue-400 font-semibold">{formatVND(product?.price! * (product?.sale! / 100))}
                                    </div>
                                    {
                                        product && product?.sale! > 0 ?
                                            <>
                                                <div className="opacity-50 text-sm line-through">{formatVND(product?.price!)}</div>
                                                <div className="w-auto p-1 text-sm rounded-lg text-blue-400 bg-blue-50">
                                                    -{product?.sale}%
                                                </div>
                                            </>
                                            : <></>

                                    }
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="font-semibold text-lg">Số lượng</div>
                                <div className="flex items-center my-3">
                                    <div className="mr-4">
                                        <div className="border rounded-md flex items-center">
                                            <button className="p-2 border-r">
                                                <RiSubtractFill className="w-5 h-5" />
                                            </button>
                                            <input type="text" id="quantity" value="1" className="w-12 h-8 mb-[1px] text-center outline-none" name="quantity" />
                                            <button className="p-2 border-l">
                                                <IoIosAdd className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                    <span className="text-sm opacity-80">{product?.stock} sản phẩm</span>
                                </div>
                            </div>
                            <div className="pb-4 border-b">
                                <div className="flex gap-3">
                                    <button
                                        className="rounded-sm py-2 px-3 text-blue-400 border-[1.1px] border-blue-400 bg-blue-50 flex items-center justify-center gap-2">
                                        <MdOutlineAddShoppingCart className="w-6 h-6" />
                                        <span>Thêm vào giỏ hàng</span>
                                    </button>
                                    <button className="rounded-sm py-2 px-10 text-white bg-blue-300">Mua ngay</button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="">
                                    <div className="font-semibold text-lg">Thông tin vận chuyển</div>
                                    <div className="my-2">
                                        <div className="flex items-center justify-between cursor-pointer gap-1 text-sm flex-1">
                                            <span>Giao đến Q. 1, P. Cầu Kho, Hồ Chí Minh</span>
                                            <span className="text-[rgb(10,104,255)]">Đổi</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 border-b">
                                            <div className="flex gap-2 items-center">
                                                <div className="w-8">
                                                    <img src="https://salt.tikicdn.com/ts/upload/04/da/1e/eac32401f048ffd380e50dfeda2a1c55.png" alt="" className="h-4 w-8" />
                                                </div>
                                                <span>Giao siêu tốc 2h</span>
                                            </div>
                                            <div className="">
                                                <div className="">
                                                    <span className="text-[#27272A]">Trước 17h hôm nay:
                                                        10.000<sup><small>₫</small></sup>
                                                        <span
                                                            className="text-[#808089]">&nbsp;<del>25.000<sup><small>₫</small></sup></del>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-2 border-b">
                                            <div className="flex gap-2 items-center">
                                                <div className="w-8">
                                                    <img src="https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png" alt="" className="h-4 w-8" />
                                                </div>
                                                <span>Giao đúng sáng mai</span>
                                            </div>
                                            <div className="">
                                                <div className="">
                                                    <span className="text-[#27272A]">8h - 12h, 08/11:
                                                        1.500<sup><small>₫</small></sup>
                                                        <span className="text-[#808089]">&nbsp<del>16.500<sup><small>₫</small></sup></del>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <div className="">
                                            <div className="flex flex-wrap items-center gap-1">
                                                <img src={'assets/free_ship.png'} alt="freeship-icon" className="w-4 h-4" />
                                                <span className="text-sm">Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</span>
                                                <CiCircleInfo className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-6"></div>

                                <div className="">
                                    <div className="font-semibold text-lg">Thông tin bảo hành</div>
                                    <div className="py-2 border-b">
                                        <div className="flex gap-1">
                                            <span>Thời gian bảo hành:</span>
                                            <span className="text-[rgb(39,39,42)] font-semibold">12 Tháng</span>
                                        </div>
                                    </div>
                                    <div className="py-2 border-b">
                                        <div className="flex gap-1">
                                            <span>Hình thức bảo hành:</span>
                                            <span className="text-[rgb(39,39,42)] font-semibold">Điện tử</span>
                                        </div>
                                    </div>
                                    <div className="py-2 border-b">
                                        <div className="flex gap-1">
                                            <span>Nơi bảo hành:</span>
                                            <span className="text-[rgb(39,39,42)] font-semibold">Bảo hành chính hãng</span>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <div className="flex gap-1">
                                            <span>Hướng dẫn bảo hành:</span>
                                            <span className="text-[rgb(10,104,255)]">Xem chi tiết</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-6"></div>

                                <div className="">
                                    <div className="font-semibold text-lg">Thông tin chi tiết</div>
                                    <div className="py-2 border-b">
                                        <div className="grid gap-1 grid-cols-2">
                                            <span className="text-[rgb(128,128,137)] max-w-[300px]">Thương hiệu</span>
                                            <span>OEM</span>
                                        </div>
                                    </div>
                                    <div className="py-2 border-b">
                                        <div className="grid gap-1 grid-cols-2">
                                            <span className="text-[rgb(128,128,137)] max-w-[300px]">Thể loại</span>
                                            <span>{product?.category}</span>
                                        </div>
                                    </div>
                                    <div className="py-2 border-b">
                                        <div className="grid gap-1 grid-cols-2">
                                            <span className="text-[rgb(128,128,137)] max-w-[300px]">Xuất xứ</span>
                                            <span>{product?.productCode}</span>
                                        </div>
                                    </div>
                                    <div className="py-2 border-b">
                                        <div className="grid gap-1 grid-cols-2">
                                            <span className="text-[rgb(128,128,137)] max-w-[300px]">Chất liệu</span>
                                            <span className="">{product?.name}</span>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <div className="grid gap-1 grid-cols-2">
                                            <span className="text-[rgb(128,128,137)] max-w-[300px]">Sản phẩm có bảo hành không?</span>
                                            <span>Không</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-6"></div>

                                <div className="pr-3">
                                    <div className="font-semibold text-lg">Mô tả sản phẩm</div>
                                    <div className="py-2" dangerouslySetInnerHTML={{ __html: product?.description! }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full mt-4 p-3 rounded-md bg-white">
                    <div className="font-semibold text-lg">Đánh giá sản phẩm</div>
                    <div className="mt-4 pb-3 border-b">
                        <div className="flex gap-12">
                            <div>
                                <span>Tổng quan</span>
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl font-bold">{4.5}</div>
                                    <div className="flex flex-wrap gap-1">
                                        <FaStar className="text-[#faca51] h-6 w-6" />
                                        <FaStar className="text-[#faca51] h-6 w-6" />
                                        <FaStar className="text-[#faca51] h-6 w-6" />
                                        <FaStar className="text-[#faca51] h-6 w-6" />
                                        <FaStar className="text-[#faca51] h-6 w-6" />
                                    </div>
                                </div>
                                <div className="my-2 opacity-80 text-sm font-[200]">({341} đánh giá)
                                </div>
                            </div>
                            <div className="-my-1">
                                <div className="flex items-center gap-3 my-1">
                                    <div className="flex">
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                    </div>
                                    <div className="w-36 bg-blue-300 h-3 rounded-lg" id="progress_bar">
                                        <div className=""></div>
                                    </div>
                                    <div className="text-gray-500 text-sm">{13}</div>
                                </div>
                                <div className="flex items-center gap-3 my-1">
                                    <div className="flex">
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                    </div>
                                    <div className="w-36 bg-blue-300 h-3 rounded-lg" id="progress_bar">
                                        <div className=""></div>
                                    </div>
                                    <div className="text-gray-500 text-sm">{134}</div>
                                </div>
                                <div className="flex items-center gap-3 my-1">
                                    <div className="flex">
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                    </div>
                                    <div className="w-36 bg-blue-300 h-3 rounded-lg" id="progress_bar">
                                        <div className=""></div>
                                    </div>
                                    <div className="text-gray-500 text-sm">{442}</div>
                                </div>
                                <div className="flex items-center gap-3 my-1">
                                    <div className="flex">
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                    </div>
                                    <div className="w-36 bg-blue-300 h-3 rounded-lg" id="progress_bar">
                                        <div className=""></div>
                                    </div>
                                    <div className="text-gray-500 text-sm">{3}</div>
                                </div>
                                <div className="flex items-center gap-3 my-1">
                                    <div className="flex">
                                        <FaStar className="text-[#faca51] h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                        <FaStar className="text-gray-300 h-4 w-4" />
                                    </div>
                                    <div className="w-36 bg-blue-300 h-3 rounded-lg" id="progress_bar">
                                        <div className=""></div>
                                    </div>
                                    <div className="text-gray-500 text-sm">{1}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pb-3 border-b">
                        <span>Lọc theo</span>
                        <div className="flex flex-wrap gap-3 mt-2">
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">Mới nhất</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">Có hình ảnh</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">Đã mua hàng</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">5 sao</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">4 sao</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">3 sao</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">2 sao</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg border-[1.1px] filter">
                                <span className="filter-review__text">1 sao</span>
                            </div>
                        </div>
                    </div>
                    <div className="pb-3">
                        {/* @foreach ($product->reviews as $key => $review)
                        <div className="flex gap-4 py-4 border-b">
                            <div className="w-1/5">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="rounded-full">
                                        <img className="w-12 h-12 rounded-full" src={{ $review->user->getAvatarAttribute() }}
                                            alt={{ $review->id }} />
                                    </div>
                                    <div>
                                        <div className="text-ellipsis line-clamp-1">{{ $review->user->username }}</div>
                                        <div className="text-sm text-gray-500">Đã tham gia 2 tháng</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-gray-500">
                                    <x-mdi-comment-alert-outline className="w-4 h-4" />
                                    <span className="text-sm">{{ sizeof($review->user->reviews) }} Đánh giá</span>
                                </div>
                                <div className="border my-2"></div>
                                <div className="flex items-center justify-between text-gray-500">
                                    <x-mdi-thumb-up-outline className="w-4 h-4" />
                                    <span className="text-sm">0 Lượt cảm ơn</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="">
                                    <div className="flex flex-wrap gap-1">
                                        @for ($i = 1; $i <= $review->star; $i++)
                                            <FaStar className="text-[#faca51] h-6 w-6" />
                                        @endfor
                                        @for ($i = 0; $i < 5 - $review->star; $i++)
                                            <FaStar className="text-gray-300 h-6 w-6" />
                                        @endfor
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="text-green-500 flex items-center gap-1">
                                        <x-bi-check-circle className="w-5 h-5" fill="green" />
                                        <span className="text-sm">Đã mua hàng</span>
                                    </div>
                                </div>
                                <span className="text-sm">{{ $review->comment }}</span>
                                <div className="flex flex-nowrap overflow-x-hidden w-full gap-3 my-2">
                                    @foreach ($review->getMediasAttribute() as $media)
                                        <img src={{ $media['original_url'] }} alt="" className="h-24 w-24" />
                                    @endforeach
                                </div>
                                <div className="flex gap-2 items-center mb-3">
                                    <span className="text-sm text-gray-500">Đánh giá vào {{ date('h:m d-m-Y') }}</span>
                                    <span className="w-1 h-1 bg-gray-500"></span>
                                    <span className="text-sm text-gray-500">Đã dùng 1 giờ</span>
                                </div>
                                <div className="flex items-center justify-between text-gray-500">
                                    <div className="flex gap-5">
                                        <span className="flex items-center gap-1">
                                            <x-mdi-thumb-up-outline className="w-6 h-6" />
                                            <span className="text-sm">0</span>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <x-forkawesome-comment-o className="w-6 h-6" />
                                            <span className="text-sm">0</span>
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1">
                                        <x-bi-share className="w-6 h-6" />
                                        <span className="text-sm">Chia sẻ</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    @endforeach */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage