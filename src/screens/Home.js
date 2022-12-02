import React, { useState } from "react";
import Slider from "react-slick";
import {
  BargSvg,
  CloseSvg,
  HeartSvg,
  MedSvg,
  ToBottomArrow,
  ViewSvg,
  ViewWhite
} from "../components/Svgs";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Footer from "../components/Footer";
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  };
  const ref = useRef();
  const { events } = useDraggable(ref);
  const [activeAccardion, setactiveAccardion] = useState(0);
  return (
    <>
      <Slider {...settings}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item}>
            <div className="relative">
              <div className="absolute w-[20vw] h-[6vw] bg-[#F9943B] left-[10%] top-[25%] rounded-[1vw] pr-[3vw]">
                <div className="flex gap-[1.4vw] relative p-[.4vw] items-start">
                  <button className="text-[#fff] text-[2vw] leading-[1.7vw]">
                    &times;
                  </button>
                  <div className="flex flex-col">
                    <h1 className="font-medium text-[#fff] text-[1.2vw] mt-[.5vw]">
                      Mushukcha
                    </h1>
                    <p className="font-medium text-[#fff] text-[.8vw]">
                      Когда ты уже мне купишь Неолит????
                    </p>
                    <img
                      src={require("../assets/img/multicat.png")}
                      className="w-[4vw] absolute top-[-2vw] right-[-1vw]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-[20vw] h-[6vw] bg-[#F9943B] right-[10%] top-[20%] rounded-[1vw]">
                <div className="flex gap-[1.4vw] relative p-[.4vw] items-start pl-[6vw]">
                  <div className="flex flex-col">
                    <h1 className="font-medium text-[#fff] text-[1.2vw] mt-[.5vw]">
                      Mushukcha
                    </h1>
                    <p className="font-medium text-[#fff] text-[.8vw]">
                      Когда ты уже мне купишь Неолит????
                    </p>
                    <img
                      src={require("../assets/img/multicat.png")}
                      className="w-[4vw] absolute top-[-2vw] left-[1vw]"
                      alt=""
                    />
                  </div>
                  <button className="text-[#fff] text-[2vw] leading-[1.7vw]">
                    &times;
                  </button>
                </div>
              </div>
              <img
                src={require("../assets/img/cat.png")}
                className="absolute w-[30vw] left-[35vw] bottom-[23vw]"
                alt=""
              />
              <div className="bg-[#F0D7B3] flex justify-center items-end p-[3vw] h-[60vw]">
                <div className="bg-[#E94A4A] p-[2vw] px-[5vw] w-[80%] items-center rounded-[2vw] flex justify-between">
                  <div className="flex flex-col">
                    <h1 className="font-medium text-[#fff] text-[2vw]">
                      Корм для кошек
                    </h1>
                    <ul className="text-[1.2vw] text-[#fff] list-disc">
                      <li>Самый лучший корм для ваших кошек</li>
                      <li>100% натуралный продукт</li>
                      <li>Дайте насладиться кормом вашему питомца</li>
                    </ul>
                    <div className="flex items-center mt-[2vw] gap-[1vw]">
                      <button className="p-[.7vw] px-[2vw] text-[1.3vw] rounded-[.6vw] text-[#fff] bg-[#ffffff3d] hover:bg-[#ffffff9a]">
                        Покупать сейчас
                      </button>
                      <button className="p-[.7vw] px-[2vw] text-[1.3vw] rounded-[.6vw] text-[#fff] bg-[#ffffff3d] hover:bg-[#ffffff9a]">
                        перейти
                      </button>
                    </div>
                  </div>
                  <img
                    className="w-[14vw]"
                    src={require("../assets/img/banner.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="p-[2vw] pt-[8vw] bg-[#C5B092]">
        <div className="p-[2vw] bg-[#F9F2EB] rounded-[1vw] pb-[16vw] relative">
          <div className="flex justify-between overflow-hidden rounded-t-[1vw]">
            <div className="w-[32.8%] relative bg-[url('https://nationaltoday.com/wp-content/uploads/2021/07/Guinea-Pig-Appreciation-Day.jpg')] h-[40vw] bg-cover p-[4vw] flex items-end card cursor-pointer">
              <div className="w-full bg-[#00000065] h-full absolute top-0 left-0 to-top transition-[.3s]"></div>
              <p className="text-[#fff] text-[2vw] text-center">
                Корм для животных
              </p>
            </div>
            <div className="w-[32.8%] bg-[url('https://702967.smushcdn.com/1195915/wp-content/uploads/2021/05/woodrow-rearing-square.jpg?lossy=1&strip=1&webp=1')] relative h-[40vw] bg-cover p-[4vw] flex items-end card cursor-pointer">
              <div className="w-full bg-[#00000065] h-full absolute top-0 left-0 to-top transition-[.3s]"></div>
              <p className="text-[#fff] text-[2vw] text-center">
                Корм для животных
              </p>
            </div>
            <div className="w-[32.8%] bg-[url('https://i.insider.com/5c20d8ee01c0ea245970caa3?width=1000&format=jpeg&auto=webp')] relative h-[40vw] bg-cover p-[4vw] flex items-end card cursor-pointer">
              <div className="w-full bg-[#00000065]  h-full absolute top-0 left-0 to-top transition-[.3s]"></div>
              <p className="text-[#fff] text-[2vw] text-center">
                Корм для животных
              </p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[3vw] color-[#000] my-[4vw] font-extrabold uppercase">
              Top tovarlarimiz
            </h1>
          </div>
          <div {...events} ref={ref} className="overflow-auto dragger-scroll">
            <div className="flex gap-[1vw]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div
                  key={item}
                  className="h-[30vw] w-[20vw] min-w-[20vw] bg-[#F6DABA] rounded-[1vw]  flex flex-col items-center  overflow-hidden"
                >
                  <img
                    src="https://nationaltoday.com/wp-content/uploads/2021/07/Guinea-Pig-Appreciation-Day.jpg"
                    alt="img"
                    className="w-[15vw] h-[15vw] object-contain relative bottom-[-2vw]"
                  />
                  <div className="h-[15vw] bg-[#FFEED6] w-full flex flex-col gap-[.4vw] items-center justify-center p-[2vw]">
                    <h1 className="font-bold text-[1.5vw] text-center whitespace-nowrap">
                      Tovuqlar uchun korm
                    </h1>
                    <p className="text-[1vw] text-center whitespace-nowrap">
                      5 ta vitaminga ega / foydali
                    </p>
                    <div className="flex gap-[1vw]">
                      <button className="border-black border px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]">
                        Sotib olish
                      </button>
                      <button className="border-black border px-[.5vw] py-[.5vw] rounded-[2vw] text-[1vw]">
                        <ViewSvg />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#FFE7C3] p-[3vw] rounded-[1vw] px-[6vw]">
            <div className="flex justify-between items-center">
              <div className="w-[60%]">
                <h1 className="text-[2vw] font-bold">
                  Ветеринарическая компания “Vetline”
                </h1>
                <p className="text-[1.2vw] font-medium">
                  Ветеринарическая компания “Vetline” предоставляет вам новых и
                  качественных ассортиментов в продукции ветеринарии и не
                  только. В сфере Кормах и витаминах тоже является лидером в
                  этом отраслей. Компания Vetline было производено в 2012 года.
                  Ветеринарическая компания “Vetline” предоставляет вам новых и
                  качественных ассортиментов в продукции ветеринарии и не
                  только. В сфере Кормах и витаминах тоже является лидером в
                  этом отраслей. Компания Vetline было производено в 2012 года.
                </p>
                <div className="flex mt-[4vw] gap-[2vw]">
                  <button className="border-black border px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]">
                    Перейти
                  </button>
                  <button className="border-black border px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]">
                    Связываться
                  </button>
                </div>
              </div>
              <iframe
                className="w-[35%] h-[17vw]  rounded-[2vw] relative z-30"
                src="https://www.youtube.com/embed/ZvWbYsqNUpQ"
                title="Vetline Animal Health Care Products IPEMA 2015"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <img
            src={require("../assets/img/hen.png")}
            alt=""
            className="absolute bottom-0 right-0 w-[44vw]"
          />
        </div>
        <div className="flex flex-col my-[4vw] items-start">
          <div className="flex justify-between w-full pr-[2vw] items-end">
            <h1 className="text-[2vw] relative pb-[1vw] bottom-[-1vw] z-[40] font-bold text-[#E94A4A] bg-[#F8F3EC] pt-[1vw] px-[2vw] rounded-t-[1vw]">
              Feedback
            </h1>
            <div className="flex gap-[3vw] relative">
              <button className="uppercase py-[.4vw] rounded-t-[1vw] px-[3vw] pb-[1.4vw] relative bottom-[-1vw] bg-[#F8F3EC] font-semibold">
                Xo'roz
              </button>
              <button className="uppercase py-[.4vw] rounded-t-[1vw] px-[3vw] pb-[1.4vw] relative bottom-[-1vw] bg-[#F8F3EC] font-semibold">
                Ho'kiz
              </button>
              <button className="uppercase py-[.4vw] rounded-t-[1vw] px-[3vw] pb-[1.4vw] relative bottom-[-1vw] bg-[#F8F3EC] font-semibold">
                Ot
              </button>
            </div>
          </div>
          <div className="w-full relative z-[30] shadow-[0px_0px_10px_rgba(0,0,0,0.7)] bg-[#F8F3EC] p-[2vw] rounded-[1vw] rounded-tl-[0vw]">
            <div className="relative">
              <div className="absolute text-[#fff] font-medium text-[1.6vw] rounded-[1vw] bg-[#E94A4A] p-[2vw] px-[3vw] z-40 w-[80%] flex justify-center left-[10%] bottom-[3vw]">
                <div className="flex gap-[1vw] items-center w-[35%]">
                  <h1>Животные ДО пробы Неолита</h1>
                  <button className="p-[.4vw] rounded-[5vw] border border-white">
                    <ViewWhite />
                  </button>
                </div>
                <button className="mx-[4vw] border-white border"></button>
                <div className="flex gap-[1vw] items-center w-[35%]">
                  <h1>Животные ДО пробы Неолита</h1>
                  <button className="p-[.4vw] rounded-[5vw] border border-white">
                    <ViewWhite />
                  </button>
                </div>
              </div>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="https://www.equilac.com/wp-content/uploads/2022/03/horse-milk-1.jpg"
                    className="w-full h-[50vw] object-cover rounded-[1vw] overflow-hidden"
                    alt=""
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg"
                    className="w-full h-[50vw] object-cover rounded-[1vw] overflow-hidden"
                    alt=""
                  />
                }
              />
            </div>
            <div className="bg-white w-full mt-[2vw] rounded-[1vw] p-[2vw] px-[4vw]">
              <h1 className="font-bold text-[2vw] uppercase mb-[2vw]">
                Neovit otlar uchun maxsus
              </h1>
              <div className="flex item-center gap-[4vw]">
                <div className="grid gap-[3vw] grid-cols-2 gap-x-[6vw]">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-[2vw]">
                      <h1 className="font-bold text-[1.6vw]">
                        Животные ДО пробы Неолита
                      </h1>
                      <button className="bg-[#E94A4A] w-[45%] p-[.4vw] rounded-[.6vw] text-[#fff] font-bold text-[2vw]">
                        80 kg
                      </button>
                    </div>
                  ))}
                </div>
                <img src={require('../assets/img/banner.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F2EB] rounded-[1vw] mt-[2vw] p-[2vw]">
          <div className="p-[4vw] justify-between bg-[#FFE7C3] rounded-[1vw] flex">
            <div className="flex flex-col items-center w-[20%] text-center gap-[2vw]">
              <BargSvg />
              <h1 className="text-[#E94A4A] text-[1.7vw] font-bold">
                Mahsulotlarimiz 100% organic{" "}
              </h1>
            </div>
            <div className="flex flex-col items-center w-[20%] text-center gap-[2vw]">
              <MedSvg />
              <h1 className="text-[#E94A4A] text-[1.7vw] font-bold">
                Vitaminlarga boy
              </h1>
            </div>
            <div className="flex flex-col items-center w-[20%] text-center gap-[2vw]">
              <HeartSvg />
              <h1 className="text-[#E94A4A] text-[1.7vw] font-bold">
                Sog’lomlikni ta’minlaydi
              </h1>
            </div>
          </div>
          <div className="flex p-[3vw] justify-center gap-[4vw] ">
            <button className="border-black border px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]">
              Bizning mahsulotlarimiz
            </button>
            <div className="relative">
              <button className="border-black border px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw] relative z-20 bg-[#F8F3EC]">
                Bog`lanish
              </button>
              <img
                src={require("../assets/img/dog.png")}
                className="absolute  bottom-0 w-[9vw]"
                alt=""
              />
            </div>
          </div>
          <div className="p-[4vw] justify-between bg-[#FFE7C3] rounded-[1vw] flex flex-col gap-[2vw]">
            {[0, 1, 2, 3, 4, 5, 6].map((item, i) => (
              <div
                key={i}
                className=" rounded-[1vw] bg-[#fffcf87e] overflow-hidden"
              >
                <div
                  onClick={() => setactiveAccardion(i)}
                  className={`flex p-[1vw] px-[3vw] justify-between items-center ${
                    activeAccardion === i ? "bg-[#fff]" : "bg-[#fffcf87e]"
                  }  rounded-[1vw] cursor-pointer`}
                >
                  <h1 className="text-[1.4vw] font-bold">
                    Qo’ylarga Niolitdan kuniga nechi mahal berish kerak?
                  </h1>

                  {activeAccardion === i ? <CloseSvg /> : <ToBottomArrow />}
                </div>
                {activeAccardion === i && (
                  <p className="text-[1.2vw] p-[2vw] px-[4vw]">
                    5 mahal berish kerak Новости и полезьные блоги Неолите 5
                    mahal berish kerak Новости и полезьные блоги Неолите
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-[3vw] px-[6vw] bg-[#F8F3EC] mt-[3vw] rounded-[1vw]">
          <div className="grid grid-cols-2 gap-[4vw]">
            <div className="grid gap-[2vw]">
              <h1 className="text-[2vw] font-bold">Savol va takliflar uchun</h1>
              <p className="text-[1.3vw]">
                Barcha savol taklif mulohaza va firklaringizni yozib qoldiring.
                Va biz sizga albatta javob beramiz. Hamkorlik masalalari sotib
                olish qo’shimcha savollar yoki boshqa shunga o’xshash
                fikrlaringiz bo’lsa bizga tortinmay murojaat qilavering. 24/7
                biz sizni eshitishga tayyormiz.
              </p>
              <img
                src={require("../assets/img/question.png")}
                className="w-full"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center  bg-[#FDEAD0] rounded-[2vw] gap-[2vw] p-[2vw] py-[4vw]">
              <h1 className="text-[2vw] font-bold">Savol va takliflar uchun</h1>
              <input
                type="text"
                placeholder="Ismingiz"
                className="bg-[#fff] outline-[#E94A4A] rounded-[.4vw] p-[1vw] px-[2vw] text-[1vw]"
              />
              <input
                type="text"
                placeholder="Telefon raqamingiz"
                className="bg-[#fff] outline-[#E94A4A] rounded-[.4vw] p-[1vw] px-[2vw] text-[1vw]"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Fikringiz"
                className="bg-[#fff] outline-[#E94A4A] rounded-[.4vw] p-[1vw] px-[2vw] text-[1vw]"
              ></textarea>
              <div className="flex gap-[1vw]">
                <button className="p-[.4vw] px-[1.2vw] bg-[#e94a4a] rounded-[.4vw] text-[1.6vw] text-[#fff] w-full">
                  Yuborish
                </button>
                <button className="p-[.4vw] px-[1.2vw] bg-[#ffffff] rounded-[.4vw] text-[1.6vw] text-[#000] w-full">
                  Manzilimiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
