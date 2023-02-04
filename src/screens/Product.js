import React, { useEffect } from "react";
import HorizontalSlider from "../components/HorizontalSlider";
import { ViewSvg } from "../components/Svgs";

function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <div className=" pt-[5vw] bg-[#E94B4B]">
      <div className="feather"></div>
      <div className="feather2"></div>
      <div className="feather3"></div>
      <div className="grid linear-bg  grid-cols-2 gap-[6vw] px-[17vw] py-[6vw]">
        <div>
          <img
            src={require("../assets/img/product.png")}
            className="w-[70%]"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-[2vw] text-[#fff] font-semibold mb-[1vw]">
              Корм для кошек
            </h1>
            <p className="text-[1.2vw] text-[#fff] leading-[2.2vw] mb-[10vw]">
              Самый лучший корм для ваших кошек 100% натуралный продукт Дайте
              насладиться кормом вашему питомца
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <button className="p-[.4vw] px-[1.5vw] min-w-[11vw] bg-[#ffffff] rounded-[6vw] text-[1.3vw] text-[#000] hover:bg-[#000] hover:text-[#fff] transition">
              Sotib olish 
            </button>
            <button className="p-[.4vw] px-[1.5vw] min-w-[11vw] bg-[#E94B4B] hover:bg-[#e60d0d] rounded-[6vw] text-[1.3vw] text-[#fff]  transition">
              Aloqa
            </button>
          </div>
          <div className="flex items-center mt-[5vw]">
            <img
              src="https://i.giphy.com/media/deKZM8D0orxwQ18qtB/giphy.webp"
              alt=""
              className="w-[4vw] h-[4vw] object-contain invert-[1]"
            />
            <p className="text-[1.2vw]">Ko'proq ma'lumot uchun scroll qiling</p>
          </div>
        </div>
      </div>
      <div className="p-[7vw]">
        <div className="py-[4vw]">
          <h1 className="text-[2vw] text-[#fff] font-bold">
            Davolanish natijalari
          </h1>
          <p className="text-[1.2vw] text-[#fff] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="py-[4vw]">
          <h1 className="text-[2vw] text-[#fff] font-bold mb-[2vw]">
            Davolanish natijalari
          </h1>
          <div className="grid grid-cols-2 gap-[3vw]">
            <div className="relative hoverer">
              <img
                src="https://cdn.pixabay.com/photo/2019/05/16/19/38/cock-4207970_1280.jpg"
                alt=""
                className="w-full h-[30vw] object-cover rounded-t-[2vw]"
              />
              <div className="absolute w-full opacity-hover bottom-0 p-[2vw] bg-gradient-to-b from-[#ffffff00] to-black">
                <h2 className="text-[#ffff] text-[1.4vw] font-bold">
                  3 oy “Vetline” yegan
                </h2>
                <p className="text-[#ffff] text-[1.4vw]">
                  Самый лучший корм для ваших кошек
                </p>
              </div>
            </div>
            <div className="relative hoverer">
              <img
                src="https://cdn.pixabay.com/photo/2019/05/16/19/38/cock-4207970_1280.jpg"
                alt=""
                className="w-full h-[30vw] object-cover rounded-t-[2vw]"
              />
              <div className="absolute w-full opacity-hover bottom-0 p-[2vw] bg-gradient-to-b from-[#ffffff00] to-[#00000073]">
                <h2 className="text-[#ffff] text-[1.4vw] font-bold">
                  3 oy “Vetline” yegan
                </h2>
                <p className="text-[#ffff] text-[1.4vw]">
                  Самый лучший корм для ваших кошек
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[4vw]">
          <HorizontalSlider />
        </div>
      </div>
    </div>
  );
}

export default Product;
