const Banner = () => {
  return (
    <div className="pt-40 pb-40" style={{ fontFamily: "Rubik" }}>
      <div className="flex justify-around w-full items-center px-56">
        <div>
          <h1 className="text-6xl font-semibold text-[#1D1E28] leading-normal">
            Want anything to be <br /> easy with{" "}
            <span className="font-extrabold">LaslesVPN.</span>
          </h1>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose">
            Provide a network for all your needs with ease and fun using
            <span className="font-bold"> LaslesVPN</span> <br /> discover
            interesting features from us.
          </p>
          <div className="mt-10">
            <button
              href="/"
              className="font-bold items-center justify-center flex text-white bg-[#F53838] border rounded-lg border-[#F53838] w-[240px] h-[60px] hover:bg-white hover:text-[#F53838] transition duration-300 ease-in-out shadow-lg shadow-[#F53838] hover:shadow-none"
            >
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img
            src="../../../pngs/banner.png"
            alt="banner"
            className="w-[600px] h-[400px]"
          />
        </div>
      </div>
      <div className="mt-36 w-full flex items-center justify-center bg-white">
        <div className="flex justify-center gap-96 items-center shadow-lg w-10/12 p-16 rounded-2xl ">
          <div className="flex justify-center items-center gap-10">
            <img
              src="../../../pngs/user.png"
              className="w-full h-full"
              alt="Product 1"
            />
            <div className="text-3xl text-[#4F5665] ">
              <span className="font-extrabold text-black">90+</span>
              <br />
              Users
            </div>
          </div>
          <div className="bg-[#EEEFF2] w-[2px] h-32 absolute mr-[600px]"></div>
          <div className="flex justify-center items-center gap-10">
            <img
              src="../../../pngs/location.png"
              className="w-full h-full"
              alt="Product 2"
            />
            <div className="text-3xl text-[#4F5665]">
              <span className="font-extrabold text-black">30+</span>
              <br />
              Locations
            </div>
          </div>
          <div className="bg-[#EEEFF2] w-[2px] h-32 absolute ml-[600px]"></div>
          <div className="flex justify-center items-center gap-10">
            <img
              src="../../../pngs/database.png"
              className="w-full h-full"
              alt="Product 3"
            />
            <div className="text-3xl text-[#4F5665]">
              <span className="font-extrabold text-black">50+</span>
              <br />
              Servers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
