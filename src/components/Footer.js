import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#F8F3EC] p-[2vw] px-[6vw]">
        <div className="flex gap-[10vw] justify-center items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-[1vw] w-[20vw]">
              <img
                src={require("../assets/img/logo.png")}
                className="w-[10vw]"
              />
              <p className="text-[1vw]">
                Yuqori va sifatli hayvonlar ozuqasi va dorilari
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95901.41990287435!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1665299729902!5m2!1sen!2s"
              style={{ border: 0 }}
              className="w-[25vw] h-[15vw] rounded-[1vw]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-[.6vw]">
            <h1 className="font-bold text-[1.7vw] uppercase">kompaniyamiz</h1>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              Mahsulotlarimiz
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              Biz haqimizda
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              chegirma
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              yangiliklar
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] ">
              F.A.Q
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              Oldin va keyn
            </a>
          </div>

          <div className="flex flex-col gap-[.6vw]">
            <h1 className="font-bold text-[1.7vw] uppercase">ALoqa</h1>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              +998995595353
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              +998946776769
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              info@vetline.uz
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              info@neolit.uz
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] ">
              Toshkent shahar
            </a>
            <a href="#" className="text-[#9F9B97] text-[1.2vw] capitalize">
              Uchtepa tumani 12 uy
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white p-[2vw] justify-center items-center flex gap-[3vw]">
        <p className="text-[1.5vw]">Copyright © Neolit | Designed by</p>
        <p className="text-[1.5vw] text-[#E94A4A]">abba marketing</p>
        <p className="text-[1.5vw]">- Powered by</p>
        <p className="text-[1.5vw] text-[#E94A4A]">ABBA</p>
      </div>
    </>
  );
}

export default Footer;
