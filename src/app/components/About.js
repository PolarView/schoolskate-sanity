import Image from "next/image";
import React from "react";
import aboutImage from "/public/about/about.webp";
const About = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center px-2 min-[1050px]:max-h-[831px] max-md:min-h-[800px]    pt-[100px] pb-[50px] ">
      <div className="min-[1380px]:w-[80%] h-full w-[100%] max-w-[1200px] flex flex-col items-center">
        <h2 className="text-[50px] font-['Unbounded'] font-bold leading-[60px] pb-[42px] self-start">
          О школе
        </h2>
        <div className="max-w-[1200px]   md:h-[580px]   max-[390px]:h-[720px] xl:gap-x-16 max-md:gap-y-7  flex md:flex-row flex-col justify-between items-center ">
          <div className="w-[50%] max-h-[571px] max-w-[571px] max-md:w-[90%]  max-[390px]:w-[90%]  relative aspect-square">
            <Image
              placeholder="blur"
              src={aboutImage}
              alt="Фото тренировки на скейте в школе"
              fill
              className="rounded-[10px] w-full aspect-square "
            />
          </div>
          <div className="w-[47%] max-md:w-[90%] max-h-[408px]">
            <div className="flex flex-col w-full items-center gap-[42px] ">
              <div className="w-full max-[390px]:h-[178px] h-[139px] md:h-[169px] flex items-center justify-center leading-[30px] md:leading-[36px] text-center rounded-[10px] text-white bg-[#546EFF] rotate-3 font-['Unbounded'] md:text-[30px] text-[25px] font-normal">
                <p className="text-center -rotate-3">
                  Schoolskate — школа, где каждый сможет открыть для себя много нового
                </p>
              </div>
              <p className="w-full h-full min-[900px]:text-[30px] text-[20px] md:text-[28px] text-[#324164] md:leading-[36px] leading-6 font-['Roboto']">
                Уже больше 13 лет мы помогаем новичкам и уже катающимся преодолеть все страхи,
                выучить новые трюки и искренне полюбить скейтбординг.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
