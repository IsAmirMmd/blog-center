import { useAuth, useAuthAction } from "@/context/AuthContext";
import Link from "next/link";

const Header = () => {
  const { userInfo } = useAuth();
  const dispatch = useAuthAction();

  return (
    <header className="shadow-md z-50 mb-4 shadow-[#ffc14d] sticky top-0 bg-white">
      <nav className="container p-4 h-16 lg:max-w-screen-xl items-center flex justify-between mx-auto">
        <div className="flex gap-4">
          {!userInfo ? (
            <>
              <Link href="/signin">ورود</Link>
              <Link href="/signup">ثبت نام</Link>
            </>
          ) : (
            <div className="flex items-center gap-x-4">
              <button
                className="rounded px-3 py-1 bg-red-600 text-red-100"
                onClick={() =>
                  dispatch && dispatch({ type: "LOGOUT", payload: {} })
                }
              >
                خروج
              </button>
              <Link href="/profile">پروفایل - {userInfo.name}</Link>
            </div>
          )}
        </div>
        <div>
          <Link href="/blogs">بلاگ ها</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
