import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <main className="grid gap-4 md:grid-cols-12 md:grid-rows-2 bg-gray-50 px-4 py-2 min-h-screen">
      <div className="hidden md:block md:row-span-2 md:col-span-3">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* accordion header */}
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>دسته بندی مقالات</span>
            <ChevronDownIcon
              className={`stroke-yellow-400 w-6 h-6 transition-all ${
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
              <Link href="#">نکست جی‌اس</Link>
            </li>
            <li>
              <Link href="#">نکست جی‌اس</Link>
            </li>
            <li>
              <Link href="#">نکست جی‌اس</Link>
            </li>
            <li>
              <Link href="#">نکست جی‌اس</Link>
            </li>
            <li>
              <Link href="#">نکست جی‌اس</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-400 px-4 py-2 rounded-2xl hidden md:block md:col-span-9">
        مرتب سازی بر اساس
      </div>
      <div className="bg-yellow-400 px-4 py-2 rounded-2xl md:block md:col-span-9 md:row-span-2">
        مقالات
      </div>
    </main>
  );
}
