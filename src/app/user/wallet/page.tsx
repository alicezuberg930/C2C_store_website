import { user } from "@/common/dummy.data"
import ProfileMenu from "@/components/ProfileMenu"
import React from "react"

const WalletPage: React.FC = () => {
    return (
        <div className="flex gap-4">
            <ProfileMenu user={user} />
            <div className="bg-white rounded-md flex-auto">
                <div className="p-4">
                    <span className="text-lg text-gray-500">Quản lý ví của tôi</span>
                    <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center">
                            <h4 className="mr-3">Số coin trong tài khoản</h4>
                            <p className="table">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/xu-icon.svg" alt="xu" className="table-cell h-8 w-8 mr-3" />
                                <span className="table-cell align-middle font-semibold text-yellow-500 text-2xl">0</span>
                            </p>
                        </div>
                        <span className="table">
                            <span className="table-cell align-middle">Tiki Xu là gì?</span>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/question-mark.svg" alt="xu" className="table-cell" />
                        </span>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-3/5">
                            <div className="">
                                <h4 className="table mb-4">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/custom-amount.svg" alt="xu" className="table-cell mr-3" />
                                    <span className="table-cell align-middle">Nạp Xu vào tài khoản</span>
                                </h4>
                                <div className="custom-amount-center">
                                    <div className="custom-amount-left">
                                        <div className="bg-wallet flex flex-wrap h-[330px] bg-blend-overlay bg-contain bg-no-repeat bg-blue-300 rounded-xl py-5 px-8">
                                            <div className="text-white flex items-center self-start">
                                                <span className="mr-3">Nhập số Xu muốn nạp</span>
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/live-area.svg" alt="info" className="table-cell w-4 h-4" />
                                            </div>
                                            <div className="mt-auto w-full">
                                                <div className="border-b flex items-center ">
                                                    <span className="">
                                                        <svg width="36" height="36" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4502 1.04387C12.7301 0.179997 10.7547 -0.155053 8.8445 0.0662299C5.15543 0.450037 1.83253 3.08668 0.598636 6.58095C-0.25034 8.90254 -0.195333 11.5417 0.757405 13.8245C1.64114 15.9761 3.30758 17.7926 5.37158 18.8665C7.23943 19.8479 9.42581 20.208 11.5098 19.8842C13.3552 19.6116 15.1115 18.7965 16.5205 17.5776C18.1307 16.2011 19.2832 14.2983 19.7495 12.2305C20.256 10.0265 19.9897 7.65236 18.9932 5.62205C18.037 3.65176 16.4118 2.01652 14.4502 1.04387Z" fill="#FDD835"></path>
                                                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13.9817 1.98661C12.4427 1.21366 10.6753 0.913881 8.96611 1.11187C5.66537 1.45528 2.69225 3.81438 1.58823 6.94083C0.828624 9.01805 0.87784 11.3794 1.73029 13.4219C2.521 15.347 4.01203 16.9723 5.85876 17.9332C7.53 18.8113 9.48624 19.1334 11.3509 18.8437C13.002 18.5999 14.5734 17.8705 15.8341 16.7799C17.2748 15.5484 18.306 13.8459 18.7233 11.9957C19.1764 10.0237 18.9381 7.89946 18.0465 6.08287C17.191 4.31998 15.7368 2.85687 13.9817 1.98661Z" stroke="#FFB500" stroke-width="0.685714"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.842 10C16.842 6.22059 13.7794 3.1579 9.99994 3.1579C6.22422 3.1579 3.15784 6.22059 3.15784 10C3.15784 13.7757 6.22422 16.8421 9.99994 16.8421C13.7794 16.8421 16.842 13.7757 16.842 10ZM15.7894 10.0082C15.7894 13.1987 13.2009 15.7895 9.99994 15.7895C6.80307 15.7895 4.21047 13.1987 4.21047 10.0082C4.21047 9.45737 4.29212 8.93105 4.43502 8.42105H15.5608C15.7078 8.93105 15.7894 9.45737 15.7894 10.0082Z" fill="#FFB500"></path>
                                                        </svg>
                                                    </span>
                                                    <input type="text" name="prices" placeholder="0" className="outline-none w-full table-cell bg-transparent py-2 px-3 text-2xl text-white" />
                                                </div>
                                                <ul className="space-x-4 text-white mt-4">
                                                    <li className="inline-block bg-blue-500 rounded-md p-1" value="100000">100.000</li>
                                                    <li className="inline-block bg-blue-500 rounded-md p-1" value="200000">200.000</li>
                                                    <li className="inline-block bg-blue-500 rounded-md p-1" value="500000">500.000</li>
                                                    <li className="inline-block bg-blue-500 rounded-md p-1" value="1000000">1.000.000</li>
                                                    <li className="inline-block bg-blue-500 rounded-md p-1" value="2000000">2.000.000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border mx-4 flex-none"></div>
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
                                        <button className="bg-blue-500 rounded-md w-full py-1.5">Tiến hành thanh toán</button>
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
    )
}

export default WalletPage