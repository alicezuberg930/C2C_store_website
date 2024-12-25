import { icons } from "@/common/icons"

const ProfileMenu: React.FC<{ user: User }> = ({ user }) => {
    const { RiCustomerService2Fill, CiWallet, FaUser, IoMdNotifications, MdInbox, TbCreditCardRefund, FaRegAddressBook, MdOutlineCreditCard, MdOutlineModeComment, CiHeart, MdOutlineDiscount } = icons

    return (
        <aside className="bg-white rounded-md h-fit flex-none w-fit">
            <div className="flex gap-2 p-2 items-center mb-3">
                <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                <div>
                    <span className="text-sm">Tài khoản của</span>
                    <div className="h-1"></div>
                    <span className="text-lg font-semibold">Nguyễn Vĩnh Tiến</span>
                </div>
            </div>
            <ul className="text-sm text-gray-500">
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/customer/notification">
                        <FaUser className="w-6 h-6" />
                        <span>Thông tin tài khoản</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/customer/notification">
                        <IoMdNotifications className="w-6 h-6" />
                        <span>Thông báo của tôi</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
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
                    <a className="flex gap-2 items-center" href="/customer/address">
                        <FaRegAddressBook className="w-6 h-6" />
                        <span>Sổ địa chỉ</span>
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
                    <a className="flex gap-2 items-center" href="/user/wallet">
                        <CiWallet className="w-6 h-6" />
                        <span>Quản lý ví của tôi</span>
                    </a>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200">
                    <a className="flex gap-2 items-center" href="/customer/help-center?src=sidebar_my_account">
                        <RiCustomerService2Fill className="w-6 h-6" />
                        <span>Hỗ trợ khách hàng</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default ProfileMenu