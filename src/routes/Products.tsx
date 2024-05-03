import { useEffect, useState } from "react";
import Filter from "../components/Filter/Filter";
import ProductList from "../components/ProductList/ProductList";
import { productType } from "../types/productType";

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [productData, setProductData] = useState<productType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProductData = () => {
    try {
      // Fetch data from local json server built in Go
      fetch("http://127.0.0.1:8080/data") // https://fakestoreapi.com/products?limit=20
        .then((res) => res.json())
        .then((json) => setProductData(json));
      setLoading(false);
    } catch (error: any) {
      console.error(`Error loading JSON data: ${error.message}`);
    }
  };

  useEffect(() => {
    loadProductData();
    
    if (productData.length > 0) {
      const uniqueCategories = Array.from(
        new Set(productData.map((item) => item.category))
      );
      setCategories(uniqueCategories);
    }
  }, [productData]);

  return (
    <>
      <div className="App h-max">
        <div className="flex flex-col grow md:flex-row justify-between m-auto py-4 md:py-14">
          {!loading && (
            <>
              <Filter
                setSelectedFilter={setSelectedFilter}
                selectedFilter={selectedFilter}
                categories={categories}
              />

              <ProductList
                selectedFilter={selectedFilter}
                productData={productData}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
