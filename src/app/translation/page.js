import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}>
      <div className="w-full p-1 flex justify-start bg-gray-800">
        <Link href="/">
          <button className="max-w-[320px] my-2 min-[550px]:max-w-[500px] min-[800px]:max-w-[320px] max-[450px]:max-w-[280px]   flex justify-center items-center bg-[#546EFF] hover:bg-primaryHovered text-[16px] text-white rounded-[40px]  px-[33px] py-2">
            <span>На главную</span>
          </button>
        </Link>
      </div>
      <div className=" flex items-center relative justify-center w-full h-full">
        <div className="w-[80%] h-[80%]">
          <iframe
            style={{
              border: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
            src="https://rtsp.me/embed/G8G2ssks/"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
