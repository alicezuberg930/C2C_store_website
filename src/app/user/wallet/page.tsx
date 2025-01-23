"use client"
import { user } from "@/common/dummy.data"
import { icons } from "@/common/icons"
import { momoPaymentResult } from "@/common/payment.result"
import ChoosePaymentPopUp from "@/components/ChoosePaymentPopUp"
import ProfileMenu from "@/components/ProfileMenu"
import { createTransaction } from "@/services/api.service"
import { useSearchParams } from "next/navigation"
import React, { FormEvent, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"

const WalletPage: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const amountRef = useRef<HTMLInputElement>(null)
    const { CiCircleInfo, BsCoin } = icons
    const searchParams = useSearchParams()

    useEffect(() => {
        // if (searchParams.get("resultCode") != null && searchParams.get("resultCode") != "0") {
        //     toast.error(momoPaymentResult(searchParams.get("resultCode")!))
        // }
    }, [])

    return (
        <>
            <div className="flex gap-4">
                <ProfileMenu user={user} />
                <div className="bg-white rounded-md flex-auto">
                    <div className="p-4">
                        <span className="text-lg text-gray-500">Quản lý ví của tôi</span>
                        <div className="flex justify-between items-center mt-6">
                            <div className="flex items-center">
                                <h4 className="mr-3">Số coin trong tài khoản</h4>
                                <p className="table">
                                    <CiCircleInfo className="table-cell h-8 w-8 mr-3" />
                                    <span className="table-cell align-middle font-semibold text-yellow-500 text-2xl">0</span>
                                </p>
                            </div>
                            <span className="table">
                                <span className="table-cell align-middle">Tiki Xu là gì?</span>
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/question-mark.svg" alt="xu" className="table-cell" />
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-6">
                            <div className="w-3/5">
                                <div className="">
                                    <h4 className="table mb-4">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/custom-amount.svg" alt="xu" className="table-cell mr-3" />
                                        <span className="table-cell align-middle">Nạp Xu vào tài khoản</span>
                                    </h4>
                                    <div className="custom-amount-center">
                                        <div className="custom-amount-left">
                                            <div className="bg-wallet flex flex-wrap  aspect-[16/9] bg-blend-overlay bg-contain bg-no-repeat bg-blue-300 rounded-xl py-5 px-8">
                                                <div className="text-white flex items-center self-start">
                                                    <span className="mr-3">Nhập số Xu muốn nạp</span>
                                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/live-area.svg" alt="info" className="table-cell w-4 h-4" />
                                                </div>
                                                <div className="mt-auto w-full">
                                                    <div className="border-b flex items-center ">
                                                        <span className="">
                                                            <BsCoin color="#eab308" size={36} />
                                                        </span>
                                                        <input type="text" placeholder='0' ref={amountRef} className="outline-none w-full table-cell bg-transparent py-2 px-3 text-2xl text-white" />
                                                    </div>
                                                    <ul className="gap-3 select-none text-white mt-4 flex flex-wrap">
                                                        <li className="bg-blue-500 rounded-md p-1" value="100000">100.000</li>
                                                        <li className="bg-blue-500 rounded-md p-1" value="200000">200.000</li>
                                                        <li className="bg-blue-500 rounded-md p-1" value="500000">500.000</li>
                                                        <li className="bg-blue-500 rounded-md p-1" value="1000000">1.000.000</li>
                                                        <li className="bg-blue-500 rounded-md p-1" value="2000000">2.000.000</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border my-4 sm:my-0 mx-0 sm:mx-4 flex-none"></div>
                            <div className="flex-1">
                                <div className="text-sm">
                                    <div className="custom-amount-result">
                                        <p className="flex flex-wrap">
                                            <span className="">Phí giao dịch:</span>
                                            <span className="ml-auto">0%</span>
                                        </p>
                                        <div className="my-2 border border-dashed"></div>
                                        <p className="flex flex-wrap">
                                            <span className="">Số tiền cần thanh toán:</span>
                                            <span className="ml-auto">0 ₫</span>
                                        </p>
                                        <div className="text-lg text-white mt-8">
                                            <button onClick={() => setShowModal(true)} className="bg-blue-500 rounded-md w-full py-1.5">Tiến hành thanh toán</button>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <ul>
                                            <li>- 1 vnđ = 1 Tiki Xu</li>
                                            <li>- Tiki Xu được nạp vào tài khoản sau khi thanh toán</li>
                                            <li>- ĐH Top-up Tiki Xu không thể Hủy / Trả</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <ChoosePaymentPopUp showModal={showModal} setShowModal={setShowModal} amount={+(amountRef.current?.value ?? 0)} />
        </>
    )
}

export default WalletPage