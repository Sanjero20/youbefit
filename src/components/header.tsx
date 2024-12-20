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

      <nav className="hidden items-center gap-4 sm:flex">
        {routes.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive }) =>
              `${isActive && "bg-neutral-200"} h-full w-20 rounded-lg py-2 text-center`
            }
          >
            {route.name}
          </NavLink>
        ))}
      </nav>

      <div className="dropdown sm:hidden">
        <div tabIndex={0} role="button btn-square" className="btn m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            // class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content right-0 z-[1] w-32 rounded-box bg-base-100 p-2 shadow"
        >
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) =>
                `${isActive && "bg-neutral-200"} h-full rounded-lg py-2 text-center`
              }
            >
              {route.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
