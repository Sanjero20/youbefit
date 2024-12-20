import { NavLink } from "react-router";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/assessment",
    name: "Tools",
  },

  {
    path: "/about",
    name: "About",
  },
];

function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <div className="card-title">
        <img src="/logo.webp" alt="" className="h-12 rounded-full" />
        You be fit
      </div>

      <nav className="flex gap-4">
        {routes.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive }) =>
              `${isActive && "bg-neutral-200"} h-full w-20 rounded py-2 text-center`
            }
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
