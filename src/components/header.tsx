function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <div className="card-title">
        <img src="/logo.webp" alt="" className="h-12 rounded-full" />
        You be fit
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tools">Tools</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
