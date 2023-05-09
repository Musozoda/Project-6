import { Button } from "@mui/material";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import b12 from "./image/B 1 2.png";
import vector from "./image/vector.png";
import mappa1 from "./image/mappa_01 1.png";
import rectangle14 from "./image/rectangle 14.png";
import rectangle23 from "./image/rectangle 23.png";
import rectangle24 from "./image/rectangle 24.png";
import rectangle27 from "./image/rectangle 27.png";
import rectangle26 from "./image/rectangle 26.png";
import rectangle31 from "./image/rectangle 31.png";
import rectangle29 from "./image/rectangle 29.png";
import rectangle22 from "./image/rectangle 22.png";
import polygon8 from "./image/polygon 8.png";
import lineblue from "./image/line-blue.png";
import img from "./image/Комплекс_выставка.png";
import img3 from "./image/Комплекс выставка 3.png";
import for_vak from "./image/for_vak.png";
import for_vak_2 from "./image/for_vak_6 1.png";
import img4 from "./image/Комплексдля_переработки.png";
import img5 from "./image/Комплексдля_переработки_пэт3.png";
import klipartz1 from "./image/klipartz 1.png";

// Material UI
import EmailIcon from "@mui/icons-material/Email";
import DisableElevation from "./components/Button/Button";
import RoomIcon from "@mui/icons-material/Room";
import { useEffect, useState } from "react";
import Swiper from "./components/Swiper/Swiper";
import Swissssper from "./components/Swiper/Swiper";
import Navbar from "./components/Navbar/Navbar";
import TemporaryDrawer from "./components/Navbar/Navbar";
import { useTranslation } from "react-i18next";

// Material UI

function App() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] =useState("en")
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  // const [lng, setLng] =useState("en")

  const lang = (event) =>{
    const {value} = event.target
    changeLanguage(value)
    setLng(value)
  }

  return (
    <div className="w-max mx-auto">
      <header className="container1 ">
        <div className="container11 pt-[40px] relative">
          <nav className="flex items-center justify-between lg:px-[25px]">
            <img src={b12} data-aos="zoom-out-down" alt="" />

            <ul className="font-[400] lg:hidden  text-[18px] flex items-center gap-[10px] text-[#545454] uppercase leading-[20px]">
              <li>{t("text1")}</li>
              <li>US EQUIPMENT </li>
              <li>materials</li>
              <li>DELIVERY</li>
              <li>dealers</li>
              <li>CONTACTS </li>
            </ul>
            <div className="flex lg:hidden gap-[6px]">
              <EmailIcon />
              <p className="text-[#545454]">line@p-z-o.com</p>
            </div>
            <div className="hidden lg:block">
              <TemporaryDrawer />
            </div>
          </nav>
          <div className="mt-[192px] mb-[241px] max-w-[484px] xl:mx-auto flex flex-col gap-[42px] items-start xl:items-center">
            <div className="flex flex-col gap-[16px]">
              <h1 className=" xl:text-center font-[500] text-[36px] text-[#545454] leading-[42px]">
                Start a profitable recycling business polymers with a payback
                period of 1 year
              </h1>

              <p className=" xl:text-center font-[300] text-[24px] text-[#545454] leading-[26px]">
                Anim ipsum esse qui nostrud. Sint velit fugiat occaecat est
                aliquip laboris amet qui amet nostrud. Sit minim reprehenderit
                officia eu Lorem. Dolor labore incididunt velit aliqua cupidatat
                Lorem et nisi voluptate officia reprehenderit. Enim est velit
                consequat aute pariatur nulla.{" "}
              </p>
            </div>

            <DisableElevation text="find out the cost" />
          </div>
          <img
            src={lineblue}
            className="absolute right-[-13%] xl:hidden top-0"
            alt=""
          />
          <img
            src={img}
            className="absolute xl:hidden right-[-10%] top-[27%]"
            alt=""
          />
          <div className="flex gap-[5px]">
            <RoomIcon className="text-[#437C9A]" />
            <p>Russia, Moscow region, Podolsk, st. Pleshcheevskaya, 34</p>
          </div>
        </div>
      </header>

      <section className="container1 mx-auto">
        <div className="container11 pt-[107px] pb-[145px]">
          <div className="flex flex-col gap-[42px]">
            <h1
              className="flex xl:justify-center justify-end font-[500] text-[36px] leading-[42px]"
              data-aos="fade-left"
            >
              ABOUT
            </h1>

            <div className="flex justify-between xl:flex-wrap xl:justify-center gap-y-[40px]">
              <div className="relative xl:flex xl:flex-wrap xl:gap-[40px] xl:justify-center">
                <img src={for_vak} data-aos="fade-left" alt="" />
                <img
                  src={for_vak_2}
                  className=" absolute top-[-15%] left-[10%] xl:static"
                  alt=""
                  data-aos="fade-right"
                />
              </div>

              <p
                className="max-w-[604px] font-[300] text-[16px] text-[#333333] mt-[20px] leading-[18px]"
                data-aos="fade-left"
              >
                Commodo ullamco cillum elit laborum nulla elit fugiat sit duis
                qui consectetur minim. Deserunt ut exercitation aute duis ea
                deserunt nisi nisi laboris tempor culpa. Laborum in id anim id
                do eiusmod magna adipisicing duis quis fugiat. Commodo et magna
                labore excepteur adipisicing aliquip occaecat culpa deserunt
                labore non consectetur. Ea deserunt elit sint ex eu. Aute
                eiusmod reprehenderit mollit veniam ea cillum. Voluptate nisi
                sunt sint ullamco cillum ipsum sit fugiat aute id minim minim.
                Deserunt excepteur laboris ea irure nostrud Lorem nulla deserunt
                ullamco consequat. Elit ipsum est quis minim excepteur id in
                enim in aliqua reprehenderit deserunt sint anim. Excepteur sunt
                nisi eiusmod enim incididunt ipsum aliquip ut et Lorem ipsum
                quis pariatur adipisicing.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-[122px] xl:static xl:justify-center my-[25px] relative top-[-40px]">
            <div
              data-aos="fade-down-left"
              className="flex flex-col  w-max justify-center"
            >
              <h1 className="text-center">Et cillum</h1>
              <div className="p-[31px_22px] border-[5px] border-[solid] border-[#437C9A] font-[300] text-[36px] text-[#437C9A]">
                157
              </div>
            </div>

            <div
              data-aos="fade-down-left"
              className="flex flex-col  w-max justify-center"
            >
              <h1 className="text-center">Et cillum</h1>
              <div className="p-[31px_22px] border-[5px] border-[solid] border-[#437C9A] font-[300] text-[36px] text-[#437C9A]">
                80%
              </div>
            </div>

            <div
              data-aos="fade-down-left"
              className="flex flex-col  w-max justify-center"
            >
              <h1 className="text-center">Et cillum</h1>
              <div className="p-[31px_22px] border-[5px] border-[solid] border-[#437C9A] font-[300] text-[36px] text-[#437C9A]">
                323
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1 mx-auto ">
        <div className="container11 flex flex-col gap-[59px] p-[150px_0_43px_0]">
          <h1 className="font-[500] xl:text-center text-[36px] text-[] uppercase">
            advantages
          </h1>
          <div className="xl:mx-[75px] xl:h-max flex h-[757px] relative items-center xl:flex-wrap xl:gap-y-[50px] justify-between ">
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              src={img3}
              className="xl:block xl:m-[0_auto_0_auto] mb-[50px]"
              alt=""
            />
            <div className=" flex flex-col gap-[49px] mx-auto">
              <div className="ml-[150px] xl:m-0  flex flex-col gap-[44px]">
                <div data-aos="fade-left" className="flex gap-[23px] ml-[]">
                  <div className=" relative w-max">
                    <img src={polygon8} alt="" />
                    <img
                      src={vector}
                      className=" absolute top-[36%] left-[25%]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h1 className="uppercase">reliability over 10 years</h1>
                    <p className="max-w-[305px] font-[300] text-[12px] text-[gray] leading-[13px]">
                      Quis reprehenderit fugiat voluptate excepteur dolor
                      incididunt velit consectetur nisi esse eu nostrud. Sint ut
                      in adipisicing culpa tempor mollit. Qui ad elit ullamco
                      eiusmod amet nisi veniam reprehenderit culpa non proident
                      incididunt adipisicing ut.
                    </p>
                  </div>
                </div>
                <div className="ml-[100px] flex flex-col gap-[62px]">
                  <div data-aos="fade-left" className="flex gap-[23px] ml-[]">
                    <div className=" relative w-max">
                      <img src={polygon8} alt="" />
                      <img
                        src={vector}
                        className=" absolute top-[36%] left-[25%]"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <h1 className="uppercase">reliability over 10 years</h1>
                      <p className="max-w-[305px] font-[300] text-[12px] text-[gray] leading-[13px]">
                        Quis reprehenderit fugiat voluptate excepteur dolor
                        incididunt velit consectetur nisi esse eu nostrud. Sint
                        ut in adipisicing culpa tempor mollit. Qui ad elit
                        ullamco eiusmod amet nisi veniam reprehenderit culpa non
                        proident incididunt adipisicing ut.
                      </p>
                    </div>
                  </div>

                  <div data-aos="fade-left" className="flex gap-[23px] ml-[]">
                    <div className=" relative w-max">
                      <img src={polygon8} alt="" />
                      <img
                        src={vector}
                        className=" absolute top-[36%] left-[25%]"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <h1 className="uppercase">reliability over 10 years</h1>
                      <p className="max-w-[305px] font-[300] text-[12px] text-[gray] leading-[13px]">
                        Quis reprehenderit fugiat voluptate excepteur dolor
                        incididunt velit consectetur nisi esse eu nostrud. Sint
                        ut in adipisicing culpa tempor mollit. Qui ad elit
                        ullamco eiusmod amet nisi veniam reprehenderit culpa non
                        proident incididunt adipisicing ut.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="flex gap-[23px]">
                <div className=" relative w-max">
                  <img src={polygon8} alt="" />
                  <img
                    src={vector}
                    className=" absolute top-[36%] left-[25%]"
                    alt=""
                  />
                </div>
                <div className=" flex flex-col gap-[12px]">
                  <h1 className="uppercase">reliability over 10 years</h1>
                  <p className="max-w-[305px] font-[300] text-[12px] text-[gray] leading-[13px]">
                    Quis reprehenderit fugiat voluptate excepteur dolor
                    incididunt velit consectetur nisi esse eu nostrud. Sint ut
                    in adipisicing culpa tempor mollit. Qui ad elit ullamco
                    eiusmod amet nisi veniam reprehenderit culpa non proident
                    incididunt adipisicing ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1 mx-auto">
        <div className="container11 flex flex-col gap-[153px]">
          <h1
            data-aos="fade-right"
            className="font-[500] xl:text-center text-[36px] text-right uppercase xl:mt-[120px]"
          >
            characteristics
          </h1>
          <div className="relative">
            <p
              data-aos="fade-left"
              className="max-w-[200px] text-[gray] absolute right-[150px] top-[-50px]"
            >
              Capacity 800.0 kg/h Installed capacity 126.1 kW Practical capacity
              88.27 kW The line includes 10 units
            </p>
            <img data-aos="zoom-out" src={img4} alt="" />
          </div>
        </div>
      </section>

      <section className="container1 mx-auto">
        <div className="container11 flex flex-col gap-[111px] mb-[224px]">
          <h1
            className="font-[500] xl:text-center text-[36px] uppercase"
            data-aos="fade-left"
          >
            materials
          </h1>
          <div className=" flex justify-between xl:flex-wrap xl:justify-center xl:gap-y-[50px]">
            <div className="flex flex-col gap-[64px]">
              <div className="max-w-[320px]">
                <h1
                  data-aos="fade-down"
                  className="font-[400] text-[24px] text-[#437C9A] text-center "
                >
                  Plastic
                </h1>

                <p
                  data-aos="fade-up"
                  className="font-[300] leading-[13px] text-[12px] text-[] text-center"
                >
                  Quis reprehenderit fugiat voluptate excepteur dolor incididunt
                  velit consectetur nisi esse eu nostrud. Sint ut in adipisicing
                  culpa tempor mollit. Qui ad elit ullamco eiusmod amet nisi
                  veniam reprehenderit culpa non proident incididunt adipisicing
                  ut.
                </p>
              </div>

              <div className="max-w-[320px]">
                <h1
                  data-aos="fade-down"
                  className="font-[400] text-[24px] text-[#437C9A] text-center "
                >
                  Plastic
                </h1>

                <p
                  data-aos="fade-up"
                  className="font-[300] leading-[13px] text-[12px] text-[] text-center"
                >
                  Quis reprehenderit fugiat voluptate excepteur dolor incididunt
                  velit consectetur nisi esse eu nostrud. Sint ut in adipisicing
                  culpa tempor mollit. Qui ad elit ullamco eiusmod amet nisi
                  veniam reprehenderit culpa non proident incididunt adipisicing
                  ut.
                </p>
              </div>

              <div className="max-w-[320px]">
                <h1
                  data-aos="fade-down"
                  className="font-[400] text-[24px] text-[#437C9A] text-center "
                >
                  Plastic
                </h1>

                <p
                  data-aos="fade-up"
                  className="font-[300] leading-[13px] text-[12px] text-[] text-center"
                >
                  Quis reprehenderit fugiat voluptate excepteur dolor incididunt
                  velit consectetur nisi esse eu nostrud. Sint ut in adipisicing
                  culpa tempor mollit. Qui ad elit ullamco eiusmod amet nisi
                  veniam reprehenderit culpa non proident incididunt adipisicing
                  ut.
                </p>
              </div>
            </div>
            <div className="pb-[70px] xl:w-[100%]" data-aos="fade-left">
              <Swissssper img={rectangle14} />
            </div>
          </div>
        </div>
      </section>

      <section className="container1 mx-auto">
        <div className="container11 flex flex-col gap-[153px] ">
          <h1
            data-aos="fade-right"
            className="font-[500] xl:text-center text-[36px] text-right uppercase"
          >
            life cycle of raw materials
          </h1>
          <div className="relative">
            <img data-aos="zoom-out" src={klipartz1} alt="" />
          </div>
        </div>
      </section>

      <section className="container1 mx-auto">
        <div className="container11 relative py-[158px]">
          <div className="flex flex-col gap-[320px] items-center mx-auto   max-w-[650px] text-center">
            <h1
              data-aos="fade-up"
              className="font-[100] text-[36px] text-[#545454] uppercase leading-[42px]"
            >
              contact{" "}
              <span className="text-[#437C9A] text-[48px]">right now</span> and
              get a detailed calculation of your polymer processing business
            </h1>

            <DisableElevation text="find out the cost" />
          </div>
          <img
            src={img5}
            className="w-[100%] h-[100%] absolute top-0 left-0"
            alt=""
            data-aos="zoom-in"
          />
        </div>
      </section>

      <section className="container1 mx-auto">
        <div className="container11 flex gap-x-[40px] justify-between xl:flex-wrap xl:justify-center xl:gap-y-[40px]">
          <div className="flex justify-between gap-[47.5px]">
            <div className="flex flex-col gap-[40px]">
              <img data-aos="fade-right" src={rectangle23} alt="" />
              <img data-aos="fade-right" src={rectangle23} alt="" />
              <img data-aos="fade-right" src={rectangle23} alt="" />
            </div>

            <div className="flex flex-col gap-[40px]">
              <img data-aos="fade-down" src={rectangle22} alt="" />
              <div className="flex justify-between">
                <img data-aos="fade-up" src={rectangle24} alt="" />
                <img data-aos="fade-up" src={rectangle24} alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-[47.5px]">
            <div className="flex flex-col gap-[40px]">
              <img data-aos="fade-down" src={rectangle27} alt="" />
              <img data-aos="fade-up" src={rectangle26} alt="" />
            </div>
            <div className="flex flex-col gap-[40px]">
              <img data-aos="fade-left" src={rectangle31} alt="" />
              <img data-aos="fade-left" src={rectangle29} alt="" />
              <img data-aos="fade-left" src={rectangle31} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container1 mx-auto">
        <div className="container11 xl:items-center flex flex-col gap-[96px] items-start m-[168px_auto_98px_auto] relative">
          <h1 className="xl:mx-auto text-center font-[500] text-[36px] text-[#545454] uppercase leading-[42px]">
            delivery
          </h1>
          <p className="xl:mx-auto xl:text-center max-w-[613px] font-[300] text-[16px] text-[#545454] leading-[18px]">
            Commodo ullamco cillum elit laborum nulla elit fugiat sit duis qui
            consectetur minim. Deserunt ut exercitation aute duis ea deserunt
            nisi nisi laboris tempor culpa. Laborum in id anim id do eiusmod
            magna adipisicing duis quis fugiat. Commodo et magna labore
            excepteur adipisicing aliquip occaecat culpa deserunt labore non
            consectetur. Ea deserunt elit sint ex eu. Aute eiusmod reprehenderit
            mollit veniam ea cillum. Voluptate nisi sunt sint ullamco cillum
            ipsum sit fugiat aute id minim minim. Deserunt excepteur laboris ea
            irure nostrud Lorem nulla deserunt ullamco consequat. Elit ipsum est
            quis minim excepteur id in enim in aliqua reprehenderit deserunt
            sint anim. Excepteur sunt nisi eiusmod enim incididunt ipsum aliquip
            ut et Lorem ipsum quis pariatur adipisicing.
          </p>
          <DisableElevation text="find out the cost of delivery" />
          <img src={mappa1} className=" absolute right-0 top-0 z-[-1]" alt="" />
        </div>
      </section>
      <section className="container1 mx-auto">
        <div className="container11 flex flex-col gap-[136px]">
          <h1 className="font-[500] xl:text-center text-[36px] text-[#545454] uppercase leading-[42px] text-right  mt-[98px]">
            become a dealer
          </h1>
          <div className="flex flex-col gap-[114px]">
            <h1
              className="font-[500] text-[36px] xl:text-center xl:mx-auto text-[#545454] max-w-[617px]"
              data-aos="zoom-out-right"
            >
              We invite dealers to cooperation for sale polymer equipment
            </h1>
            <div className="flex flex-col gap-[114px]">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="max-w-[617px] mx-auto text-center font-[100]"
              >
                We are a Russian manufacturer and specialize in the production
                of high-quality equipment for the manufacture and processing of
                polymer material, which is subsequently reused in many
                industries.
              </p>

              <div className="flex justify-between">
                <div
                  data-aos="zoom-out-right"
                  className="w-max flex items-center justify-center flex-col gap-[30px]"
                >
                  <div className=" font-[500] text-[36px] text-[]  p-[40px_22px] bg-[#437C9A] text-white">
                    200+
                  </div>
                  <p className="font-[300] text-[24px] text-[gray] uppercase">
                    Equipment items
                  </p>
                </div>

                <div
                  data-aos="zoom-out-up"
                  className="w-max flex items-center justify-center flex-col gap-[30px]"
                >
                  <div className=" font-[500] text-[36px] text-[]  p-[40px_22px] bg-[#437C9A] text-white">
                    200+
                  </div>
                  <p className="font-[300] text-[24px] text-[gray] uppercase">
                    Equipment items
                  </p>
                </div>

                <div
                  data-aos="zoom-out-left"
                  className="w-max flex items-center justify-center flex-col gap-[30px]"
                >
                  <div className=" font-[500] text-[36px] text-[]  p-[40px_22px] bg-[#437C9A] text-white">
                    200+
                  </div>
                  <p className="font-[300] text-[24px] text-[gray] uppercase">
                    Equipment items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
