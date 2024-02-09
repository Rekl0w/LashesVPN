const Features = () => {
    return (
      <div className="flex justify-center w-full items-center px-56">
        <div>
          <img
            src="../../../public/pngs/feature.png"
            alt="banner"
            className="w-[500px] h-[400px]"
          />
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-[#1D1E28] leading-normal">
            We Provide Many Features You Can Use
          </h1>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <div className="mt-10">
            <ul>
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-10 h-10"
                    />
                    <span className="text-[#4F5665] text-xl">Powerfull online protection.</span>
                </li>
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-10 h-10"
                    />
                    <span className="text-[#4F5665] text-xl">Internet without borders.</span>
                </li>
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-10 h-10"
                    />
                    <span className="text-[#4F5665] text-xl">Supercharged VPN</span>
                </li>
                <li className="flex items-center gap-10">
                    <img
                    src="../../../public/pngs/check.png"
                    alt="check"
                    className="w-10 h-10"
                    />
                    <span className="text-[#4F5665] text-xl">No specific time limits.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    );};

export default Features;