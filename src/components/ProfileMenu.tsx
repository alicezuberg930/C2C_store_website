import { icons } from "@/common/icons"
import Link from "next/link"

const ProfileMenu: React.FC<{ user: User }> = ({ user }) => {
    const { RiCustomerService2Fill, CiWallet, FaUser, IoMdNotifications, MdInbox, TbCreditCardRefund, FaRegAddressBook, MdOutlineCreditCard, MdOutlineModeComment, CiHeart, MdOutlineDiscount } = icons
    const menuTabs = [
        {
            'title': 'Thông tin tài khoản',
            'path': '/user/profile',
            'icon': <FaUser size={24} />
        },
        {
            'title': 'Thông báo của tôi',
            'path': '/user/notification',
            'icon': <IoMdNotifications size={24} />
        },
        {
            'title': 'Sổ địa chỉ',
            'path': '/user/address',
            'icon': <FaRegAddressBook size={24} />
        },
        {
            'title': 'Quản lý ví của tôi',
            'path': '/user/wallet',
            'icon': <CiWallet size={24} />
        },
    ]

    return (
        <aside className="bg-white flex-none w-fit fixed h-screen md:rounded-md overflow-auto md:h-fit md:relative top-0 left-0">
            <div className="flex gap-2 p-2 items-center mb-3">
                <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                <div>
                    <span className="text-sm">Tài khoản của</span>
                    <div className="h-1"></div>
                    <span className="text-lg font-semibold">Nguyễn Vĩnh Tiến</span>
                </div>
            </div>
            <ul className="text-sm text-gray-500">
                {
                    menuTabs.map(menu => {
                        return (
                            <li key={menu.path} className="py-2 px-3 hover:bg-gray-200">
                                <Link className="flex gap-2 items-center" href={menu.path}>
                                    {menu.icon}
                                    <span>{menu.title}</span>
                                </Link>
                            </li>
                        )
                    })
                }
                {/* <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/sales/order/history">
                        <MdInbox className="w-6 h-6" />
                        <span>Quản lý đơn hàng</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/return-tracking/history">
                        <TbCreditCardRefund className="w-6 h-6" />
                        <span>Quản lý đổi trả</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/customer/paymentcard">
                        <MdOutlineCreditCard className="w-6 h-6" />
                        <span>Thông tin thanh toán</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/review-hub">
                        <MdOutlineModeComment className="w-6 h-6" />
                        <span>Đánh giá sản phẩm</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/customer/wishlist">
                        <CiHeart className="w-6 h-6" />
                        <span>Sản phẩm yêu thích</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/customer/coupons">
                        <MdOutlineDiscount className="w-6 h-6" />
                        <span>Mã giảm giá</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/customer/help-center?src=sidebar_my_account">
                        <RiCustomerService2Fill className="w-6 h-6" />
                        <span>Hỗ trợ khách hàng</span>
                    </a>
                </li> */}
            </ul>
        </aside>
    )
}

export default ProfileMenu