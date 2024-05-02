import { productType } from "types/productType";
import Product from "./Product/Product";

interface ProductListProps {
  selectedFilter: string;
  productData: productType[];
}

export default function ProductList({
  selectedFilter,
  productData,
}: ProductListProps) {
  let filteredProducts = productData;

  if (selectedFilter) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedFilter
    );
  }

  return (
    <main className="max-w-[800px] w-full">
      {filteredProducts.map((product, index) => (
        <Product key={index} product={product} testId={`product-${index}`} />
      ))}
    </main>
  );
}
