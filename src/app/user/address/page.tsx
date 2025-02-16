'use client'
import { icons } from "@/common/icons"
import UserLayout from "../components/UserLayout"
import { useEffect, useState } from "react"
import { getDeliveryAddresses } from "@/services/api.service"

const AddressPage: React.FC = () => {
    const { IoIosAdd } = icons
    const [deliveryAddresses, setDeliveryAddresses] = useState<DeliveryAddress[]>([])

    useEffect(() => {
        const a = async () => {
            let response = await getDeliveryAddresses()
            setDeliveryAddresses(response.data ?? [])
        }
        a()
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

            {JSON.stringify(deliveryAddresses)}
        </UserLayout>
    )
}

export default AddressPage