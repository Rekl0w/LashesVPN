import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const Reviews = () => {
  const [hoverR, setHoverR] = useState(true);
  const [hoverL, setHoverL] = useState(true);
  const [activeBullet, setActiveBullet] = useState(0);
  const glideRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      focusAt: "center",
      gap: 40,
      autoplay: 2000,
      peek: {
        before: 250,
        after: 250,
      },
    });
    glideRef.current = glide;
    glide.mount();

    glide.on("run.after", () => {
      setActiveBullet(glide.index);
    });

    return () => {
      glide.destroy();
    };
  }, []);

  const handleBulletClick = (index) => {
    setActiveBullet(index);
    glideRef.current.go(`=${index}`);
  };

  const userReviews = [
    {
      id: 0,
      avatar: "../../../public/pngs/person1.png",
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      comment:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      id: 1,
      avatar: "../../../public/pngs/person2.png",
      name: "Yessica Christy",
      location: "Shanxi, China",
      comment:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      id: 2,
      avatar: "../../../public/pngs/person3.png",
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      comment:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
  ];

  return (
    <div
      className="glide relative overflow-visible w-full bg-[#FBFBFB] pb-48"
      style={{ fontFamily: "Rubik" }}
    >
      <div className="flex lg:mb-8 mb-16 justify-center items-center w-full">
        <div className="pt-2 mb-10">
          <h1
            className="text-4xl font-semibold text-[#1D1E28] leading-normal text-center mt-20"
            style={{ fontFamily: "Rubik" }}
          >
            Trusted by Thousands of
            <br /> Happy Customer
          </h1>
          <p
            className="text-[#4F5665] mt-5 w-full text-lg leading-loose text-center"
            style={{ fontFamily: "Rubik" }}
          >
            These are the stories of our customers who have joined us with great{" "}
            <br />
            pleasure when using this crazy feature.
          </p>
        </div>
      </div>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides ">
          {userReviews.map((review) => (
            <li
              key={review.id}
              className={`glide__slide mb-16 ${
                review.id === activeBullet
                  ? "border-[#F53838] border-2 rounded-xl"
                  : "border-2 rounded-xl"
              }`}
            >
              <div className="max-w-md h-64 mx-auto overflow-hidden flex-col flex p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={review.avatar}
                    alt={`Avatar of ${review.name}`}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-800">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="flex ml-28">
                    <img
                      src="../../../public/pngs/star.png"
                      alt="star"
                      className="w-[24px] h-[24px]"
                    />
                    <span>4.5</span>
                  </div>
                </div>
                <blockquote className="mt-4 lg:mb-4 -mb-4 ">
                  <p className="lg:text-lg text-lg">{review.comment}</p>
                </blockquote>
                <div className="p-8 mt-6"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="glide__bullets ml-48 flex"
          data-glide-el="controls[nav]"
        >
          {Array.from({ length: 3 }, (_, index) => (
            <button
              key={index}
              className={`glide__bullet mx-2  h-[24px] ${
                index === activeBullet
                  ? "bg-[#F53838] w-[64px]"
                  : "bg-[#DDE1E5]"
              } w-[24px] h-[24px] rounded-full`}
              data-glide-dir={`=${index}`}
              onClick={() => handleBulletClick(index)}
            ></button>
          ))}
        </div>
        <div
          className="glide__arrows w-full flex justify-end items-center lg:px-36 gap-5"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--left border-2 border-[#F53838] hover:bg-[#F53838] rounded-full p-6"
            data-glide-dir="<"
            onMouseEnter={() => setHoverL(false)}
            onMouseLeave={() => setHoverL(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={hoverL ? "red" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="glide__arrow glide__arrow--right border-2 border-[#F53838] hover:bg-[#F53838] rounded-full p-6"
            data-glide-dir=">"
            onMouseEnter={() => setHoverR(false)}
            onMouseLeave={() => setHoverR(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={hoverR ? "red" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <path d="M5 12H19M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
