import Link from "next/link";

const Home = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gray-100 flex-col gap-y-2">
      <h1>به بلاگ سنتر خوش آمدید</h1>
      <Link href="/blogs">رفتن به صفحه بلاگ ها</Link>
    </div>
  );
};

export default Home;
