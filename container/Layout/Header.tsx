import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-2 container lg:max-w-screen-xl mx-auto">
      <div className="flex gap-4">
        <Link href="/signin">ورود</Link>
        <Link href="/signup">ثبت نام</Link>
        <Link href="/profile">پروفایل</Link>
      </div>
      <div>
        <Link href="/blogs">بلاگ ها</Link>
      </div>
    </header>
  );
};

export default Header;
