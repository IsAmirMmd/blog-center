import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 shadow-md z-50 mb-4 shadow-[#ffc14d]">
      <nav className="container lg:max-w-screen-xl flex justify-between mx-auto">
        <div className="flex gap-4">
          <Link href="/signin">ورود</Link>
          <Link href="/signup">ثبت نام</Link>
          <Link href="/profile">پروفایل</Link>
        </div>
        <div>
          <Link href="/blogs">بلاگ ها</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
