"use client";
import React, { useState, useRef, useEffect } from "react";
import { mentorsData } from "../data";
import { motion } from "framer-motion";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { GoMute, GoUnmute } from "react-icons/go";
import { PiHandSwipeLeft } from "react-icons/pi";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

const Coaches = ({ coaches }) => {
  console.log(coaches);
  const [carouselWidth, setCarouselWidth] = useState(null);
  const carousel = useRef(null);
  const videoRefs = mentorsData.map(() => useRef(null));
  const posterRefs = mentorsData.map(() => useRef(null));
  const [playing, setPlaying] = useState(Array(mentorsData.length).fill(false));
  const [muted, setMuted] = useState(Array(mentorsData.length).fill(false));

  const handleTogglePlay = (index) => {
    const newPlaying = [...playing];
    newPlaying[index] = !newPlaying[index];
    setPlaying(newPlaying);

    const video = videoRefs[index].current;
    if (newPlaying[index]) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleToggleMute = (index) => {
    const newMuted = [...muted];
    newMuted[index] = !newMuted[index];
    setMuted(newMuted);

    const video = videoRefs[index].current;
    video.muted = newMuted[index];
  };

  useEffect(() => {
    setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section
      id="coaches"
      className="w-full flex flex-col bg-[#191E28] items-center justify-center px-1 max-[700px]:px-2  max-md:min-h-[800px]  md:pt-[100px] py-[120px] max-md:py-5 max-md:pt-14 rounded-tl-[18px] rounded-tr-[18px]">
      <div className="  h-full w-[100%] max-w-[1230px] gap-y-[42px] flex flex-col items-center">
        <h2 className="text-[50px] max-[700px]:text-[40px] text-white font-['Unbounded'] font-bold leading-[60px]  self-start">
          Тренеры
        </h2>
        <div className="flex w-full flex-col gap-y-4">
          <p className="text-[30px] max-[700px]:text-[20px] text-[#EEF0F3] font-['Roboto'] font-normal leading-[36px]  self-start">
            В нашей команде работают, только проверенные и опытные тренеры со стажем работы более
            пяти лет. Выбирать с кем заниматься только вам.
          </p>
          <motion.div
            className="self-start"
            initial={{ x: 0 }}
            animate={{ x: 30 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}>
            <PiHandSwipeLeft className={`text-[50px] max-md:text-[40px]`} color="white" />
          </motion.div>
        </div>

        <motion.div
          style={{
            mask: "linear-gradient(90deg, transparent, white 3%, white 97%, transparent)"
          }}
          ref={carousel}
          className="max-w-[1230px] w-full px-2 max-md:py-5 cursor-grab overflow-hidden min-h-[650px] max-md:min-h-[400px]">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -carouselWidth }}
            className="w-full h-full max-[450px]:space-x-5 pb-8 flex">
            {coaches.map((mentor, index) => (
              <article
                key={mentor.id}
                className="w-[33%] max-[830px]:w-[40%] max-[700px]:w-[48%] max-[600px]:w-[55%] max-[520px]:w-[65%] max-[440px]:w-[87%] p-5 max-[440px]:p-[10px] max-[420px]:p-0 h-full flex flex-col  items-center justify-center gap-y-5 max-md:gap-y-2 ">
                <div className="w-full h-[580px] max-[1200px]:h-[560px] max-[1040px]:h-[440px] max-[450px]:h-[400px] max-[420px]:h-[380px] relative">
                  <div
                    ref={posterRefs[index]}
                    className={`absolute left-0 bottom-0 w-full h-full hidden `}>
                    <Image
                      src={urlFor(mentor.thumb).url()}
                      fill
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                  <video
                    className="w-full min-w-[350px] object-cover max-[1200px]:min-w-[320px] max-[1040px]:min-w-[260px] max-[440px]:min-w-[240px] max-[420px]:min-w-[220px] h-full rounded-[10px]"
                    onEnded={() => {
                      posterRefs[index].current.style.display = "block";
                    }}
                    onPlay={() => {
                      posterRefs[index].current.style.display = "none";
                    }}
                    playsInline
                    poster={urlFor(mentor.thumb).url()}
                    ref={videoRefs[index]}
                    // ref={(el) => (videoRefsArray.current[index] = el)}
                    src={mentor.video.videoUrl}></video>
                  <div className="absolute left-0 bottom-0 w-full h-full text-white cursor-pointer">
                    {playing[index] ? (
                      <div
                        onClick={() => handleTogglePlay(index)}
                        className="absolute left-[2%] bottom-[2%]">
                        <BsPauseFill fontSize={34} />
                      </div>
                    ) : (
                      <div
                        onClick={() => handleTogglePlay(index)}
                        className="absolute left-[2%] bottom-[2%]">
                        <BsFillPlayFill fontSize={34} />
                      </div>
                    )}
                    {muted[index] ? (
                      <div
                        onClick={() => handleToggleMute(index)}
                        className="absolute right-[5%] bottom-[2%]">
                        <GoUnmute fontSize={34} />
                      </div>
                    ) : (
                      <div
                        onClick={() => handleToggleMute(index)}
                        className="absolute right-[5%] bottom-[2%]">
                        <GoMute fontSize={34} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-y-2 max-md:gap-y-1">
                  <p className="text-[30px] text-white font-['Unbounded'] font-semibold">
                    {mentor.name}
                  </p>
                  <p className="text-[22px] text-white font-['Unbounded'] font-normal">
                    стаж {mentor.experience} лет
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coaches;
