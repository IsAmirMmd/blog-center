import { Categories, Category } from "@components/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const CategoryBarDesktop = (categories: Categories) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { query } = useRouter();

  return (
    <div className="hidden md:block md:row-span-2 md:col-span-3">
      <div className="bg-white rounded overflow-hidden">
        {/* accordion header */}
        <div
          className="flex justify-between p-4 cursor-pointer bg-[#ffc14d]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>دسته بندی مقالات</span>
          <ChevronDownIcon
            className={`stroke-black w-6 h-6 transition-all ${
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
          <li className={`${!query.categorySlug && "bg-amber-100 font-bold"}`}>
            <Link href="/blogs">همه مقالات</Link>
          </li>
          {categories.data.map((category: Category) => (
            <li
              key={category?._id}
              className={`${
                category.englishTitle === query.categorySlug &&
                "bg-amber-100 font-bold "
              }`}
            >
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
