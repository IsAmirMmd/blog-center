import { Categories, Category } from "@components/types";
import Link from "next/link";

const CategoryBar = (categories: Categories) => {
  return (
    <div className="block md:hidden overflow-x-auto">
      <ul className="flex flex-nowrap gap-2">
        <li className="px-3 py-1 border border-slate-200 rounded-2xl whitespace-nowrap">
          <Link href="/blogs">همه مقالات</Link>
        </li>
        {categories.data.map((category: Category) => (
          <li
            key={category?._id}
            className="px-3 py-1 border border-slate-200 rounded-2xl "
          >
            <Link href={`/blogs/${category?.englishTitle}`}>
              {category?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBar;
