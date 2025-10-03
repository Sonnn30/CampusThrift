import ProductCatalogNavbar from "./ProductCatalogNavbar";
import ProductCard from "./ProductCard";
import ProductCardNavbar from './ProductCardNavbar';

export default function ProductCatalog() {
  return (
    <div>
      <ProductCatalogNavbar />  
      <div className="home-page">
        <ProductCardNavbar />
        <ProductCard />  
      </div>
      
    </div>
  );
}
