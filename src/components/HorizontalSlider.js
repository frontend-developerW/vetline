import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ViewSvg } from "./Svgs";
export default function HorizontalSlider({ lang }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false
  };
  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div key={item} className="px-[1vw]">
          <div className="h-[30vw] w-[20vw] min-w-[20vw] bg-[#F6DABA] hover:bg-[#FF6557] cursor-pointer transition-[1.1s] rounded-[1vw]  flex flex-col items-center  overflow-hidden">
            <img
              src="https://nationaltoday.com/wp-content/uploads/2021/07/Guinea-Pig-Appreciation-Day.jpg"
              alt="img"
              className="w-[15vw] h-[15vw] object-contain relative bottom-[-2vw]"
            />
            <div className="h-[15vw] bg-[#ffffff63] w-full flex flex-col gap-[.4vw] items-center justify-center p-[2vw]">
              <h1 className="font-semibold text-[1.5vw] text-center whitespace-nowrap">
                Tovuqlar uchun korm
              </h1>
              <p className="text-[1vw] text-center whitespace-nowrap">
                5 ta vitaminga ega / foydali
              </p>
              <div className="flex gap-[1vw]">
                <Link to="/product">
                  <button className="border-black border transition-[1.1s] hover:bg-black hover:text-[#fff] px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]">
                    {lang.top["5"]}
                  </button>
                </Link>

                <ViewSvg />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
