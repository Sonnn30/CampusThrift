import ProductCard_ProductGrid from './ProductCard_ProductGrid'

export default function SellerProductCard() {
    return (
        <>
            <div className="home-page ml-5">
                <div className="mt-5 grid grid-cols-5 gap-10 max-[1600px]:grid-cols-3 max-[1000px]:grid-cols-2 max-[800px]:grid-cols-2 max-[575px]:grid-cols-1">
                  {/* Copy component ini buat extra */}
                    <ProductCard_ProductGrid />
                    <ProductCard_ProductGrid />
                    <ProductCard_ProductGrid />
                    
                </div>

                
            </div>

            
        </>
    );
}