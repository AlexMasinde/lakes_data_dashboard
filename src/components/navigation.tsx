export default function NavBar() {
  return (
    <nav className="shadow-md py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">AGLA</div>
        <div className="hidden sm:flex space-x-4">
          <a href="#" className="hover:opacity-90">
            Dashboard
          </a>
          <a href="#" className="hover:opacity-90">
            Profile
          </a>
        </div>
        <div className="sm:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 6h20a1 1 0 010 2H2a1 1 0 010-2zm0 5h20a1 1 0 010 2H2a1 1 0 010-2zm0 5h20a1 1 0 010 2H2a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="sm:hidden flex flex-col space-y-2 mt-4">
        <a href="#" className="hover:opacity-90">
          Dashboard
        </a>
        <a href="#" className="hover:opacity-90">
          Profile
        </a>
      </div>
    </nav>
  );
}
