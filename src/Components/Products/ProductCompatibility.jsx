import React, { useEffect, useRef } from "react";

const ProductCompatibility = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
      titleRef.current.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div
      className="w-full text-center lg:pt-[140px] xxl:pb-[20px] lg:pb-[40px] pt-[62px]"
      id="table-section"
    >
      <div className="lg:max-w-[1120px] xxl:max-w-[1500px] w-full px-[16px] lg:px-0 mx-auto">
        <div
          className="lg:text-[40px] xxl:text-[64px] w-[330px] lg:w-auto mx-auto text-[24px] font-[700] leading-[1.5] scroll-animation-text animated"
          ref={titleRef}
        >
          Fully Compatible with Hayati® Quokka Products
        </div>
        <div
          className="w-full overflow-hidden lg:rounded-[24px] rounded-[8px] xxl:mt-[90px] lg:mt-[60px] mt-[20px] lg:pt-[90px] pt-[41px] lg:pb-[55px] pb-[34px]"
          style={{ background: "rgba(245, 243, 241, 1)" }}
        >
          <div className="flex items-center justify-end lg:gap-[126px] xxl:gap-[128px] gap-[17px] font-[500] text-[20px] mb-[12px] lg:px-[200px] xxl:pr-[230px] lg:pr-[134px] pr-[16px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0676/6270/8977/files/0.6.png?v=1742972781"
              className="lg:h-[84px] xxl:h-[120px] h-[45px]"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0676/6270/8977/files/0.8.png?v=1742972781"
              className="lg:h-[84px] xxl:h-[120px] h-[45px]"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0676/6270/8977/files/1.2.png?v=1742972781"
              className="lg:h-[84px] xxl:h-[120px] h-[45px]"
              alt=""
            />
          </div>
          <div className="flex items-center lg:gap-[22px] font-[500] xxl:text-[20px] lg:text-[14px] text-[8px] xxl:px-[65px] lg:px-[20px] px-[3px]">
            <div>
              <div className="xxl:text-[30px] lg:text-[24px] text-[10px] lg:leading-[40px] font-[700] mb-[15px] lg:mb-0">
                (RDL)
              </div>
              <div>Freebase</div>
            </div>
            <div
              className="flex-1 xxl:h-[16px] lg:h-[12px] h-[6px] lg:rounded-[8px] rounded-[3px] mx-[-30px] lg:mx-0"
              style={{
                background:
                  "linear-gradient(90deg, #DB1917 0%, #DE890C 24.95%, #EDE401 49.43%, #0EA16B 71.73%, #0776BD 100%)",
              }}
            ></div>
            <div>
              <div className="xxl:text-[30px] lg:text-[24px] text-[10px] lg:leading-[40px] font-[700] mb-[15px] lg:mb-0">
                (MTL)
              </div>
              <div>Nic Salt</div>
            </div>
          </div>
          <div
            style={{ color: "rgba(74, 74, 74, 1)" }}
            className="[&>*]:lg:h-[62px] px-[14px] [&>*]:h-[38px] [&>*]:border-b [&>*]:border-[rgba(91,94,103,1)] lg:px-[105px] xxl:px-[200px] text-[rgba(187,187,187,1)] text-left"
          >
            <div
              className="flex items-center"
              style={{ borderColor: "rgba(226, 226, 226, 1)" }}
            >
              <div className="xxl:w-[260px] lg:w-[200px] w-[56px] shrink-0 lg:text-[20px] text-[12px] font-[500]">
                Resistance
              </div>
              <div
                style={{ color: "#000" }}
                className="flex-1 lg:gap-[90px] gap-[10px] flex items-center justify-end lg:text-[20px] text-[12px] font-[700] text-white [&>*]:xxl:w-[220px] [&>*]:lg:w-[170px] [&>*]:w-[74px] text-center"
              >
                <div>0.6 Ω</div>
                <div>0.8 Ω</div>
                <div>1.2 Ω</div>
              </div>
            </div>
            <div
              style={{ borderColor: "rgba(226, 226, 226, 1)" }}
              className="flex items-center"
            >
              <div className="xxl:w-[260px] lg:w-[200px] w-[56px] shrink-0 lg:text-[20px] text-[12px] font-[500]">
                Capacity
              </div>
              <div
                style={{ color: "#000" }}
                className="flex-1 lg:gap-[90px] gap-[10px] flex items-center justify-end lg:text-[20px] text-[12px] font-[400] text-white [&>*]:xxl:w-[220px] [&>*]:lg:w-[170px] [&>*]:w-[74px] text-center"
              >
                <div>2mL / 3mL</div>
                <div>2mL / 3mL</div>
                <div>2mL / 3mL</div>
              </div>
            </div>
            <div
              style={{ color: "rgba(74, 74, 74, 1)" }}
              className="lg:!h-[82px] !h-[63px] flex items-center"
            >
              <div className="xxl:w-[260px] lg:w-[200px] w-[56px] shrink-0 lg:text-[20px] text-[12px] font-[500]">
                Freebase
                <div className="lg:text-[16px] text-[8px]">
                  (PG/VG=30/70, 40/60)
                </div>
              </div>
              <div
                style={{ color: "#000" }}
                className="flex-1 lg:gap-[90px] gap-[10px] flex items-center justify-end lg:text-[20px] text-[12px] font-[400] text-white [&>*]:xxl:w-[220px] [&>*]:lg:w-[170px] [&>*]:w-[74px] text-center"
              >
                <div>0-9mg</div>
                <div>0-12mg</div>
                <div>6-18mg</div>
              </div>
            </div>
            <div
              style={{ borderColor: "rgba(226, 226, 226, 1)" }}
              className="lg:!h-[82px] !h-[63px] flex items-center"
            >
              <div className="xxl:w-[260px] lg:w-[200px] w-[56px] shrink-0 lg:text-[20px] text-[12px] font-[500]">
                Nic Salt
                <div className="lg:text-[16px] text-[8px]">(PG/VG=50/50)</div>
              </div>
              <div
                style={{ color: "#000" }}
                className="flex-1 lg:gap-[90px] gap-[10px] flex items-center justify-end lg:text-[20px] text-[12px] font-[400] text-white [&>*]:xxl:w-[220px] [&>*]:lg:w-[170px] [&>*]:w-[74px] text-center"
              >
                <div>10-35mg</div>
                <div>20-50mg</div>
                <div>20-50mg</div>
              </div>
            </div>
            <div className="lg:!h-[82px] !h-[63px] flex items-center">
              <div className="xxl:w-[260px] lg:w-[200px] w-[56px] shrink-0 lg:text-[20px] text-[12px] font-[500]">
                Matched Kits
              </div>
              <div
                className="flex-1 pl-[15px] lg:pl-[0px] lg:text-[20px] text-[12px] font-[700] text-white text-center w-[242px] flex items-center justify-center"
                style={{ color: "#000" }}
              >
                Hayati® Quokka Pro&nbsp;&nbsp;|&nbsp;&nbsp;Hayati® Quokka
                Elite&nbsp;&nbsp;|&nbsp;&nbsp;Hayati® Quokka Lite
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCompatibility;
