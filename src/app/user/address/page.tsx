'use client'
import { icons } from "@/common/icons"
import UserLayout from "../components/UserLayout"
import { useEffect, useRef, useState } from "react"
import { deleteDeliveryAddress, getDeliveryAddresses } from "@/services/api.service"
import LoadingShimmer from "@/components/LoadingShimmer"
import AddressPopup from "./components/AddressPopup"
import { toast } from "react-toastify"
import { showResponseError } from "@/common/utils"

const AddressPage: React.FC = () => {
    const { IoIosAdd } = icons
    const [deliveryAddresses, setDeliveryAddresses] = useState<DeliveryAddress[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress | undefined>(undefined)

    useEffect(() => {
        const fetchDeliveryAddresses = async () => {
            try {
                let response = await getDeliveryAddresses()
                setDeliveryAddresses(response.data!)
            } catch (error) {
                showResponseError(error)
            }
        }
        fetchDeliveryAddresses()
    }, [])

    const handleDeleteDeliveryAddress = async (id: string) => {
        try {
            const response = await deleteDeliveryAddress({ id })
            toast.success(response.message)
        } catch (error) {
            showResponseError(error)
        }
    }

    return (
        <UserLayout>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span>Địa chỉ của tôi</span>
                <button onClick={() => setShowModal(!showModal)} className="bg-blue-500 rounded-md px-4 py-2 text-white">
                    <IoIosAdd size={24} className="inline-block" />
                    <span className="inline-block align-middle">Thêm địa chỉ</span>
                </button>
            </div>

            <div className="mt-3">
                {deliveryAddresses.length > 0 ?
                    deliveryAddresses.map((deliveryAddress, i) => {
                        return (
                            <div key={deliveryAddress._id}>
                                <div className={`flex justify-between items-center border-dashed border-blue-400 py-4 ${i < deliveryAddresses.length - 1 && 'border-b'}`}>
                                    <div className="flex-auto">
                                        <div className="flex items-center gap-4">
                                            <span>{deliveryAddress.contactName}</span>
                                            <span className="text-blue-400 text-xs">{deliveryAddress.isDefault && 'Địa chỉ mặc định'}</span>
                                        </div>
                                        <div className="mt-2">
                                            <div>
                                                <span className="text-gray-400">Số điện thoại: </span>
                                                <span className="font-semibold">{deliveryAddress.contactPhone}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Địa chỉ: </span>
                                                <span className="font-semibold">{deliveryAddress.street}, {deliveryAddress.ward}, {deliveryAddress.district}, {deliveryAddress.city}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-x-4 text-sm cursor-pointer">
                                        <span className="text-blue-400" onClick={() => {
                                            setShowModal(!showModal)
                                            setDeliveryAddress(deliveryAddress)
                                        }}>
                                            Chỉnh sửa
                                        </span>
                                        <span className="text-red-400" onClick={() => handleDeleteDeliveryAddress(deliveryAddress._id!)}>Xóa</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <LoadingShimmer />
                }
            </div>
            <AddressPopup showModal={showModal} setShowModal={setShowModal} selectedDeliveryAddress={deliveryAddress} setSelectedDeliveryAddress={setDeliveryAddress} />
        </UserLayout>
    )
}

export default AddressPage