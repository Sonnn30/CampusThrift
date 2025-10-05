
import { Link } from '@inertiajs/react'

export default function ProductCard_ProductGrid() {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-100 p-5 shadow-sm transition-transform duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0_8px_20px_rgba(255,0,0,0.18)] max-[1000px]:p-4 max-[575px]:gap-2 max-[575px]:p-3">
                        {/* IMAGE */}
                        <div className="mb-4 flex h-[200px] items-center justify-center max-[800px]:h-[160px] max-[575px]:h-[140px]">
                            <img
                                src="/ProductCard_assets/test-product1.jpg"
                                alt="Product"
                                className="max-h-full max-w-full rounded-lg"
                            />
                        </div>

                        {/* PRODUCT NAME */}
                        <div className="mb-1 text-lg font-semibold max-[1000px]:text-base max-[800px]:text-sm max-[575px]:text-sm">
                            Sepatu adidos
                        </div>

                        {/* VERIFIED SELLER */}
                        <div className="flex w-fit flex-row items-center gap-1.5 rounded-full bg-[#7ED751] px-2 py-0.5 text-xs">
                            <img
                                src="/ProductCard_assets/correct.png"
                                alt="check"
                                className="h-[18px] w-[18px]"
                            />
                            <span className="font-medium">
                                Toko Sepatu Thrift Binus
                            </span>
                            - Good Seller
                        </div>

                        {/* PRICE */}
                        <div className="mt-2 mb-2 text-base font-medium max-[1000px]:text-sm max-[575px]:text-xs">
                            Price: Rp16.000
                        </div>

                        {/* BUTTON */}
                        <Link
                            href="/chat"
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-[#F3F2EC] px-2 py-2 text-sm font-medium transition duration-200 ease-in-out hover:scale-[1.02] hover:bg-[#e4e3dd] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] max-[1000px]:px-1 max-[1000px]:py-1 max-[1000px]:text-xs max-[575px]:p-1 max-[575px]:text-xs"
                        >
                            Make Appointment
                            <img
                                src="/ProductCard_assets/chat.png"
                                alt="chat"
                                className="h-5 w-5 max-[1000px]:h-4 max-[1000px]:w-4 max-[575px]:h-4 max-[575px]:w-4"
                            />
                        </Link>
        </div>
    );
}