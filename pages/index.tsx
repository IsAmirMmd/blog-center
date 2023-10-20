import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
      <div className="hidden md:block md:row-span-2 md:col-span-3 bg-blue-200">
        <div>
          {/* accordion header */}
          <div className="flex justify-between">
            <span>دسته بندی مقالات</span>
            <ChevronDownIcon className="stroke-blue-400 w-6 h-6" />
          </div>

          {/* accordion content */}
          <ul>
            <li>نکست جی‌اس</li>
            <li>نکست جی‌اس</li>
            <li>نکست جی‌اس</li>
            <li>نکست جی‌اس</li>
            <li>نکست جی‌اس</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-200 hidden md:block md:col-span-9">
        مرتب سازی بر اساس
      </div>
      <div className="bg-blue-200 md:block md:col-span-9">مقالات</div>
    </main>
  );
}
