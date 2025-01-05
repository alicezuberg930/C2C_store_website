import React from 'react'
import { icons } from '../common/icons'
import { user } from '../common/dummy.data'
import Link from 'next/link'


const Header: React.FC = () => {
    const { CiShoppingCart, CiSearch } = icons

    return (
        <div className='bg-gray-800'>
            <div className='max-w-screen-xl mx-auto px-4 xl:px-0'>
                <div className='flex justify-end'>
                    {
                        user != null ?
                            <div className='group pt-2'>
                                <div className='relative'>
                                    <button className='text-white flex gap-2 items-center'>
                                        <img src={user.avatar} className='h-6 w-6 rounded-full object-cover' />
                                        <span>{user.name}</span>
                                    </button>
                                    <div className='rounded-md whitespace-nowrap mt-2 hidden w-fit group-hover:block absolute top-4 right-0 shadow-lg p-3 bg-white z-50'>
                                        <a className='block' href='/user/profile'>Thông tin cá nhân</a>
                                        <a className='block py-3' href='/user/orders'>Lịch sử mua hàng</a>
                                        <a className='block' href='/logout'>Đăng xuất</a>
                                    </div>
                                </div>
                            </div> :
                            <div className='flex pt-1'>
                                <div className=''>
                                    <a className='p-0 text-white' href='/buyer/login'>Đăng nhập</a>
                                </div>
                                <div className='mx-2 text-light'> | </div>
                                <div className=''>
                                    <a id='login-logout' className='text-white' href='/buyer/signup'>Đăng ký</a>
                                </div>
                            </div>
                    }
                </div>
                <nav className='py-6 flex justify-between items-center gap-4 sm:gap-8 flex-wrap'>
                    <Link href='/' className='h-full flex items-center gap-2 flex-1 sm:flex-none order-1'>
                        {/* <img src='{{ url('assets/black-fire-logo.png') }}' width='50' height='50' alt='logo' /> */}
                        <div className='logo-text text-2xl font-semibold'>ZippoStore</div>
                    </Link>
                    <div className='flex flex-auto w-full sm:flex-1 gap-3 items-center order-3 sm:order-2'>
                        <div className='flex rounded-md bg-white w-full'>
                            <input type='text' name='search_name' className='px-3 py-2 focus:outline-none w-full bg-transparent' placeholder='Tìm kiếm' id='search_name' />
                            <div className='bg-blue-300 px-4 rounded-r-md'>
                                <CiSearch className='text-white h-full' size={32} />
                            </div>
                        </div>
                    </div>
                    <div className='relative flex-none order-2 sm:order-3'>
                        <div className='absolute -top-2 -right-2 p-1 bg-blue-300 text-xs text-white rounded-xl'>10</div>
                        <Link href='/cart'>
                            <CiShoppingCart className='text-blue-300' size={32} />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header