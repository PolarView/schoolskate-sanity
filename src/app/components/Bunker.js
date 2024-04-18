import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import bunkerMainImage from "/public/bunker/bunker.webp";
import view1 from "/public/bunker/view1.webp";
import view2 from "/public/bunker/view2.webp";
import Link from "next/link";

const Bunker = () => {
  return (
    <section
      id="bunker"
      className="w-full flex flex-col items-center justify-center gap-y-10 max-md:pb-[50px]">
      <div className="w-full min-[1728px]:min-h-[990px] min-lg:min-h-[700px] max-md:min-h-[640px] min-h-[790px] relative">
        <Image
          placeholder="blur"
          src={bunkerMainImage}
          fill
          alt="фото скейт-парка Bunker"
          className="object-cover rounded-bl-[18px] rounded-br-[18px]"
        />
        <div className="flex absolute top-[50%] right-[50%] select-none translate-x-[50%] -translate-y-[50%] items-center justify-center w-[550px] max-xl:w-[400px] max-md:w-[300px] h-[220px] max-xl:h-[180px] max-md:h-[104px] bg-[#191E28] rounded-[18px] rotate-3">
          <div className="text-center -rotate-3 flex  flex-col justify-center items-center text-white ">
            <h2 className="font-['Unbounded'] rotate-0 font-semibold text-center text-[93px] max-xl:text-[60px] max-md:text-[50px]">
              Bunker
            </h2>
            <p className="font-['Unbounded'] text-center font-normal text-[24px] max-md:text-[15px]">
              cкейт-парк
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] flex flex-col items-center justify-center gap-y-12 px-2">
        <div className="w-full flex max-[700px]:flex-col max-[700px]:gap-y-6 items-center justify-between gap-x-5  min-[700px]:max-h-[220px]">
          <p className="font-['Unbounded'] w-[50%] max-[700px]:w-[100%] font-normal text-[50px] max-[1120px]:text-[32px] max-w-[590px] leading-[55px] max-md:leading-[35px] text-[#191E28]">
            Schoolskate — больше, чем школа скейтбординга
          </p>
          <p className="font-['Roboto']  w-[50%] max-[700px]:w-[100%]   font-normal text-[30px] max-[1120px]:text-[24px] max-md:text-[20px] leading-[36px] max-md:leading-6 max-w-[590px] text-[#324164]">
            Специально для наших учеников мы спроектировали и создали собственный скейт-парк, в
            котором их тренировки будут приностить максимум результата и удовольствия
          </p>
        </div>
        <div className="flex w-full gap-x-5 justify-between  max-[700px]:min-h-[700px] max-[450px]:min-h-[600px]  max-[450px]:gap-y-2  flex-row max-[700px]:flex-col  items-center">
          <div className="w-[49%] max-w-[590px] max-h-[590px]  max-[700px]:h-[345px] max-[450px]:h-[300px] max-[700px]:w-[345px] max-[450px]:w-[300px] aspect-square relative">
            <Image
              placeholder="blur"
              src={view1}
              alt="фото скейт парка Bunker"
              fill
              className="rounded-[10px] aspect-square h-full "
            />
          </div>
          <div className="w-[49%] max-w-[590px] max-h-[590px]  max-[700px]:h-[345px] max-[450px]:h-[300px] max-[450px]:w-[300px] max-[700px]:w-[345px] aspect-square relative">
            <Image
              placeholder="blur"
              src={view2}
              alt="фото скейт парка Bunker"
              fill
              className="rounded-[10px] aspect-square h-full "
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-start min-[700px]:max-h-[158px] flex-col min-[700px]:flex-row">
          <div className="w-[50%] max-[700px]:w-[100%] max-w-[590px] font-['Unbounded'] font-normal text-[50px] max-[1120px]:text-[32px] text-[#191E28] leading-[55px]">
            Трансляция из Бункера
          </div>
          <div className="w-[50%] max-[700px]:w-[100%] max-w-[590px] flex flex-col items-start justify-between gap-y-[30px]">
            <h3 className="font-['Roboto'] font-normal text-[30px] max-[1120px]:text-[24px] text-[#324164] leading-[36px]">
              Вы можете оценить загрузу в скейт-парке, посмотрев прямой эфир с камер
            </h3>
            <NextLink href="translation">
              <button className="max-w-[450px] relative max-[600px]:w-[345px] max-[500px]:w-[300px] h-[56px] min-w-[140px] font-normal font-['Unbounded'] flex justify-center items-center bg-[#546EFF] hover:bg-primaryHovered text-5 text-white rounded-[40px] px-[83px] max-[600px]:px-[30px]  py-[17px]">
                <span>Смотреть трансляцию</span>
                <div className="absolute top-0 right-0">
                  <span class="relative flex items-center justify-center size-6">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                  </span>
                </div>
              </button>
            </NextLink>
          </div>
        </div>
        <div className="w-full flex justify-between max-[950px]:gap-y-[42px] items-center min-[950px]:flex-row flex-col px-2">
          <div className="w-[65%] max-[950px]:w-[98%] max-[440px]:w-[100%] max-[390px]:max-w-[345px] h-[538px] max-[560px]:h-[400px] max-[440px]:h-[240px] relative">
            <iframe
              title="Местоположение скейтпарка на карте"
              style={{ borderRadius: "18px", position: "relative", zIndex: "999" }}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a6085ea7a16ff1b81096e196aadeddc744e92b3a886eb5cfb1285a009f0ac82&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"></iframe>

            <div className="absolute w-full h-full top-3 right-3 rounded-[18px] bg-[#191E28] "></div>
          </div>
          <div className="flex w-[35%] max-[950px]:w-[100%] flex-col  items-end max-[950px]:items-start justify-start ">
            <div className="flex  justify-start gap-y-10 max-md:gap-y-4 flex-col">
              <div className="flex flex-col items-start ">
                <span className="text-[50px] font-['Unbounded'] font-semibold text-[#191E28]">
                  Bunker
                </span>
                <span className="text-[27px] max-[450px]:text-[24px] max-[380px]:text-[21px]  font-['Roboto'] font-normal text-[#191E28]">
                  Ленинградский просп. 37, к3
                </span>
              </div>
              <div className="flex flex-col items-start gap-y-3 max-[500px]:gap-y-2">
                <div className="flex items-center justify-center gap-x-2">
                  <span className="text-[50px] font-['Unbounded'] font-semibold text-[#191E28]">
                    <svg
                      width="31"
                      height="22"
                      viewBox="0 0 31 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.5757 12.0016L9.31858 0.477417L2.61127 18.1213H0.314453V21.9385H9.85272V18.1213H8.93514L10.6158 13.356L15.5757 21.9767L20.5356 13.356L22.2162 18.1213H21.2986V21.9385H30.8369V18.1213H28.5382L21.8309 0.477417L15.5757 12.0016Z"
                        fill="#00a300"
                      />
                    </svg>
                  </span>
                  <span className="text-[27px] font-['Roboto'] font-normal text-[#191E28]">
                    Динамо
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                  <span className="text-[50px] font-['Unbounded'] font-semibold text-[#191E28]">
                    <svg
                      width="31"
                      height="22"
                      viewBox="0 0 31 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.5757 12.0016L9.31858 0.477417L2.61127 18.1213H0.314453V21.9385H9.85272V18.1213H8.93514L10.6158 13.356L15.5757 21.9767L20.5356 13.356L22.2162 18.1213H21.2986V21.9385H30.8369V18.1213H28.5382L21.8309 0.477417L15.5757 12.0016Z"
                        fill="#00aba9"
                      />
                    </svg>
                  </span>
                  <span className="text-[27px] font-['Roboto'] font-normal text-[#191E28]">
                    Цска
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                  <span className="text-[50px] font-['Unbounded'] font-semibold text-[#191E28]">
                    <svg
                      width="31"
                      height="22"
                      viewBox="0 0 31 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.5757 12.0016L9.31858 0.477417L2.61127 18.1213H0.314453V21.9385H9.85272V18.1213H8.93514L10.6158 13.356L15.5757 21.9767L20.5356 13.356L22.2162 18.1213H21.2986V21.9385H30.8369V18.1213H28.5382L21.8309 0.477417L15.5757 12.0016Z"
                        fill="#00aba9"
                      />
                    </svg>
                  </span>
                  <span className="text-[27px] font-['Roboto'] font-normal text-[#191E28]">
                    Петровский парк
                  </span>
                </div>
              </div>
              <div className="text-[#324164] text-[20px] max-[375px]:text-[16px]  font-['Roboto'] font-normal">
                Время работы в будние: 10:00-22:00
                <br />
                По выходным: 9:00-22:00
                <br />
                <Link href="https://wa.me/79099148469?text=">
                  Тел: <span className="underline">+ 7 909 914 84 69</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bunker;
