"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";
import useWindowDimentions from "@/app/hooks/useWindowDimentions";
import Link from "next/link";

const EnrollPopup = ({ setIsEnrollPopupOpen }) => {
  const { windowWidth, windowHeight, isMobile } = useWindowDimentions(700);
  return (
    <>
      <motion.div
        initial={isMobile ? { opacity: 0, display: "hidden" } : { opacity: 0 }}
        animate={isMobile ? {} : { opacity: 100 }}
        transition={isMobile ? {} : { duration: 0.5 }}
        className={`${
          isMobile ? "hidden" : "w-screen h-screen top-0 left-0  bg-[#060a14b9] fixed z-[9999]"
        }`}></motion.div>

      <motion.div
        initial={isMobile ? { height: 0 } : { translateY: "-100%" }}
        animate={
          isMobile ? { height: windowHeight + 105 } : { translateY: "-50%", translateX: "50%" }
        }
        transition={isMobile ? { duration: 0.3 } : { duration: 0.5, translateX: { duration: 0 } }}
        className={`${
          isMobile
            ? `w-full h-[${windowHeight}px]   top-0 left-0 justify-center px-[20px] py-[20px] max-[400px]:px-3 overflow-hidden`
            : "w-[80%] top-[50%] -translate-y-[50%]  right-[50%]  translate-x-[50%] rounded-[30px] px-[80px] pt-[80px] pb-[100px]"
        } max-w-[1360px]     bg-[#191E28]  z-[999999999999999] fixed flex flex-col items-center gap-y-10`}>
        <div className={`w-full flex justify-end ${isMobile && "absolute top-3 right-3 "}`}>
          <div className="cursor-pointer" onClick={() => setIsEnrollPopupOpen(false)}>
            <IoCloseOutline color="white" fontSize={45} />
          </div>
        </div>
        <motion.div
          initial={isMobile ? { opacity: 0 } : {}}
          animate={isMobile ? { opacity: 100 } : {}}
          transition={isMobile ? { duration: 0.4, delay: 0.3 } : {}}
          className="flex w-full flex-col items-center justify-center gap-y-8 max-md:gap-y-4   ">
          <div className="font-['Unbounded'] font-bold text-center text-[38px] max-[560px]:text-[29px] max-[400px]:text-[25px] text-white leading-[41px] max-[560px]:leading-[33px]">
            Выберете удобный формат записи
          </div>
          <div className="font-['Roboto']  text-center font-normal text-[30px] max-[560px]:text-[20px] max-[400px]:text-[16px] leading-9 max-[560px]:leading-[24px] text-[#A0AFC8]">
            Мы всегда на связи в мессержерах. Напишите для записи онлайн какой формат тренировки вас
            интересует и мы поможем подобрать тренера.
          </div>
          <div className="w-full flex-col justify-center pt-[5%] max-[700px]:pt-[16%] space-y-7 max-md:space-y-3 items-center">
            <div
              className={`w-full flex  justify-between ${
                isMobile
                  ? "flex-col justify-between space-y-7 max-md:space-y-3 items-center"
                  : "flex-row"
              }`}>
              <button className="flex items-center justify-center max-[700px]:w-[90%] w-[47%] gap-x-2 max-w-[575px] h-[66px] max-[500px]:h-[50px] bg-[#546EFF] hover:bg-primaryHovered px-[32px] py-4 rounded-[96px]">
                <Link
                  className="flex items-center justify-center max-[700px]:w-[90%] w-[47%] gap-x-2 max-w-[575px] h-[66px] max-[500px]:h-[50px]  px-[32px] py-4 rounded-[96px]"
                  href="https://t.me/schoolskate_admin">
                  <div>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17 0.566989L14.3113 15.334C14.3113 15.334 13.9353 16.3581 12.9012 15.8665L9.07558 12.6715L6.62143 15.109C6.62143 15.109 6.42954 15.2675 6.21971 15.1682L6.68963 10.6406L6.70551 10.6541L6.71545 10.5618C6.71545 10.5618 13.5969 3.82353 13.8789 3.53677C14.161 3.25001 14.0669 3.18857 14.0669 3.18857C14.0857 2.84043 13.5593 3.18857 13.5593 3.18857L4.44039 9.49682L0.642416 8.10406C0.642416 8.10406 0.0595779 7.8788 0.00317246 7.38725C-0.053233 6.8957 0.661199 6.62941 0.661199 6.62941L15.7591 0.177804C15.7591 0.177804 17 -0.416112 17 0.566989Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="font-['Unbounded'] font-normal text-[20px] max-[500px]:text-[16px] text-white">
                    Telegram
                  </div>
                </Link>
              </button>

              <button className="flex items-center justify-center gap-x-2 max-w-[575px] max-[700px]:w-[90%] w-[47%] h-[66px] max-[500px]:h-[50px] bg-whatsapp hover:bg-whatsappHovered px-[32px] py-4 rounded-[96px]">
                <Link
                  className="flex items-center justify-center gap-x-2 max-w-[575px] max-[700px]:w-[90%] w-[47%] h-[66px] max-[500px]:h-[50px]  px-[32px] py-4 rounded-[96px]"
                  href="https://wa.me/79099148469?text=">
                  <div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.3337 10.9998C21.3337 16.7068 16.7073 21.3332 11.0003 21.3332C8.68504 21.3332 6.5476 20.5717 4.82477 19.2856L1.49198 20.1786L2.41144 16.7471C1.30967 15.1039 0.666992 13.1269 0.666992 10.9998C0.666992 5.29289 5.29338 0.666504 11.0003 0.666504C16.7073 0.666504 21.3337 5.29289 21.3337 10.9998ZM16.4121 13.3568C16.1167 13.2105 14.6644 12.5026 14.3936 12.4049C14.1229 12.3074 13.9258 12.2585 13.7289 12.5515C13.532 12.8444 12.9658 13.5034 12.7934 13.6988C12.6211 13.8939 12.4488 13.9185 12.1535 13.7719C12.1053 13.748 12.0397 13.7199 11.9588 13.6851C11.543 13.5065 10.7223 13.154 9.77779 12.3196C8.89963 11.5438 8.30676 10.5857 8.13442 10.2926C7.96209 9.99967 8.116 9.84138 8.26399 9.69547C8.35232 9.60828 8.45377 9.48594 8.55527 9.36353C8.60645 9.30181 8.65763 9.24008 8.70716 9.18283C8.83267 9.03776 8.88702 8.9278 8.96091 8.77832C8.97402 8.75181 8.98773 8.72406 9.00257 8.69465C9.10108 8.49939 9.05183 8.32848 8.97789 8.18212C8.9285 8.08407 8.64776 7.4071 8.3936 6.79424C8.26783 6.49097 8.14857 6.20339 8.06708 6.00944C7.85536 5.50577 7.64071 5.50699 7.46855 5.50797C7.44573 5.5081 7.42365 5.50823 7.40243 5.50717C7.23033 5.49872 7.0332 5.49681 6.83618 5.49681C6.63928 5.49681 6.31929 5.57004 6.04845 5.86297C6.03108 5.88178 6.01167 5.90229 5.99057 5.92459C5.68291 6.24979 5.01457 6.95623 5.01457 8.30403C5.01457 9.73639 6.06149 11.1203 6.21828 11.3275L6.22078 11.3308C6.23046 11.3436 6.24781 11.3683 6.27263 11.4035C6.6265 11.9062 8.49809 14.5645 11.2672 15.749C11.9719 16.0505 12.5223 16.2304 12.9513 16.3654C13.6591 16.5881 14.303 16.5566 14.812 16.4813C15.3796 16.3973 16.5598 15.7734 16.8059 15.09C17.0521 14.4064 17.0521 13.8206 16.9782 13.6985C16.9189 13.6005 16.7799 13.5339 16.574 13.4354C16.5239 13.4114 16.4699 13.3855 16.4121 13.3568Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="font-['Unbounded'] font-normal text-[20px] max-[500px]:text-[16px] text-white">
                    WhatsApp
                  </div>
                </Link>
              </button>
            </div>
            <div className="w-full flex justify-center items-center">
              <Link className="w-full flex justify-center items-center" href="/enroll-ykl">
                <button className="flex items-center justify-center gap-x-2 max-w-[575px]  max-[700px]:w-[90%] w-[47%] h-[66px] max-[500px]:h-[50px] bg-ykl hover:bg-yklHovered px-[32px] py-4 rounded-[96px]">
                  <div>
                    <CgWebsite color="white" fontSize={30} />
                  </div>
                  <div className="font-['Unbounded'] font-normal text-[20px] max-[500px]:text-[16px] text-white">
                    Онлайн запись
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default EnrollPopup;
