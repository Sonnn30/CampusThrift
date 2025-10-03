import { Link } from "@inertiajs/react";

export default function ProductCard() {
  return (
    <div className="home-page ml-2 ">
      <div
        className="
          grid 
          grid-cols-5 gap-4 mt-2
          max-[1600px]:grid-cols-3
          max-[1000px]:grid-cols-2
          max-[800px]:grid-cols-2
          max-[575px]:grid-cols-1
        "
      >
        <div
          className="
            flex flex-col gap-4 p-5 
            border border-neutral-200 bg-neutral-100 rounded-2xl
            transition-transform duration-200 ease-in-out shadow-sm
            hover:scale-[1.01] hover:shadow-[0_8px_20px_rgba(255,0,0,0.18)]
            max-[1000px]:p-4 
            max-[575px]:p-3 max-[575px]:gap-2
          "
        >
          {/* IMAGE */}
          <div
            className="
              flex justify-center items-center h-[200px] mb-4
              max-[800px]:h-[160px] max-[575px]:h-[140px]
            "
          >
            <img
              src="/ProductCard_assets/test-product1.jpg"
              alt="Product"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>

          {/* PRODUCT NAME */}
          <div
            className="
              text-lg font-semibold mb-1
              max-[1000px]:text-base
              max-[800px]:text-sm
              max-[575px]:text-sm
            "
          >
            Sepatu adidos
          </div>

          {/* VERIFIED SELLER */}
          <div
            className="
              bg-[#7ED751] flex flex-row items-center 
              rounded-full gap-1.5 text-xs px-2 py-0.5 w-fit
            "
          >
            <img
              src="/ProductCard_assets/correct.png"
              alt="check"
              className="w-[18px] h-[18px]"
            />
            <span className="font-medium">Toko Sepatu Thrift Binus</span> 
            - Good Seller
          </div>

          {/* PRICE */}
          <div
            className="
              mt-2 mb-2 text-base font-medium
              max-[1000px]:text-sm
              max-[575px]:text-xs
            "
          >
            Price: Rp16.000
          </div>

          {/* BUTTON */}
          <Link
            href="/chat"
            className="
              flex gap-2 bg-[#F3F2EC] border border-black
              w-full rounded-xl items-center justify-center
              px-2 py-2 text-sm font-medium
              transition duration-200 ease-in-out
              hover:bg-[#e4e3dd] hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]
              max-[1000px]:text-xs max-[1000px]:px-1 max-[1000px]:py-1
              max-[575px]:text-xs max-[575px]:p-1
            "
          >
            Make Appointment
            <img
              src="/ProductCard_assets/chat.png"
              alt="chat"
              className="w-5 h-5 max-[1000px]:w-4 max-[1000px]:h-4 max-[575px]:w-4 max-[575px]:h-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
