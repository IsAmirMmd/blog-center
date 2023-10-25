import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

const SortBar = () => {
  return (
    <div className="bg-[#ffc14d] px-4 py-2 rounded hidden md:flex items-center gap-x-2 md:col-span-9">
      <AdjustmentsHorizontalIcon className="w-6" />
      <p className="ml-8">مرتب سازی بر اساس</p>
      <ul className="flex items-center gap-x-4">
        <li className="cursor-pointer py-4 block border-b-2 border-b-black">
          پر بازدیدترین
        </li>
        <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
        <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
      </ul>
    </div>
  );
};

export default SortBar;
