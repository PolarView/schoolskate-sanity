import React from "react";

const Reviews = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-2  max-md:min-h-[800px]  md:pt-[100px]  py-[30px] ">
      <div className="min-[1380px]:w-[80%]  h-full w-[100%] max-w-[1200px] flex flex-col items-center">
        <h2 className="text-[50px] max-md:text-[40px] font-['Unbounded'] font-bold leading-[60px] md:pb-[62px] pb-5 self-start">
          Отзывы
        </h2>
        <div
          style={{
            width: "100%",
            height: "800px",
            maxWidth: "800px",
            position: "relative",
            padding: "20px 0px"
          }}>
          <iframe
            title="отзывы"
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #e6e6e6",
              borderRadius: "8px",
              boxSizing: "border-box"
            }}
            src="https://yandex.ru/maps-reviews-widget/173307838687?comments"
          />
          <a
            href="https://yandex.ru/maps/org/schoolskate_ru/173307838687/"
            target="_blank"
            rel="preload"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              color: "#b3b3b3",
              fontSize: "10px",
              fontFamily: "YS Text,sans-serif",
              padding: "0 16px",
              position: "absolute",
              bottom: "8px",
              width: "100%",
              textAlign: "center",
              left: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
              maxHeight: "14px",
              whiteSpace: "nowrap"
            }}>
            Schoolskate.ru на карте Москвы — Яндекс&nbsp;Карты
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
