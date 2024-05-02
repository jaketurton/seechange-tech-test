import { useState } from "react";
import categoriesIcon from "../../assets/categories.png";

interface filterProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  categories: string[];
}

export default function Filter({
  selectedFilter,
  setSelectedFilter,
  categories,
}: filterProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryClick = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedFilter(category);
    setIsCategoryOpen(false);
  };

  return (
    <header>
      <div className="flex flex-col w-full md:w-[300px] md:mr-4 shadow-md rounded-sm">
        {categories.length > 0 && (
          <div className="relative z-50">
            <button
              className={`text-base text-left px-3 py-2 w-full relative ${
                selectedFilter === "category"
                  ? "bg-custom-blue text-white"
                  : "bg-white text-custom-blue"
              }`}
              onClick={handleCategoryClick}
              data-testid="sort-category"
            >
              filter{selectedCategory ? "ed" : ""} by{" "}
              <strong>{selectedCategory || "category"}</strong>
              <img
                src={categoriesIcon}
                alt="Categories Icon"
                className="inline-block w-[20px] absolute right-6 top-3"
                aira-role="icon"
              />
            </button>
            {isCategoryOpen && (
              <div className="absolute w-full bg-white shadow-md">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-base text-left px-3 py-2 text-custom-blue hover:bg-gray-100"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <hr className="block border border-gray-300 md:hidden" />
      </div>
    </header>
  );
}
