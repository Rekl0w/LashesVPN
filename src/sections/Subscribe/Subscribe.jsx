const Subscribe = () => {
    return (
      <div
        className="-mt-36 w-full flex items-center justify-center z-50 pb-40"
        style={{ fontFamily: "Rubik" }}
      >
        <div className="flex justify-between bg-white gap-96 items-center shadow-lg w-10/12 p-16 rounded-2xl ">
          <div>
            <h1 className="text-5xl font-bold">
              Subscribe Now for <br /> Get Special Features!{" "}
            </h1>
            <p className="mt-8 text-xl text-[#4F5665]">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <button
            href="/"
            className="font-bold items-center justify-center flex text-white bg-[#F53838] border rounded-lg border-[#F53838] w-[240px] h-[60px] hover:bg-white hover:text-[#F53838] transition duration-300 ease-in-out shadow-lg shadow-[#F53838] hover:shadow-none"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    );
    }

export default Subscribe;