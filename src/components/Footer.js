import React from "react";

function Footer() {
  return (
    <>
      <div className="md:bg-[#F8F3EC] bg-[#E94A4A] md:p-[2vw] p-[10vw] px-[6vw] relative z-20">
        <div className="flex gap-[10vw] justify-center md:items-center">
          <div className="flex flex-col md:justify-center justify-between">
            <div className="flex items-center gap-[1vw] md:w-[20vw] w-[40vw] md:flex-row flex-col">
              <img
                src={require("../assets/img/logo.png")}
                className="w-[10vw] md:block hidden"
              />
              <img
                src={require("../assets/img/footerlogo.png")}
                className="w-[40vw] md:hidden block"
              />
              <p className="md:text-[1vw] text-[3vw] md:text-[#000] text-[#fff]">
                Yuqori va sifatli hayvonlar ozuqasi va dorilari
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95901.41990287435!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1665299729902!5m2!1sen!2s"
              style={{ border: 0 }}
              className="md:w-[25vw] w-[40vw] md:h-[15vw] h-[40vw] md:rounded-[1vw] rounded-[3vw]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex md:gap-[10vw] gap-[4vw] justify-center md:items-center md:flex-row flex-col">
            <div className="flex flex-col gap-[.6vw]">
              <h1 className="font-bold md:text-[1.7vw] text-[3.7vw] uppercase md:text-black text-[#fff]">
                kompaniyamiz
              </h1>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                Mahsulotlarimiz
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                Biz haqimizda
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                chegirma
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                yangiliklar
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] "
              >
                F.A.Q
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                Oldin va keyn
              </a>
            </div>

            <div className="flex flex-col gap-[.6vw]">
              <h1 className="font-bold md:text-[1.7vw] text-[3.7vw] uppercase md:text-black text-[#fff]">
                ALoqa
              </h1>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                +998995595353
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                +998946776769
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                info@vetline.uz
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                info@neolit.uz
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] "
              >
                Toshkent shahar
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] capitalize"
              >
                Uchtepa tumani 12 uy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-[2vw] justify-center items-center flex gap-[3vw] relative z-20">
        <p className="text-[1.2vw]">Copyright © Neolit | Designed by</p>
        <p className="text-[1.2vw] text-[#E94A4A]">abba marketing</p>
        <p className="text-[1.2vw]">- Powered by</p>
        <p className="text-[1.2vw] text-[#E94A4A]">ABBA</p>
      </div>
    </>
  );
}

export default Footer;
