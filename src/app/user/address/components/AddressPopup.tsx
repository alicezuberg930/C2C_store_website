import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"
import { icons } from "@/common/icons"
import { createDeliveryAddress, getDistricts, getProvinces, getWards, updateDeliveryAddress } from "@/services/api.service"
import { toast } from "react-toastify"
import { showResponseError } from "@/common/utils"

const AddressPopup: React.FC<{
    showModal: boolean, setShowModal: Dispatch<SetStateAction<boolean>>, selectedDeliveryAddress?: DeliveryAddress, setSelectedDeliveryAddress?: Dispatch<SetStateAction<DeliveryAddress | undefined>>
}> = ({ showModal, setShowModal, selectedDeliveryAddress, setSelectedDeliveryAddress }) => {
    const [addressType, setAddressType] = useState<string>("")
    const [checked, setChecked] = useState(false)
    const { FaCheck, GiCancel } = icons
    const [provinces, setProvinces] = useState<Province[]>([])
    const [districts, setDistricts] = useState<District[]>([])
    const [wards, setWards] = useState<Ward[]>([])

    useEffect(() => {
        if (selectedDeliveryAddress !== undefined) {
            setAddressType(selectedDeliveryAddress?.addressType!)
            setChecked(selectedDeliveryAddress?.isDefault!)
        }
    }, [selectedDeliveryAddress])

    useEffect(() => {
        const handleGetProvinces = async () => {
            const response = await getProvinces()
            setProvinces(response.data ?? [])
        }
        handleGetProvinces()
    }, [])

    const handleGetDistricts = async (code: string) => {
        const response = await getDistricts({ code })
        setDistricts(response.data ?? [])
    }

    const handleGetWards = async (code: string) => {
        const response = await getWards({ code })
        setWards(response.data ?? [])
    }

    const handleDeliveryAddress = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const deliveryAddress: DeliveryAddress = Object.fromEntries(formData.entries())
        deliveryAddress.addressType = addressType
        deliveryAddress.isDefault = checked
        try {
            if (selectedDeliveryAddress !== undefined) {
                const response = await updateDeliveryAddress({ deliveryAddress, id: selectedDeliveryAddress?._id! })
                toast.success(response.message)
                setSelectedDeliveryAddress!(undefined)
            } else {
                const response = await createDeliveryAddress({ deliveryAddress })
                toast.success(response.message)
            }
            setShowModal(false)
        } catch (error) {
            showResponseError(error)
        }
    }

    return (
        <div className={`w-full h-screen fixed inset-0 z-20 overflow-y-scroll ${showModal ? 'block' : 'hidden'}`}>
            <div className="flex items-end justify-center min-h-screen px-4 py-12 text-center sm:block sm:p-0">
                <div className="fixed inset-0">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="z-30 relative inline-block bg-white shadow-xl my-12 sm:align-middle max-w-xl rounded-md w-full">
                    <div className="px-4 py-5 bg-white text-left rounded-md">
                        <div className="py-3 flex justify-between items-center">
                            <span className="font-semibold text-lg">{selectedDeliveryAddress ? 'Cập nhật' : 'Tạo'} sổ địa chỉ</span>
                            <GiCancel size={20} onClick={() => setShowModal(false)} />
                        </div>
                        <form onSubmit={handleDeliveryAddress}>
                            <table className='w-full'>
                                <tbody>
                                    <tr>
                                        <td className='py-3 w-32'>Họ và tên</td>
                                        <td className='py-3'>
                                            <input className='border-gray-300 h-10 px-2 border focus:border-blue-500 rounded-md w-full outline-none'
                                                placeholder="Nhập họ và tên" type='text' name="contactName" defaultValue={selectedDeliveryAddress?.contactName ?? ""}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'>Số điện thoại</td>
                                        <td className='py-3'>
                                            <input className='border-gray-300 h-10 px-2 border focus:border-blue-500 rounded-md w-full outline-none'
                                                placeholder="Nhập họ và tên" type='text' name="contactPhone" defaultValue={selectedDeliveryAddress?.contactPhone ?? ""}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'>Tỉnh/Thành phố</td>
                                        <td className='py-3'>
                                            <select className='border-gray-300 h-10 px-2 border focus:border-blue-500 rounded-md w-full outline-none' name="city"
                                                defaultValue={selectedDeliveryAddress?.city ?? ""} onChange={(e) => handleGetDistricts(e.target.value)}
                                            >
                                                {
                                                    provinces.length > 0 ? provinces.map(province => {
                                                        return (
                                                            <option value={province.code} key={province.code}>{province.fullName}</option>
                                                        )
                                                    }) : <option disabled>Không tìm thấy tỉnh/thành</option>
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'>Quận/Huyện</td>
                                        <td className='py-3'>
                                            <select className='border-gray-300 h-10 px-2 border focus:border-blue-500 rounded-md w-full outline-none' name="district"
                                                defaultValue={selectedDeliveryAddress?.district ?? ""} onChange={(e) => handleGetWards(e.target.value)}
                                            >
                                                {
                                                    districts.length > 0 ? districts.map(district => {
                                                        return (
                                                            <option value={district.code} key={district.code}>{district.fullName}</option>
                                                        )
                                                    }) : <option disabled>Không tìm thấy quận/huyện</option>
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'>Phường/Xã</td>
                                        <td className='py-3'>
                                            <select className='border-gray-300 h-10 px-2 border focus:border-blue-500 rounded-md w-full outline-none'
                                                name="ward" defaultValue={selectedDeliveryAddress?.ward ?? ""}
                                            >
                                                {
                                                    wards.length > 0 ? wards.map(ward => {
                                                        return (
                                                            <option value={ward.code} key={ward.code}>{ward.fullName}</option>
                                                        )
                                                    }) : <option disabled>Không tìm thấy phường/xã</option>
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'>Số nhà/đường</td>
                                        <td className='py-3'>
                                            <textarea className='border-gray-300 px-2 border focus:border-blue-500 rounded-md w-full outline-none'
                                                placeholder="Nhập địa chỉ" name="street" rows={5} defaultValue={selectedDeliveryAddress?.street ?? ""}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'>Loại địa chỉ</td>
                                        <td className='py-3 flex gap-2 cursor-pointer'>
                                            <div onClick={() => setAddressType("home")} className={`w-fit p-2 border rounded-md shadow-sm ${addressType === "home" ? 'border-blue-500 shadow-blue-500' : 'border-gray-400'}`}>Nhà riêng</div>
                                            <div onClick={() => setAddressType("office")} className={`w-fit p-2 border rounded-md shadow-sm ${addressType === "office" ? 'border-blue-500 shadow-blue-500' : 'border-gray-400'}`}>Văn phòng</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'></td>
                                        <td className='py-3'>
                                            <label className="gap-2 flex items-center cursor-pointer">
                                                <input type="checkbox" className="hidden peer" checked={checked} onChange={() => setChecked(!checked)} />
                                                <div className="w-6 h-6 flex items-center justify-center border border-gray-500 text-white font-bold transition-colors duration-300 peer-checked:bg-blue-500">
                                                    <FaCheck />
                                                </div>
                                                <span className="text-sm text-gray-800 select-none">Đặt làm địa chỉ mặc định</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-3 w-32'></td>
                                        <td className='py-3'>
                                            <button className="px-3 py-2 bg-blue-500 text-white rounded-md">Lưu địa chỉ</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressPopup