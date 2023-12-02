import React from "react";

import { Img, Text } from "components";

const SaasLandingPagesPage = () => {
  return (
    <>
      <div className="bg-teal-300 font-inter h-[960px] mx-auto md:pl-10 sm:pl-5 pl-[70px] relative w-full">
        <div className="md:h-[960px] h-[987px] ml-auto my-auto w-[96%] md:w-full">
          <div className="md:h-[960px] h-[987px] m-auto w-full">
            <div className="absolute md:h-[960px] h-[987px] inset-y-[0] my-auto right-[9%] w-[69%] md:w-full">
              <div className="absolute h-[960px] inset-y-[0] left-[0] my-auto w-[53%] sm:w-full">
                <Img
                  className="h-[960px] m-auto object-cover"
                  src="images/img_rectangle187.png"
                  alt="rectangle187"
                />
                <Img
                  className="absolute h-[960px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image40.png"
                  alt="imageForty"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[905px] right-[0]"
                src="images/img_rectangle186.svg"
                alt="rectangle186"
              />
            </div>
            <Img
              className="absolute bottom-[3%] h-[889px] object-cover right-[0] w-[58%]"
              src="images/img_image41.png"
              alt="imageFortyOne"
            />
            <div className="absolute bottom-[16%] h-24 md:h-[94px] left-[0] w-[24%]">
              <Img
                className="h-[94px] ml-[7px] my-auto"
                src="images/img_rectangle189.svg"
                alt="rectangle189"
              />
              <div className="absolute bg-white-A700 border-[3px] border-gray-300 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[48px] w-full">
                <div className="flex flex-row gap-[15.03px] h-[68px] md:h-auto items-center justify-start w-[303px]">
                  <Img
                    className="h-[68px] md:h-auto object-cover w-14"
                    src="images/img_image42.png"
                    alt="imageFortyTwo"
                  />
                  <Text
                    className="sm:text-[34.41px] md:text-[36.41px] text-[38.41px] text-center text-green-400 w-auto"
                    size="txtInterExtraBold3841"
                  >
                    Editable File
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute h-[312px] left-[0] top-[19%] w-[23%]">
              <Text
                className="m-auto md:text-5xl text-[86px] text-white-A700 w-full"
                size="txtInterExtraBold86"
              >
                Saas Landing Pages
              </Text>
              <Img
                className="absolute h-[11px] right-[2%] top-[19%]"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            </div>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[303px] justify-start left-[1%] top-[14%] w-1/5">
            <Img
              className="h-[59px] md:ml-[0] ml-[217px]"
              src="images/img_checkmark.svg"
              alt="arrowleft"
            />
            <Img
              className="h-24"
              src="images/img_vector1.svg"
              alt="vectorOne"
            />
          </div>
        </div>
        <Img
          className="absolute h-[22px] left-[20%] top-[20%]"
          src="images/img_vector3.svg"
          alt="edit"
        />
      </div>
    </>
  );
};

export default SaasLandingPagesPage;
