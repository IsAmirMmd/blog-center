import routerPush from "@/util/routerPush";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useState } from "react";

const sortOption = [
  { label: "پر بازدید ترین", id: "most" },
  { label: "محبوب ترین", id: "popular" },
  { label: "جدید ترین", id: "newest" },
];

const SortBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router?.query?.sort || "newest");

  const sortHandler = (id: string) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };

  return (
    <div className="bg-[#ffc14d] px-4 py-2 rounded hidden md:flex items-center gap-x-2 md:col-span-9">
      <AdjustmentsHorizontalIcon className="w-6" />
      <p className="ml-8">مرتب سازی بر اساس</p>
      <ul className="flex items-center gap-x-4">
        {sortOption.map((option) => {
          return (
            <li
              key={option.id}
              onClick={() => sortHandler(option.id)}
              className={`cursor-pointer py-4 block ${
                option.id === sort && "border-b-2 border-b-black font-bold" 
              }`}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortBar;
