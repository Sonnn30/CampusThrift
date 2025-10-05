import { Link } from "@inertiajs/react";

export default function SellerProductPageNavbar() {
    return (
        <div className="flex flex-wrap justify-around items-center bg-[#BBDCE5] text-black p-6">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="flex items-center">
                    <img
                        className="h-[75px] w-auto"
                        src="/SellerPage_assets/user.png"
                        alt="Seller Profile"
                    />
                    <div className="flex flex-col ml-3">
                        <p className="text-[28px] font-semibold">Nama Seller</p>
                        <span className="text-[16px]">Active X minutes ago</span>
                    </div>
                </div>

                <div className="flex justify-betweenflex justify-between items-center w-full">
                    <Link href="/" className="w-fit">
                        <button className="bg-white rounded-md px-4 py-2 flex justify-center items-center hover:bg-gray-100 transition-colors duration-200 border">
                            View Profile
                        </button>
                    </Link>

                    <Link href="/" className="w-fit">
                        <button className="bg-white rounded-md px-4 py-2 flex justify-center items-center hover:bg-gray-100 transition-colors duration-200 border">
                            <img
                                className="h-[15px] w-auto mr-2"
                                src="/SellerPage_assets/chat.png"
                                alt="Chat Icon"
                            />
                            Chat
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mid Section */}
            <div className="flex justify-center items-center w-full md:w-auto mt-6 md:mt-0">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full max-w-[500px] text-[16px] font-medium">
                    <div className="flex items-center">
                        <div className="w-6 flex justify-center">
                            <img
                                className="h-6 w-6"
                                src="/SellerPage_assets/store.png"
                                alt="Store Icon"
                            />
                        </div>
                        <span className="ml-3">Items: 10</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-6 flex justify-center">
                            <img
                                className="h-6 w-6"
                                src="/SellerPage_assets/star.png"
                                alt="Rating Icon"
                            />
                        </div>
                        <span className="ml-3">Rating: 4.7</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-6 flex justify-center">
                            <img
                                className="h-6 w-6"
                                src="/SellerPage_assets/status.png"
                                alt="Status Icon"
                            />
                        </div>
                        <span className="ml-3">Status: Online</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-6 flex justify-center">
                            <img
                                className="h-6 w-6"
                                src="/SellerPage_assets/group.png"
                                alt="Group Icon"
                            />
                        </div>
                        <span className="ml-3">Joined: 1 Years</span>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center md:justify-end items-center mt-6 md:mt-0">
                <button className="flex items-center gap-2 bg-white border border-black rounded-full px-5 py-2 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-100">
                    <img
                        className="h-6 w-auto"
                        src="/SellerPage_assets/add.png"
                        alt="Add Icon"
                    />
                    Add Product
                </button>
            </div>
        </div>
    );
}
