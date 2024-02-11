export default function Topbar() {
  return (
    <div className="bg-white fixed w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <button href="/">
              <img src="../../../pngs/logo.png" alt="" />
            </button>
          </div>
          <div>
            <ul className="flex space-x-8" style={{ fontFamily: "Rubik" }}>
              <li>
                <button href="/" className="text-[#4F5665]">
                  About
                </button>
              </li>
              <li>
                <button href="/" className="text-[#4F5665]">
                  Features
                </button>
              </li>
              <li>
                <button href="/" className="text-[#4F5665]">
                  Pricing
                </button>
              </li>
              <li>
                <button href="/" className="text-[#4F5665]">
                  Testimonals
                </button>
              </li>
              <li>
                <button href="/" className="text-[#4F5665]">
                  Help
                </button>
              </li>
            </ul>
          </div>
          <div>
            <ul
              className="flex gap-10 items-center"
              style={{ fontFamily: "Rubik" }}
            >
              <li>
                <button href="/" className="text-black font-bold">
                  Sign In
                </button>
              </li>
              <li>
                <button
                  href="/"
                  className="font-bold items-center justify-center flex text-[#F53838] border rounded-full border-[#F53838] w-[160px] h-[50px] hover:bg-[#F53838] hover:text-white transition duration-300 ease-in-out"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
