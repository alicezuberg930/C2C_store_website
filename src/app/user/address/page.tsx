'use client'
import { icons } from "@/common/icons"
import UserLayout from "../components/UserLayout"
import { useEffect, useState } from "react"
import { getDeliveryAddresses } from "@/services/api.service"
import LoadingShimmer from "@/components/LoadingShimmer"

const AddressPage: React.FC = () => {
    const { IoIosAdd } = icons
    const [deliveryAddresses, setDeliveryAddresses] = useState<DeliveryAddress[]>([])

    useEffect(() => {
        const fetchDeliveryAddresses = async () => {
            let response = await getDeliveryAddresses()
            setDeliveryAddresses(response?.data ?? [])
        }
        fetchDeliveryAddresses()
    }, [])

    return (
        <UserLayout>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span>Địa chỉ của tôi</span>
                <button type="button" className="bg-blue-500 rounded-md px-4 py-2 text-white">
                    <IoIosAdd size={24} className="inline-block" />
                    <span className="inline-block align-middle">Thêm địa chỉ</span>
                </button>
            </div>

            {deliveryAddresses.length > 0 ?
                deliveryAddresses.map(deliveryAddress => {
                    return (
                        <div key={deliveryAddress._id} className="">
                            <div className="flex items-center gap-4 pt-4">
                                <span>{deliveryAddress.contactName}</span>
                                <span className="text-blue-400 text-xs">{deliveryAddress.isDefault && 'Địa chỉ mặc định'}</span>
                            </div>
                        </div>
                    )
                }) : <LoadingShimmer />
            }
        </UserLayout>
    )
}

export default AddressPage