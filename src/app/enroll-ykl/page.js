import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column"
        }}>
        <div className="w-full flex justify-start bg-gray-800 p-1">
          <Link href="/">
            <button className="max-w-[320px] my-2 min-[550px]:max-w-[500px] min-[800px]:max-w-[320px] max-[450px]:max-w-[280px]   flex justify-center items-center bg-[#546EFF] hover:bg-primaryHovered text-[16px] text-white rounded-[40px]  px-[33px] py-2">
              <span>На главную</span>
            </button>
          </Link>
        </div>

        <div className="w-full h-full">
          <iframe
            crossOrigin
            rel="preload"
            height="100%"
            width="100%"
            frameborder="0"
            allowtransparency="true"
            id="ms_booking_iframe"
            src="https://n1029717.yclients.com"></iframe>
        </div>
      </div>
    </>
  );
};

export default page;
