"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./styles.module.css"


export default function Home() {

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

useEffect(() => {
  if (openDrawer) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [openDrawer]);

  return (
    <main className=" bg-[white] text-[#0B102D] ">
      <section className="bg-[#0B102D] h-screen ">
        <div className="hidden lg:flex justify-between pl-48 pr-48 pt-8">
          
         <div className="">
         <Image src={"/Logo.png"} height={50} width={170} alt="src" />
         </div>
          <div className="text-white">
            <ul className="flex justify-between">
              <li className="mx-4">Home</li>
              <li className="mx-4">Company</li>
              <li className="mx-4">Contact Us</li>
            </ul>
          </div>
          <div className="bg-[#6DE96D] w-[10rem] py-3 text-center rounded-md">
            Downlaod App
          </div>
        </div>
        <div className="  cursor-pointer lg:hidden z-10 " onClick={() => setOpenDrawer(!openDrawer)}><GiHamburgerMenu size={40} className="text-white ml-auto" /></div>
        <SideBar openDrawer={openDrawer} setOpenDrawer={() => setOpenDrawer(false)}/>

        <div>
          <div className="text-white text-center  pt-48 px-1">
            <div className={`text-[42px] md:text-[50px] lg:text-[72px] font-bold ${classes.clash}`}>
              <h1>Your Instant</h1>
              <h1>Virtual Dollar Card</h1>
            </div>
            <p className="pt-4">Click, Pay, Explore. It&apos;s that Easy. Go global with Yobaa.</p>
          </div>
          <div className="flex justify-center mt-16 lg:mt-4 ">
            <Image
              src={"/Apple.png"}
              height={100}
              width={150}
              alt={""}
              className="mx-4 cursor-pointer"
            />
            <Image
              src={"/play.png"}
              height={100}
              width={150}
              alt={""}
              className="mx-4 cursor-pointer"
            />
          </div>
        </div>
      </section>
       <section className="py-24 ">
        <div className="text-center px-3 md:px-0">
          <h1 className="font-bold text-2xl md:text-3xl py-2">
            Discover the Yoba Advantage
          </h1>
          <p className="text-xs md:text-sm">
            Click, Pay, Explore. It&apos;s that Easy. Go global with Yobaa.
          </p>
        </div>

        <div className=" md:flex justify-center md:h-[20rem] gap-4 my-8 mx-5 ">
          <div className="bg-[#FFD396]  md:w-[24rem] flex flex-col justify-end rounded-2xl my-3 md:my-0">
            <p className="px-12 pt-auto text-center py-8 text-sm md:text-base font-bold">
              Shop globally from anywhere, access international brands and
              subscriptions easily
            </p>
          </div>
          <div className="bg-[#CA8CFD] rounded-2xl md:w-[20rem] flex flex-col justify-end text-center my-3 md:my-0">
            <p id="sweep" className="px-14 py-8 text-sm md:text-base font-bold">
              Control your card, track spending, and manage funds on the go
            </p>
          </div>
          <div className="md:flex flex-col gap-4 md:w-[14rem]">
            <div className="bg-[#FD8CF2] rounded-2xl md:flex flex-col justify-end text-center md:h-[13rem] my-3 md:my-0">
              <p className="py-6 text-sm md:text-base font-bold">Zero conversion or maintenance fees</p>
            </div>
            <div className="bg-[#6DE96D] rounded-2xl md:flex flex-col justify-end text-center md:h-[8rem] my-3 md:my-0">
              <Image
                src={"/upright.png"}
                alt="src"
                height={20}
                width={20}
                className="ml-auto mr-2 mb-2"
              />
              <p className="py-6 font-bold">Download the app</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D9DEFC] pb-4">
        <div className="pt-24">
          <h1 className="font-bold text-3xl py-2 text-center ">How it works</h1>
          <p className="text-sm text-center">
            Click, Pay, Explore. It&apos;s that Easy. Go global with Yobaa.
          </p>

          <div className="md:flex justify-center m-5 md:m-24    py-8 md:py-0">
            <div className='basis-1/2 '>
              <div className={`  ${classes.imagecontainer}`}>
              <Image
                src={"/screen.png"}
                alt="src"
                
              
    layout="fill"

                className={`${classes.image}`}
                

              />
              </div>

            </div>

            <div className="basis-1/2 md:pl-4 lg:pl-24  lg:w-[70%]  mx-auto md:mx-0 ">
              <div className="flex my-4">
                <div className="bg-white h-[45px] w-[60px] md:h-[40px] md:w-[50px] text-center py-3 rounded-full font-bold text-lg">
                  1
                </div>
                <div className="md:ml-8 ml-4 ">
                  <h1 className="font-bold text-lg">Download App</h1>
                  <p className="text-sm">
                    Download Yobaa from the play store or app store
                  </p>
                </div>
              </div>

              <div className="flex my-8">
                <div className="bg-white h-[45px] w-[50px] md:h-[40px] md:w-[50px] text-center py-3 rounded-full font-bold text-lg">
                  2
                </div>
                <div className="md:ml-8 ml-4 ">
                  <h1 className="font-bold text-lg">Create your account</h1>
                  <p className="text-sm">
                    Complete onboarding to create an account
                  </p>
                </div>
              </div>

              <div className="flex my-4">
                <div className="bg-white h-[45px] w-[50px] md:h-[40px] md:w-[50px] text-center py-3 rounded-full font-bold text-lg">
                  3
                </div>
                <div className="md:ml-8 ml-4 w-[18rem] md:w-[100%]">
                  <h1 className="font-bold text-lg">Create your card</h1>
                  <p className="text-sm w-full   lg:w-[24rem]">
                  
                    Once your account is set up, you can create your virtual
                    dollar card effortlessly. You can also customize your card
                    to reflect your style and preferences.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start md:ml-16 mt-8">
                <Image
                  src={"/Apple.png"}
                  height={100}
                  width={120}
                  alt={""}
                  className="mx-4 cursor-pointer"
                />
                <Image
                  src={"/play.png"}
                  height={100}
                  width={120}
                  alt={""}
                  className="mx-4 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60rem] md:h-[43rem]">
        <div className="">
          <Image src={"/testimonials.png"} alt="" fill objectFit="cover" />
        </div>
        <div className="absolute w-full text-white">
          <div className="text-center md:py-24 py-12">
            <h1 className="font-bold text-xl md:text-3xl py-2 text-center ">
              Hear from our happy users
            </h1>
            <p className="md:text-sm text-xs">
              Click, Pay, Explore. It&apos;s that Easy. Go global with Yobaa.
            </p>
          </div>

          <div className="flex"></div>

          <div>
          <ScrollContainer
            className="md:flex gap-5 w-full px-5 md:px-24 overflow-hidden cursor-pointer"
            horizontal
          >
            <div>
              <div className="bg-[#A555F6] md:min-w-[25rem] cursor-pointer lg:min-w-[34rem] h-[12rem] rounded-t-3xl rounded-bl-3xl rounded-br-[1.8rem]">
                <p className="text-right text-sm md:text-base p-5 ">
                  Shopping from international brands was always a luxury I
                  couldn&apos;t afford. Yobaa changed that! No more hidden fees or
                  conversion headaches. Now I can indulge in my fashion passion
                  without breaking the bank
                </p>
              </div>
              <Image src={'/vector.png'} width={20} height={10} alt="" className="ml-auto -mt-5"/>
            </div>
            <div>
              <div className="bg-[#5565F6] md:min-w-[25rem] cursor-pointer lg:min-w-[34rem] h-[12rem]   rounded-t-3xl rounded-bl-3xl rounded-br-[1.8rem]">
                <p className="text-right text-sm md:text-base p-5">
                  Shopping from international brands was always a luxury I
                  couldn&apos;t afford. Yobaa changed that! No more hidden fees or
                  conversion headaches. Now I can indulge in my fashion passion
                  without breaking the bank
                </p>
              </div>
              <Image src={'/vector2.png'} width={20} height={10} alt="" className="ml-auto -mt-5"/>
            </div>
            <div>
              <div className="bg-[#55B3F6] md:min-w-[25rem] cursor-pointer lg:min-w-[34rem] h-[12rem] rounded-2xl">
                <p className="text-right text-sm md:text-base p-5">
                  Shopping from international brands was always a luxury I
                  couldn&apos;t afford. Yobaa changed that! No more hidden fees or
                  conversion headaches. Now I can indulge in my fashion passion
                  without breaking the bank
                </p>
              </div>
            </div>
          </ScrollContainer>
          </div>
          <div>
            <Image src={"/Logo.png"} height={100} width={250} alt="src" objectFit="cover" className="mx-auto mt-24"/>
          </div>
        </div>
      </section>

      <section className="bg-[#A3A1F7] h-[45rem] p-5">
        <div className="text-center pt-24 pb-8">
          <h1 className="font-bold text-3xl py-2 text-center ">
            Got Questions
          </h1>
          <p className="text-sm">
            Click, Pay, Explore. It&apos;s that Easy. Go global with Yobaa.
          </p>
        </div>

        <div className="bg-white md:py-4 py-2 my-5 md:w-[600px] mx-auto rounded-xl flex justify-between">
          <p className="pl-5 md:text-xl font-bold text-sm">
            What currencies does Yoba support?
          </p>
          <Image
            src={"/down.png"}
            alt=""
            height={10}
            width={30}
            className="mr-4"
          />
        </div>

        <div className="bg-white md:py-4 py-2 my-5 md:w-[600px]  mx-auto rounded-xl flex justify-between">
          <p className="pl-5 md:text-xl font-bold text-sm">
            Are there any fee associated with using Yoba?
          </p>
          <Image
            src={"/down.png"}
            alt=""
            height={10}
            width={30}
            className="mr-4"
          />
        </div>

        <div className="bg-white md:py-4 py-2 my-5 md:w-[600px]  mx-auto rounded-xl flex justify-between">
          <p className="pl-5 md:text-xl font-bold text-sm">
            How do I add funds to my Yoba account?
          </p>
          <Image
            src={"/down.png"}
            alt=""
            height={10}
            width={30}
            className="mr-4"
          />
        </div>

        <div className="bg-[#EFEFFE] py-5 md:w-[600px] mt-24 mx-auto rounded-xl text-center">
          <p className="text-center font-bold text-xl">
            Still have a questions?
          </p>
          <p className="text-xs md:w-[26rem] mx-auto my-2">
            Can&apos;t find the answer you&apos;re looking for? Please send a message to
            our friendly team help@yooba.ai
          </p>
        </div>
      </section>

      <div className="bg-[#0B102D] relative h-[45rem] ">
        <div className="h-[2rem]"></div>

        <div className="bg-[#C935D2] h-[20rem]  md:h-[18rem] mx-5 md:w-[70%] md:mx-auto  mt-12 text-white    rounded-3xl text-center">
          <h1 className="text-4xl font-bold pt-16">Join Yobaa Today</h1>
          <p className="text-sm md:w-[30rem] mx-auto mt-4">
            Experience the freedom of borderless spending. Claim your free card
            and unlock a world of possibilities.
          </p>
          <div className="flex mt-8 justify-center">
            <Image
              src={"/Apple.png"}
              height={100}
              width={120}
              alt={""}
              className="mx-4 cursor-pointer"
            />
            <Image
              src={"/play.png"}
              height={100}
              width={120}
              alt={""}
              className="mx-4 cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-[#F7EBA1] mx-10 md:w-[68%] h-[1rem] md:mx-auto rounded-b-xl"></div>
        <div className="bg-[#8C50EC] mx-12 md:w-[66%] h-[1rem] md:mx-auto rounded-b-xl"></div>
        <div className="bg-[#FC8D8A] mx-14 md:w-[64%] h-[1rem] md:mx-auto rounded-b-xl"></div>

        <div className="text-white md:flex  justify-between mt-12 md:mt-48 lg:mt-56 ">
          <Image src={"/Logo.png"} height={50} width={170} alt="src" className="mx-auto lg:mx-0"/>
          <p className="text-xs md:text-base my-4 text-center">© 2024 Yooba Plc. All Rights Reserved</p>
          <div className="flex justify-center md:justify-left">
            <Image
              src={"/instagram.png"}
    width={50}
    height={10}
              alt="src"
              className="mx-2"
            />
            <Image
              src={"/facebook.png"}
    width={50}
    height={10}
              alt="src"
              className="mx-2"
            />
            <Image
              src={"/instagram.png"}
    width={50}
    height={10}
              alt="src"
              className="mx-2"
            />
            <Image
              src={"/linkedln.png"}
    width={50}
    height={10}
              alt="src"
              className="mx-2"
            />
            <Image
              src={"/twitter.png"}
    width={50}
    height={10}
              alt="src"
              className="mx-2"
            />
          </div>
        </div>
      </div>   
    </main>
  );
}
