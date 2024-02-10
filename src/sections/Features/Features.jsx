const Features = () => {
    return (
      <div className="flex justify-around w-full items-center px-56" style={{fontFamily: "Rubik"}}>
        <div>
          <img
            src="../../../public/pngs/feature.png"
            alt="banner"
            className="w-[500px] h-[400px]"
          />
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-[#1D1E28] leading-normal">
            We Provide Many <br /> Features You Can Use
          </h1>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose">
            You can explore the features that we provide with fun <br /> and have their
            own functions each feature.
          </p>
          <div className="mt-10">
            <ul className="flex-col flex gap-4">
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-[24px] h-[24px]"
                    />
                    <span className="text-[#4F5665] text-lg">Powerfull online protection.</span>
                </li>
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-[24px] h-[24px]"
                    />
                    <span className="text-[#4F5665] text-lg">Internet without borders.</span>
                </li>
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-[24px] h-[24px]"
                    />
                    <span className="text-[#4F5665] text-lg">Supercharged VPN</span>
                </li>
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-[24px] h-[24px]"
                    />
                    <span className="text-[#4F5665] text-lg">No specific time limits.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    );};

export default Features;