export function Navbar() {
  return (
    <div>
      <nav className="h-32 w-screen flex items-center justify-between pl-28 pr-20">
        <h1 className="text-5xl font-light font-CinzelDecorative">Praroop</h1>
        <ul className="flex px-10">
          <li className="px-5 m-0 font-Poppins">
            <button className="bg-slate-600 p-2 w-[100px] h-[40px] text-white rounded-sm">
              LOGIN
            </button>
          </li>
          <li className=" m-0 font-Poppins">
            <button className="bg-slate-600 p-2 w-[100px] h-[40px] text-white rounded-sm">
              SIGN UP
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
