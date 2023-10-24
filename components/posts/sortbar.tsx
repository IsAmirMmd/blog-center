import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

const SortBar = () => {
  return (
    <div className="bg-yellow-100 px-4 py-2 rounded-2xl hidden md:flex items-center gap-x-2 md:col-span-9">
      <AdjustmentsHorizontalIcon className="stroke-yellow-950 w-6" />
      <p className="ml-8">مرتب سازی بر اساس</p>
      <ul className="flex items-center gap-x-4">
        <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
        <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
        <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
      </ul>
    </div>
  );
};

export default SortBar;
