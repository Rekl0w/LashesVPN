const Pricing = () => {
    return (
      <div className="bg-[#FBFBFB] mt-32 pb-24">
        <div className="pt-2 mb-10">
          <h1
            className="text-4xl font-semibold text-[#1D1E28] leading-normal text-center mt-20"
            style={{ fontFamily: "Rubik" }}
          >
            Choose Your Plan
          </h1>
          <p
            className="text-[#4F5665] mt-5 w-full text-lg leading-loose text-center"
            style={{ fontFamily: "Rubik" }}
          >
            Let&apos;s choose the package that is best for you and explore it
            happily and <br /> cheerfully.
          </p>
        </div>
        <div
          className="flex justify-around w-full items-center px-56"
          style={{ fontFamily: "Rubik" }}
        >
          <div className="flex-col gap-5 mt-10 h-[760px] w-[330px] text-center items-center flex border-2 justify-between py-10 rounded-lg">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex-col flex items-center gap-10 mb-6">
                <img src="../../../pngs/free.png" alt="" />
                <h1 className="text-xl font-semibold text-[#1D1E28] leading-normal">
                  Free Plan
                </h1>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] ">Unlimited Bandwitch</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img
                  src="../../../pngs/group-borderless.png"
                  className="ml-2"
                  alt=""
                />
                <span className="text-[#4F5665]">Encrypted Connection</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-12">No Traffic Logs</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-2">
                  Works on All Devices
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <span className="text-3xl font-semibold text-[#1D1E28]">
                Free
              </span>
              <button
                href="/"
                className="font-bold items-center justify-center flex hover:text-white hover:bg-[#F53838] border rounded-full border-[#F53838] w-[160px] h-[50px] bg-white text-[#F53838] transition duration-300 ease-in-out"
              >
                Select
              </button>
            </div>
          </div>

          <div className="flex-col gap-5 mt-10 h-[760px] w-[330px] text-center items-center flex border-2 justify-between py-10 rounded-lg">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex-col flex items-center gap-10 mb-6">
                <img src="../../../pngs/standard.png" alt="" />
                <h1 className="text-xl font-semibold text-[#1D1E28] leading-normal">
                  Standard Plan
                </h1>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] ">Unlimited Bandwitch</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img
                  src="../../../pngs/group-borderless.png"
                  className="ml-2"
                  alt=""
                />
                <span className="text-[#4F5665]">Encrypted Connection</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-[76px]">Traffic Logs</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-3">
                  Works on All Devices
                </span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-5">Connect Anywhere</span>
              </div>
              <div className="flex items-center justify-center gap-5"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <span className="text-3xl font-semibold text-[#1D1E28]">
                $9 <span className="text-[#4F5665] text-lg">/ mo</span>
              </span>

              <button
                href="/"
                className="font-bold items-center justify-center flex hover:text-white hover:bg-[#F53838] border rounded-full border-[#F53838] w-[160px] h-[50px] bg-white text-[#F53838] transition duration-300 ease-in-out"
              >
                Select
              </button>
            </div>
          </div>

          <div className="flex-col gap-5 mt-10 h-[760px] w-[330px] text-center items-center flex border-2 border-[#F53838] justify-between py-10 rounded-lg">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex-col flex items-center gap-10 mb-6">
                <img src="../../../pngs/premium.png" alt="" />
                <h1 className="text-xl font-semibold text-[#1D1E28] leading-normal">
                  Premium Plan
                </h1>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] ">Unlimited Bandwitch</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img
                  src="../../../pngs/group-borderless.png"
                  className="ml-2"
                  alt=""
                />
                <span className="text-[#4F5665]">Encrypted Connection</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-[76px]">Traffic Logs</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-3">
                  Works on All Devices
                </span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-5">Connect Anywhere</span>
              </div>
              <div className="flex items-center gap-5 w-full justify-center">
                <img src="../../../pngs/group-borderless.png" alt="" />
                <span className="text-[#4F5665] mr-8">Get New Features</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <span className="text-3xl font-semibold text-[#1D1E28]">
                $12 <span className="text-[#4F5665] text-lg">/ mo</span>
              </span>

              <button
                href="/"
                className="font-bold items-center justify-center flex text-white bg-[#F53838] border rounded-full border-[#F53838] w-[160px] h-[50px] hover:bg-white hover:text-[#F53838] transition duration-300 ease-in-out shadow-lg shadow-[#F53838] hover:shadow-none"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Pricing;