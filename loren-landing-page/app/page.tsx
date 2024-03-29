import Image from "next/image";
import logo from "../public/images/PNG 1.png";
import trangchu from "../public/images/Trang Chủ.png";
import napthe from "../public/images/Nạp Thẻ.png";
import lehoimuasam from "../public/images/LỄ HỘI MUA SẮM MÙA NOEL 1.png";
import giangsinhanlanh from "../public/images/GIÁNG SINH AN LÀNH 2.png";
import thele from "../public/images/Thể Lệ.png";
import thamgiangay from "../public/images/Tham Gia Ngay.png";
import phanthuong from "../public/images/PHẦN THƯỞNG 1.png";
import khungqua from "../public/images/Khung quà 1.png";
import bangxephang from "../public/images/Frame bảng xếp hạng 1.png";
import adnxlogo from "../public/images/AdnX_Logo-2-15 1.png";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  DialogGift,
  DialogContentGift,
  DialogTriggerGift,
} from "@/components/ui/dialog-gift";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="bg-landingBackGround h-full">
      <div className="grid grid-cols-12 gap-0 justify-items-center">
        <Image
          src={logo}
          alt="logo"
          className="col-span-8 justify-self-end mt-5 w-[486px] h-[440px] cursor-pointer lg:w-[189px] lg:h-[142px] lg:mr-16"
        />
        <Image
          src={trangchu}
          alt="trangchu"
          className="w-[262px] h-[104px] mt-16 col-span-2 cursor-pointer lg:w-[189px] lg:h-[76px]"
        />
        <Image
          src={napthe}
          alt="napthe"
          className="w-[262px] h-[104px] mt-16 col-span-2 cursor-pointer lg:w-[189px] lg:h-[76px]"
        />
      </div>

      <div className="flex justify-center">
        <Image
          src={lehoimuasam}
          alt="lehoimuasam"
          className="w-[933px] h-[176px] lg:w-[561px] lg:h-[106px]"
        />
      </div>

      <div className="flex justify-center">
        <Image
          src={giangsinhanlanh}
          alt="giangsinhanlanh"
          className="w-[1369px] h-[558px] lg:w-[823px] lg:h-[353px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-0 justify-items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src={thele}
              alt="thele"
              className="w-[301px] h-[123px] cursor-pointer lg:w-[189px] lg:h-[76px]"
            />
          </DialogTrigger>
          <DialogContent className=""></DialogContent>
        </Dialog>
        <Image
          src={thamgiangay}
          alt="thamgiangay"
          className="w-[301px] h-[123px] cursor-pointer lg:w-[189px] lg:h-[76px]"
        />
      </div>

      <div className="mt-32 relative lg:grid">
        <div className="flex justify-center">
          <Image
            src={phanthuong}
            alt="phanthuong"
            className="w-[933px] h-[129px] absolute justify-items-center lg:w-[767px] lg:h-[106px]"
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Image
            src={khungqua}
            alt="khungqua"
            className="w-[1776px] h-[610px] px-10 lg:w-[800px] lg:h-[543px]"
          />
        </div>

        <div className="absolute bottom-28 px-16 w-full h-fit lg:bottom-20 lg:w-[825px] justify-self-center">
          <ul className="grid grid-cols-5 gap-0 w-full lg:hidden">
            <DialogGift>
              <DialogTriggerGift asChild>
                <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                  <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                    HỘP QUÀ <br />
                    ĐẤU GIÁ TOP 1
                  </p>
                  <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                    XEM QUÀ
                  </p>
                </li>
              </DialogTriggerGift>
              <DialogContentGift></DialogContentGift>
            </DialogGift>

            <DialogGift>
              <DialogTriggerGift asChild>
                <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                  <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                    HỘP QUÀ <br />
                    750.000 KC
                  </p>
                  <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                    XEM QUÀ
                  </p>
                </li>
              </DialogTriggerGift>
              <DialogContentGift></DialogContentGift>
            </DialogGift>

            <DialogGift>
              <DialogTriggerGift asChild>
                <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                  <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                    HỘP QUÀ <br />
                    300.000 KC
                  </p>
                  <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                    XEM QUÀ
                  </p>
                </li>
              </DialogTriggerGift>
              <DialogContentGift></DialogContentGift>
            </DialogGift>

            <DialogGift>
              <DialogTriggerGift asChild>
                <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                  <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                    HỘP QUÀ <br />
                    100.000 KC
                  </p>
                  <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                    XEM QUÀ
                  </p>
                </li>
              </DialogTriggerGift>
              <DialogContentGift></DialogContentGift>
            </DialogGift>

            <DialogGift>
              <DialogTriggerGift asChild>
                <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                  <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                    HỘP QUÀ <br />
                    50.000 KC
                  </p>
                  <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                    XEM QUÀ
                  </p>
                </li>
              </DialogTriggerGift>
              <DialogContentGift></DialogContentGift>
            </DialogGift>
          </ul>

          <ul className="hidden gap-5 lg:grid w-[650px]">
            <Carousel className="w-[650px]">
              <CarouselContent className="-ml-4">
                <CarouselItem className="basis-1/2 justify-center grid">
                  <DialogGift>
                    <DialogTriggerGift asChild>
                      <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                        <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                          HỘP QUÀ <br />
                          ĐẤU GIÁ TOP 1
                        </p>
                        <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                          XEM QUÀ
                        </p>
                      </li>
                    </DialogTriggerGift>
                    <DialogContentGift></DialogContentGift>
                  </DialogGift>
                </CarouselItem>
                <CarouselItem className="basis-1/2 justify-center grid">
                  <DialogGift>
                    <DialogTriggerGift asChild>
                      <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                        <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                          HỘP QUÀ <br />
                          750.000 KC
                        </p>
                        <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                          XEM QUÀ
                        </p>
                      </li>
                    </DialogTriggerGift>
                    <DialogContentGift></DialogContentGift>
                  </DialogGift>
                </CarouselItem>
                <CarouselItem className="basis-1/2 justify-center grid">
                  <DialogGift>
                    <DialogTriggerGift asChild>
                      <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                        <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                          HỘP QUÀ <br />
                          300.000 KC
                        </p>
                        <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                          XEM QUÀ
                        </p>
                      </li>
                    </DialogTriggerGift>
                    <DialogContentGift></DialogContentGift>
                  </DialogGift>
                </CarouselItem>
                <CarouselItem className="basis-1/2 justify-center grid">
                  <DialogGift>
                    <DialogTriggerGift asChild>
                      <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                        <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                          HỘP QUÀ <br />
                          100.000 KC
                        </p>
                        <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                          XEM QUÀ
                        </p>
                      </li>
                    </DialogTriggerGift>
                    <DialogContentGift></DialogContentGift>
                  </DialogGift>
                </CarouselItem>
                <CarouselItem className="basis-1/2 justify-center grid">
                  <DialogGift>
                    <DialogTriggerGift asChild>
                      <li className="bg-giftBox bg-no-repeat bg-cover w-[236px] h-[323px] grid cursor-pointer">
                        <p className="text-[#F5E7B6] font-extrabold text-center text-2xl h-[125px] self-end mt-6">
                          HỘP QUÀ <br />
                          50.000 KC
                        </p>
                        <p className="text-[#FFC600] font-extrabold text-center text-2xl mb-6">
                          XEM QUÀ
                        </p>
                      </li>
                    </DialogTriggerGift>
                    <DialogContentGift></DialogContentGift>
                  </DialogGift>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </ul>
        </div>
      </div>

      <div className="mt-2 relative grid">
        <Image
          src={bangxephang}
          alt="bangxephang"
          className=" px-10 w-[1524px] h-[1110px] lg:w-[1012px] lg:h-[737px]"
        />
        <div className="grid grid-cols-12 gap-0 absolute top-64 w-[1000px] justify-self-center ml-56 lg:w-[700px] lg:ml-28 lg:top-40">
          <p className="font-extrabold text-center text-xl col-span-4 text-white cursor-pointer lg:ml-6">
            Nhân vật
          </p>
          <p className="font-extrabold text-center text-xl col-span-4 mr-8 text-white cursor-pointer lg:mr-0">
            Máy chủ
          </p>
          <p className="font-extrabold text-center text-xl col-span-4 mr-8 text-white cursor-pointer lg:mr-0">
            1000000
          </p>
        </div>
      </div>

      <div className="h-80 bg-[#3C0000] mt-6 pt-20 relative lg:h-[400px] justify-center grid">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[263px] h-[238px] absolute -top-5 -left-2 cursor-pointer"
          />
          <Image
            src={adnxlogo}
            alt="adnxlogo"
            className="w-[291px] h-[173px] absolute top-0 -right-1 cursor-pointer"
          />
        </div>
        <div className="max-w-full lg:max-w-[680px]">
          <p className="font-extrabold text-center text-xl leading-10 mb-6 text-white">
            Công ty Cổ phần ADNX
          </p>
          <p className="font-medium text-center text-base leading-10 text-white">
            Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số:
            224/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 22/04/2021
          </p>
          <p className="font-medium text-center text-base leading-10 text-white">
            Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng
            số: 1963/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
            28/10/2022
          </p>
          <p className="font-medium text-center text-base leading-10 text-white">
            Copyright © 2022 ADNX
          </p>
        </div>
      </div>
    </div>
  );
}
