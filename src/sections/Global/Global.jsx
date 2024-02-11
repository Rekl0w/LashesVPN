const Global = () => {
    return (
      <div className="bg-[#FBFBFB] pb-12">
        <div className="pt-2 mb-20">
          <h1
            className="text-4xl font-semibold text-[#1D1E28] leading-normal text-center mt-20"
            style={{ fontFamily: "Rubik" }}
          >
            Huge Global Network <br /> of Fast VPN
          </h1>
          <p
            className="text-[#4F5665] mt-5 w-full text-lg leading-loose text-center"
            style={{ fontFamily: "Rubik" }}
          >
            See <span className="font-bold">LaslesVPN</span> everywhere to make it easier for you when
            you move <br />
            locations.
          </p>
        </div>
        <div className="flex justify-center items-center">
            <img
                src="../../../pngs/map-brands.png"
                alt="map"
                className=" mt-10"
            />
        </div>
      </div>
    );
    }

export default Global;