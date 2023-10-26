import Layout from "@/container/Layout/Layout";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center items-center bg-gray-100 flex-col gap-y-2">
        <h1>به بلاگ سنتر خوش آمدید</h1>
        <Link href="/blogs">رفتن به صفحه بلاگ ها</Link>
      </div>
    </Layout>
  );
};

export default Home;
