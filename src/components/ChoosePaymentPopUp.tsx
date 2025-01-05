import React, { Dispatch, SetStateAction } from "react"

const ChoosePaymentPopUp: React.FC<{ showModal: boolean, setShowModal: Dispatch<SetStateAction<boolean>> }> = ({ showModal, setShowModal }) => {
    return (
        <div className={`w-full h-screen fixed inset-0 z-20 overflow-y-scroll ${showModal ? 'block' : 'hidden'}`}>
            <div className="flex items-end justify-center min-h-screen px-4 py-12 text-center sm:block sm:p-0">
                <div className="fixed inset-0">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="z-30 relative inline-block bg-white shadow-xl my-12 sm:align-middle max-w-xl rounded-md w-full">
                    <div className="px-4 py-5 bg-white text-left rounded-md">
                        <div className="">
                            <div className="flex flex-col items-center gap-1">
                                <div className="product-img">
                                    <img src="https://salt.tikicdn.com/cache/w200/media/catalog/producttmp/98/d3/28/5cd9c60f1578f5a4a8c5c9a0383e62d0.jpg" alt="product-img" width="100" height="100" className="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo" />
                                </div>
                                <p className="product-name" title="Nạp TikiXu">Nạp TienXu</p>
                                <p className="product-qty">SL: 1</p>
                                <h2 className="product-price">11.111 ₫</h2>
                            </div>

                            <div className="">
                                <h2 className="">Chọn 1 phương thức thanh toán</h2>
                                <div className="py-4">
                                    <label className="flex items-center gap-4">
                                        <input type="radio" name="walletMethod" value="momo" className="w-4 h-4" />
                                        <span className="label">
                                            <div className="">
                                                <div className="table">
                                                    <img className="table-cell mr-4" src="https://salt.tikicdn.com/ts/upload/ce/f6/e8/ea880ef285856f744e3ffb5d282d4b2d.jpg" width="32" height="32" alt="icon" />
                                                    <div className="table-cell align-middle">
                                                        <div className="">
                                                            <span>Ví MoMo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                                <div className="py-4">
                                    <label className="flex items-center gap-4">
                                        <input type="radio" name="walletMethod" value="zalopay" className="w-4 h-4" />
                                        <span className="">
                                            <div className="">
                                                <div className="table">
                                                    <img className="table-cell mr-4" src="https://salt.tikicdn.com/ts/upload/2f/43/da/dd7ded6d3659036f15f95fe81ac76d93.png" width="32" height="32" alt="icon" />
                                                    <div className="table-cell align-middle">
                                                        <div className="method-content__title">
                                                            <span>Ví ZaloPay</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                                <div className="py-4">
                                    <label className="flex items-center gap-4">
                                        <input type="radio" name="walletMethod" value="vnpay" className="w-4 h-4" />
                                        <span className="label">
                                            <div className="table">
                                                <img className="table-cell mr-4" src="https://salt.tikicdn.com/ts/upload/77/6a/df/a35cb9c62b9215dbc6d334a77cda4327.png" width="32" height="32" alt="icon" />
                                                <div className="table-cell align-middle">
                                                    <div className="method-content__title">
                                                        <span>VNPAY</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="border-y">
                                <div className="my-3 flex justify-between text-lg font-semibold">
                                    <span>Tổng tiền</span>
                                    <span>11.111 ₫</span>
                                </div>
                            </div>
                            {/* <div className="Divider-sc-napfs-0 lmBswD"></div> */}
                            <div className="my-3">
                                <p className="text-xs">
                                    <span>Bằng việc tiến hành giao dịch, bạn đồng ý với điều khoản sử dụng dịch vụ. </span>
                                    <a className="text-blue-500" href="" target="_blank">Xem thêm tại đây.</a>
                                </p>
                                <div className="flex gap-3 mt-3">
                                    <button className="flex-1 py-2 text-white bg-blue-500 rounded-md" onClick={() => setShowModal(false)}>Huỷ</button>
                                    <button className="flex-1 py-2 border border-gray-200 rounded-md">Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosePaymentPopUp