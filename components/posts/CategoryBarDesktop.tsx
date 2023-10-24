import { Categories, Category } from "@components/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const CategoryBarDesktop = (categories: Categories) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="hidden md:block md:row-span-2 md:col-span-3">
      <div className="bg-white rounded-2xl overflow-hidden">
        {/* accordion header */}
        <div
          className="flex justify-between p-4 cursor-pointer bg-yellow-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>دسته بندی مقالات</span>
          <ChevronDownIcon
            className={`stroke-yellow-500 w-6 h-6 transition-all ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {/* accordion content */}
        <ul
          className={`transition-all ${
            isOpen ? "block" : "hidden"
          } [&_a]:pr-4 [&_a]:block [&>*]:py-2 [&>*]:transition-all hover:[&>*]:bg-amber-100`}
        >
          <li>
            <Link href="/blogs">همه مقالات</Link>
          </li>
          {categories.data.map((category: Category) => (
            <li key={category?._id}>
              <Link href={`/blogs/${category?.englishTitle}`}>
                {category?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryBarDesktop;
