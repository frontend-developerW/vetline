import React, { useEffect, useState } from "react";
import { ViewSvg } from "../components/Svgs";
import { useGlobal } from "../redux/selectors";

function Products() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  const { language } = useGlobal();
  function Card() {
    const [visible, setVisible] = useState(false);
    const [purchase, setPurchase] = useState(false);

    return (
      <>
        {visible && (
          <div className="fixed left-0 top-0 w-full h-screen bg-[#08080841] z-[999] flex justify-center items-center">
            <div className="bg-white p-[2vw] rounded-[1vw] w-[60vw] relative modal-income">
              <button
                className="absolute text-[2vw] right-[2vw] top-[1vw] w-[2vw] h-[2vw] bg-[#E94B4B] text-[#fff] rounded-[3vw] flex items-center justify-center"
                onClick={() => setVisible(false)}
              >
                &times;
              </button>
              <div className="flex">
                <img
                  src={require("../assets/img/product.png")}
                  alt="img"
                  className="w-[25vw] h-[25vw] object-contain bg-[#F3F3F3] p-[2vw] rounded-[1vw]"
                />
                <div className="flex flex-col items-start p-[4vw]">
                  <h1 className="text-[2vw]">Tovuqlar uchun korm</h1>
                  <p className="text-[1vw] font-[500]">
                    5 ta vitaminga ega / foydali
                  </p>
                  <p className="text-[1vw] font-[500] my-[2vw] mb-[4vw]">
                    Biznini vetline bilan 2000 tadan kop tovuqlar davolandam va
                    hozi zor yuriwipti mijozlarimiz bizdan
                  </p>
                  <button className="p-[.4vw] px-[3.2vw] bg-[#E94B4B] hover:bg-[#c51515] transition rounded-[6vw] text-[1.3vw] text-[#fff] font-extralight">
                    {language["send"]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {purchase && (
          <div className="fixed left-0 top-0 w-full h-screen bg-[#08080841] z-[999] flex justify-center items-center">
            <form className="bg-white p-[2vw] rounded-[1vw] w-[40vw] relative modal-income">
              <button
                className="absolute text-[2vw] right-[2vw] top-[1vw] w-[2vw] h-[2vw] bg-[#E94B4B] text-[#fff] rounded-[3vw] flex items-center justify-center"
                onClick={() => setPurchase(false)}
              >
                &times;
              </button>
              <div className="flex flex-col items-start">
                <h1 className="text-[2vw] uppercase mb-[2vw]">
                  {language["form"]}
                </h1>
                <p className="text-[1.4vw] pl-[1vw]">{language["name"]}</p>
                <input
                  type="text"
                  placeholder={language["name"]}
                  className="font-[200] text-[1vw] outline-none w-full mb-[1vw] border-b p-[1vw] focus:border-b-[#0097d3]"
                  required
                />

                <p className="text-[1.4vw] pl-[1vw]">{language["phone"]}</p>
                <input
                  type="number"
                  placeholder={language["phone"]}
                  className="font-[200] text-[1vw] outline-none w-full mb-[1vw] border-b p-[1vw] focus:border-b-[#0097d3]"
                  required
                />

                <p className="text-[1.4vw] pl-[1vw]">
                  {language["typeproduct"]}
                </p>
                <input
                  defaultValue={"Tovuqlar uchun korm"}
                  className="font-[500] text-[1vw] outline-none w-full mb-[1vw] border-b p-[1vw] focus:border-b-[#0097d3]"
                  required
                  disabled
                />
                <div className="flex gap-[1vw]">
                  <button
                    type="submit"
                    className="p-[.4vw] px-[1.2vw] bg-[#E94B4B] hover:bg-[#c51515] transition rounded-[6vw] text-[1vw] text-[#fff] font-extralight"
                  >
                    {language["send"]}
                  </button>
                  <button
                    className="p-[.4vw]  px-[1.2vw] bg-[#ffffff] rounded-[6vw] text-[1vw] text-[#000] border border-[black]"
                    type="button"
                  >
                    {language["writetelegram"]}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        <div className="h-[30vw] w-[20vw] min-w-[20vw] bg-[#F6DABA] hover:bg-[#FF6557] cursor-pointer transition-[1.1s] rounded-[1vw]  flex flex-col items-center  overflow-hidden">
          <img
            src={require("../assets/img/product.png")}
            alt="img"
            className="w-[15vw] h-[15vw] object-contain relative bottom-[-2vw]"
          />
          <div className="h-[15vw] bg-[#ffffff63] w-full flex flex-col gap-[.4vw] items-center p-[2vw] md:pt-[4vw] justify-between">
            <h1 className="font-bold text-[1.5vw] text-center whitespace-nowrap">
              Tovuqlar uchun korm
            </h1>
            <p className="text-[1vw] text-center whitespace-nowrap">
              5 ta vitaminga ega / foydali
            </p>
            <div className="flex gap-[1vw]">
              {/* <Link to="/product"> */}
              <button
                className="border-black border transition-[1.1s] hover:bg-black hover:text-[#fff] px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]"
                onClick={() => setPurchase(true)}
              >
                {language["top"]["5"]}
              </button>
              {/* </Link> */}

              <button onClick={() => setVisible(true)}>
                <ViewSvg />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="p-[7vw] pt-[10vw] bg-[#E94B4B] font-semibold">
      <h1 className="text-[2.3vw] text-[#fff] text-center">{language["1"]}</h1>

      <div className="flex font-normal text-[#fff] my-[2vw]">
        <button className="w-full border-b-[.3vw] transition border-b-[#fff] p-[1vw] opacity-100 hover:opacity-100">
          Tovuqlar uchun
        </button>
        <button className="w-full border-b-[.3vw] transition border-b-[#fff] p-[1vw] opacity-50 hover:opacity-100">
          Sigirlar uchun
        </button>
        <button className="w-full border-b-[.3vw] transition border-b-[#fff] p-[1vw] opacity-50 hover:opacity-100">
          Otla uchun
        </button>
        <button className="w-full border-b-[.3vw] transition border-b-[#fff] p-[1vw] opacity-50 hover:opacity-100">
          Quyonlar uchun
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[1vw]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
