import { productType } from "types/productType";
import StarRating from "./StarRating/StarRating";

interface ProductProps {
  product: productType;
  testId?: string;
}

export default function Product({ product, testId }: ProductProps) {
  return (
    <article
      className="max-w-[800px] w-full bg-white mb-6 shadow-md rounded-s"
      data-testid={testId}
    >
      <div className="relative flex flex-row flex-wrap md:flex-nowrap">
        <div className="w-full md:w-3/5 p-4 flex justify-center max-h-[300px] md:max-h-[500px] w-auto">
          <img
            src={product.image}
            alt="Holiday"
            className="object-scale-down w-full h-full select-none"
            draggable="false"
          ></img>
        </div>
        <div className="w-full md:w-2/5 p-4 flex flex-col">
          <h1 className="text-xl font-semibold text-custom-blue">
            {product.title}
          </h1>
          <p className="text-gray-400">{product.category}</p>
          <StarRating rating={product.rating.rate} />
          <p className="text-sm">{product.description}</p>
          <a
            href="/"
            target="_blank"
            className="bg-custom-violet hover:bg-custom-lightviolet text-center py-2 mt-3"
          >
            <p className="text-xs font-semibold text-white">Add To Basket</p>
            <p className="text-2xl text-gray-700s font-bold text-white">
              £
              {product.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </a>
        </div>
      </div>
    </article>
  );
}
