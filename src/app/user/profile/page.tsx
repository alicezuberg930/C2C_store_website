import { user } from "@/common/dummy.data"
import { icons } from "@/common/icons"
import CustomDatePicker from "@/components/CustomDatePicker"
import ProfileMenu from "@/components/ProfileMenu"

const UserProfilePage: React.FC = () => {
    const { FiPhone, FaPen, MdOutlineMail, CiLock, MdOutlineVerifiedUser, FaRegTrashCan } = icons

    return (
        <div className="flex gap-4">
            <ProfileMenu user={user} />
            <div className="bg-white rounded-md flex-auto">
                <div className="p-4">
                    <div className="flex">
                        <div className="w-3/5">
                            <span className="text-lg text-gray-500">Thông tin cá nhân</span>
                            <div className="mt-6">
                                <form>
                                    <div className="mb-6">
                                        <div className="w-28 h-28 relative border-2 border-blue-500 rounded-full">
                                            <img src={user.avatar} alt="avatar" className="w-full h-full object-cover profile-pic" />
                                            <button className="text-white absolute bottom-0 right-0 p-2 rounded-full bg-[#687082]">
                                                <FaPen size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center mb-6">
                                            <label className="flex-none w-24">Họ Tên</label>
                                            <input className='w-full outline-none rounded-md border p-2 border-gray-300 focus:border-blue-500' name="fullname" placeholder="Thêm họ tên" type="text" />
                                        </div>
                                        <div className="flex justify-between items-center mb-6">
                                            <label className="flex-none w-24">Nickname</label>
                                            <input className='w-full outline-none rounded-md border p-2 border-gray-300 focus:border-blue-500' name="nickname" placeholder="Thêm nickname" type="text" />
                                        </div>
                                        <div className="flex justify-between items-center mb-6">
                                            <label className="flex-none w-24">Ngày sinh</label>
                                            <div className="w-full">
                                                <CustomDatePicker />
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mb-6">
                                            <label className="flex-none w-24">Giới tính</label>
                                            <div className="flex gap-4 w-full py-2">
                                                <label className="flex items-center gap-3">
                                                    <input type="radio" name="gender" value="male" className="w-5 h-5" />
                                                    <span className="label">Nam</span>
                                                </label>
                                                <label className="flex items-center gap-3">
                                                    <input type="radio" name="gender" value="female" className="w-5 h-5" />
                                                    <span className="label">Nữ</span>
                                                </label>
                                                <label className="flex items-center gap-3">
                                                    <input type="radio" name="gender" value="other" className="w-5 h-5" />
                                                    <span className="label">Khác</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="flex-none w-24"></label>
                                            <div className="w-full">
                                                <button type="submit" className="bg-blue-500 rounded-md px-4 py-2 text-white">Lưu thay đổi</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="border mx-4 flex-none"></div>
                        <div className="flex-1">
                            <span className="info-title">Số điện thoại và Email</span>
                            <div className="">
                                <div className="flex items-center justify-between py-5 text-sm">
                                    <div className="flex items-center">
                                        <FiPhone className="mr-3" size={24} />
                                        <div>
                                            <p>Số điện thoại</p>
                                            <p>0932430072</p>
                                        </div>
                                    </div>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">Cập nhật</button>
                                </div>
                                <hr className="w-full border-b border-blue-100" />
                                <div className="flex items-center justify-between py-5 text-sm">
                                    <div className="flex items-center">
                                        <MdOutlineMail className="mr-3" size={24} />
                                        <div>
                                            <p>Địa chỉ email</p>
                                            <p>Thêm địa chỉ email</p>
                                        </div>
                                    </div>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">Cập nhật</button>
                                </div>
                            </div>
                            <span className="info-title">Bảo mật</span>
                            <div className="">
                                <div className="flex items-center justify-between py-5 text-sm">
                                    <div className="table">
                                        <CiLock className="mr-3 table-cell" size={24} />
                                        <span className="table-cell align-middle">Đổi mật khẩu</span>
                                    </div>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">Cập nhật</button>
                                </div>
                                <hr className="w-full border-b border-blue-100" />
                                <div className="flex items-center justify-between py-5 text-sm">
                                    <div className="table">
                                        <MdOutlineVerifiedUser className="table-cell mr-3" size={24} />
                                        <span className="table-cell align-middle">Thiết lập mã PIN</span>
                                    </div>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">Thiết lập</button>
                                </div>
                                <hr className="w-full border-b border-blue-100" />
                                <div className="flex items-center justify-between py-5 text-sm">
                                    <div className="table">
                                        <FaRegTrashCan className="table-cell mr-3" size={24} />
                                        <span className="table-cell align-middle">Yêu cầu xóa tài khoản</span>
                                    </div>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">Yêu cầu</button>
                                </div>
                            </div>
                            <span>Liên kết mạng xã hội</span>
                            <div className="">
                                <div className="flex items-center justify-between py-5 text-sm">
                                    <div className="table">
                                        <img src="../assets/facebook.png" className="table-cell w-6 h-6 mr-3" />
                                        <span className="table-cell align-middle">Facebook</span>
                                    </div>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">Liên kết</button>
                                </div>
                                <hr className="w-full border-b border-blue-100" />
                                <div className="flex items-center justify-between py-5 text-sm">
                                    <div className="table">
                                        <img src="../assets/google.png" className="table-cell w-6 h-6 mr-3" />
                                        <span className="table-cell align-middle">Google</span>
                                    </div>
                                    <button className="border border-blue-500 text-blue-500 rounded-md px-3 py-1">Liên kết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default UserProfilePage