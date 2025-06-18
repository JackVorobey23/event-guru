import { Link, Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="border border-black py-12 px-20 flex flex-col justify-center">
      EventGuru
      <Outlet />
      <div className="flex justify-between flex-1 *:p-4">
        <Link to="./login">Увійти</Link>
        <span className="text-l">|</span>
        <Link to="./signup">Зареєструватися</Link>
      </div>
    </div>
  );
}
