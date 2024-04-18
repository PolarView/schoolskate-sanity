"use client";
import React, { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import { pricingData } from "../data";
import EnrollPopup from "./popups/EnrollPopup";
import useEnrollPopup from "../hooks/useEnrollPopup";
import { useSearchParams } from "next/navigation";

const Pricing = ({ pricing }) => {
  const [isEnrollPopupOpen, setIsEnrollPopupOpen] = useEnrollPopup();
  const [pricesState, setPricesState] = useState(pricing);

  const searchParams = useSearchParams();

  useEffect(() => {
    // checks if basic url contains enroll-popup query string
    const isEnrollPopupInUrl = searchParams.get("enroll-popup");
    if (isEnrollPopupInUrl === "true") setIsEnrollPopupOpen(true);
  }, []);

  const changeTrainingDuration = (id) => {
    setPricesState((prevState) => {
      return prevState.map((item, index) => {
        if (item.id === id) {
          let newCurrentDuration;
          if (item.currentDuration === "hour") {
            newCurrentDuration = "halfAndHour";
          } else {
            newCurrentDuration = "hour";
          }
          return { ...item, currentDuration: newCurrentDuration };
        } else {
          return item;
        }
      });
    });
  };
  return (
    <>
      <section
        id="pricing"
        className="w-full flex flex-col items-center justify-center px-1  max-md:min-h-[800px] pb-[30px] lg:pb-[100px] md:pt-[100px] pt-[30px] ">
        <div className="  h-full w-[100%] max-w-[1230px] flex flex-col items-center">
          <h2 className="text-[50px] font-['Unbounded'] font-bold leading-[60px] pb-[62px] self-start">
            Цены
          </h2>
          <div className="max-w-[1230px] lg:h-[390px] max-lg:gap-y-10 flex lg:flex-row gap-x-7 max-[1260px]:gap-x-2  flex-col justify-between items-cetner px-4 max-[1050px]:px-0 ">
            {pricesState.map((item) => (
              <div
                key={item.id}
                className="flex p-10 max-[1260px]:p-3 gap-y-9 max-md:gap-y-4 items-center justify-between  max-w-[31%] max-lg:max-w-[100%]  h-full  flex-col">
                <div className="flex w-full flex-col items-start justify-center  gap-3">
                  <div className="font-['Unbounded'] lg:min-h-[44px] font-bold text-[24px] text-[#191E28]">
                    {item.trainingType}
                  </div>
                  <div className="text-[18px] font-['Roboto'] text-[#191E28]">
                    {item.trainingDescription}
                  </div>
                </div>
                <div className="flex flex-col w-full justify-between items-center gap-[30px]">
                  <div className="flex w-full justify-between items-center px-4 py-2">
                    <div onClick={() => changeTrainingDuration(item.id)}>
                      <MdArrowBackIos
                        className="cursor-pointer hover:to-blue-800 text-[18px]"
                        color="#546EFF"
                      />
                    </div>
                    <div className="text-[21px] text-[#191E28] font-normal font-['Unbounded']">
                      {`Занятие 
                    ${item.currentDuration === "hour" ? "1 час" : "1,5 часа"}`}
                    </div>
                    <div onClick={() => changeTrainingDuration(item.id)}>
                      <MdArrowForwardIos
                        className="cursor-pointer hover:to-blue-800 text-[18px]"
                        color="#546EFF"
                      />
                    </div>
                  </div>
                  <div className="w-[80%] flex justify-between items-center">
                    <div className=" flex flex-col">
                      <div className="text-[25px] text-[#546EFF] font-['Roboto'] font-normal">
                        {`${
                          item.currentDuration === "hour"
                            ? item.duration.hour.firstTrainPrice
                            : item.duration.halfAndHour.firstTrainPrice
                        } ₽`}
                      </div>
                      <div className="text-[16px] text-[#546EFF] font-['Roboto'] font-normal">
                        {" "}
                        Пробное
                      </div>
                    </div>
                    <div className=" flex flex-col">
                      <div className="text-[25px] font-['Roboto'] font-normal">
                        {`${
                          item.currentDuration === "hour"
                            ? item.duration.hour.standardTrainPrice
                            : item.duration.halfAndHour.standardTrainPrice
                        } ₽`}
                      </div>
                      <div className="text-[16px] font-['Roboto'] font-normal"> Обычное</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsEnrollPopupOpen(true)}
                  className="max-w-[320px] max-[450px]:max-w-[280px] h-[56px] min-w-[140px] font-normal font-['Unbounded'] flex justify-center items-center bg-[#546EFF] hover:bg-primaryHovered text-[21px] text-white rounded-[40px] px-[83px]  py-[17px]">
                  <span>Записаться</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isEnrollPopupOpen && <EnrollPopup setIsEnrollPopupOpen={setIsEnrollPopupOpen} />}
    </>
  );
};

export default Pricing;
