import React, { useEffect, useState } from "react";
import Slider from "react-slick";
function About() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  const [activeHover, setActiveHover] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false
  };

  return (
    <div>
      <header className="h-screen bg-[#EBEBEB] pt-[8vw] px-[5vw] relative">
        <div className="relative z-[30] w-[50vw] pl-[10vw]">
          <h1 className="text-[2vw] text-[#E94B4B] my-[4vw] uppercase font-bold">
            Vetline Korxonasi
          </h1>
          <p className="text-black mt-[5vw] text-[1.2vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
          <div className="flex gap-[2vw] mt-[2vw]">
            <button className=" px-[3.6vw] py-[.5vw] rounded-[2vw] text-[1vw] relative z-20 bg-[#EA5252] text-[#fff] hover:bg-[#db1616] transition">
              Video
            </button>
            <a href="#contact">
              <button className="border-black border px-[3.6vw] py-[.5vw] rounded-[2vw] text-[1vw] relative z-20 bg-transparent hover:bg-[#000] hover:text-[#fff] transition">
                Aloqa
              </button>
            </a>
          </div>
          <div className="flex items-center mt-[8vw]">
            <img
              src="https://i.giphy.com/media/deKZM8D0orxwQ18qtB/giphy.webp"
              alt=""
              className="w-[4vw] h-[4vw] object-contain invert-[1]"
            />
            <p className="text-[1.2vw]">Ko'proq ma'lumot uchun scroll qiling</p>
          </div>
        </div>
        <img
          src={require("../assets/img/about.png")}
          className="absolute right-0 top-[5vw] h-[40vw]"
          alt=""
        />
      </header>
      <div className="bg-[#EA5252] p-[5vw]">
        <div className="flex gap-[5vw] justify-between w-[60%] m-auto relative z-20">
          <div className="flex flex-col hover-on one">
            <h1
              className="text-[#fff] font-bold text-[3.4vw] "
              onMouseEnter={() => setActiveHover(0)}
            >
              1000
            </h1>
            <p className="text-[1vw] text-[#fff]">Animals types</p>
          </div>
          <div className="flex flex-col hover-on two">
            <h1
              className="text-[#fff] font-bold text-[3.4vw] "
              onMouseEnter={() => setActiveHover(25)}
            >
              95
            </h1>
            <p className="text-[1vw] text-[#fff]">Animals types</p>
          </div>
          <div className="flex flex-col hover-on three">
            <h1
              className="text-[#fff] font-bold text-[3.4vw] "
              onMouseEnter={() => setActiveHover(50)}
            >
              304
            </h1>
            <p className="text-[1vw] text-[#fff]">Animals types</p>
          </div>
          <div className="flex flex-col hover-on four">
            <h1
              className="text-[#fff] font-bold text-[3.4vw] "
              onMouseEnter={() => setActiveHover(75)}
            >
              394
            </h1>
            <p className="text-[1vw] text-[#fff]">Animals types</p>
          </div>
          <div className={`after-bg left-${activeHover}`}></div>
        </div>
        <p className="text-[#fff] text-[1.2vw] w-[60%] m-auto mt-[5vw] relative z-20">
          Biznini vetline bilan 2000 tadan kop tovuqlar davolandam va hozi zor
          yuriwipti mijozlarimiz bizdan mamanu n tovuqqi etiwi boyicha u semiirb
          qoptiBiznini vetline bilan 2000 tadan kop tovuqlar davolandam va hozi
          zor yuriwipti mijozlarimiz bizdan mamanu n tovuqqi etiwi boyicha u
          semiirb qopti
        </p>
      </div>
      <div className="bg-[#E94B4B] py-[5vw]">
        <h1 className="text-[#fff] font-bold text-[2.4vw] text-center">
          Davolanish natijalari
        </h1>
        <div className="py-[4vw] pl-[6vw]">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, i) => (
              <div className="pr-[2vw]" key={i}>
                <div className="relative min-w-[24vw] pr-[2vw] hoverer">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/05/16/19/38/cock-4207970_1280.jpg"
                    alt=""
                    className="w-full h-[30vw] object-cover rounded-t-[2vw]"
                  />
                  <div className="absolute w-full bottom-0 p-[2vw] bg-gradient-to-b from-[#ffffff00] to-[#00000073] opacity-hover">
                    <h2 className="text-[#ffff] text-[1.4vw] font-bold">
                      3 oy “Vetline” yegan
                    </h2>
                    <p className="text-[#ffff] text-[1.4vw]">
                      Самый лучший корм для ваших кошек
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-[#EA5252] p-[5vw]">
        <h1 className="text-[#fff] font-bold text-[2.4vw] text-center">
          Korxonamiz haqida video
        </h1>
        <div className="bg-phone p-[1vw] bg-cover w-[45vw] h-[22vw] m-auto mt-[3vw]">
          <iframe
            src="https://www.youtube.com/embed/ZvWbYsqNUpQ"
            title="Vetline Animal Health Care Products IPEMA 2015"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-[3vw]"
          />
        </div>
        <p className="text-[#fff] text-[1.2vw] mt-[2vw] w-[80%] m-auto ">
          Biznini vetline bilan 2000 tadan kop tovuqlar davolandam va hozi zor
          yuriwipti mijozlarimiz bizdan mamanu n tovuqqi etiwi boyicha u semiirb
          qoptiBiznini vetline bilan 2000 tadan kop tovuqlar davolandam va hozi
          zor yuriwipti mijozlarimiz bizdan mamanu n tovuqqi etiwi boyicha u
          semiirb qopti
        </p>
      </div>
      <div
        className="bg-[#E94B4B] p-[5vw] pl-0 flex items-center gap-[5vw]"
        id="contact"
      >
        <img
          src={require("../assets/img/contactcat.png")}
          className="h-[30vw]"
          alt=""
        />
        <div className="flex flex-col justify-center  bg-[#ffffff] rounded-[2vw] gap-[2vw] p-[2vw] py-[3vw] w-[35vw]">
          <h1 className="text-[2vw] font-bold">Savol va takliflar uchun</h1>
          <input
            type="text"
            placeholder="Ismingiz"
            className="bg-[#F9F9F9] outline-[#E94A4A] rounded-[.4vw] p-[1vw] px-[2vw] text-[1vw]"
          />
          <input
            type="text"
            placeholder="Telefon raqamingiz"
            className="bg-[#F9F9F9] outline-[#E94A4A] rounded-[.4vw] p-[1vw] px-[2vw] text-[1vw]"
          />
          <p className="text-[1vw]">
            shu yerda o’z savolingiz yoki taklifingiz. bo’lmasam otziv
            qoldirishingiz yoki hamkorlik masalasida{" "}
          </p>
          <div className="flex gap-[1vw]">
            <button className="p-[.4vw] px-[1.2vw] bg-[#e94a4a] hover:bg-[#ee1f1f] rounded-[.4vw] text-[1.3vw] text-[#fff] w-full">
              Yuborish
            </button>
            <button className="p-[.4vw] px-[1.2vw] bg-[#F9F9F9] rounded-[.4vw] text-[1.3vw] text-[#000] w-full hover:text-[#fff] hover:bg-[#000] transition">
              Manzilimiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
