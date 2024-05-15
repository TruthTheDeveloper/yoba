

import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";



const SideBar = ({openDrawer, setOpenDrawer}:{openDrawer:boolean, setOpenDrawer:() => void}) => {

    return(
        <>{openDrawer && <motion.div initial={{x:-100}} animate={{x:0}} exit={{ x: -100,  transition: { duration: 0.35, ease: "easeOut" }  }} transition={{duration:0.35}} className="h-[100vh] bg-white absolute  z-50 top-0 left-0 right-24  ">
        <div className=" h-[55px] w-[55px]  ml-auto m-4 rounded-full " onClick={() => setOpenDrawer()}>
        <IoMdClose size={40}/>

        </div>
      <div className="pt-16">
        <div className="my-12  py-2 mx-12 text-center rounded-md text-xl">
          Home
        </div>
        <div className="my-12  py-2 mx-12 text-center rounded-md text-xl">
          Company
        </div>
        <div className="my-12  py-2 mx-12 text-center rounded-md text-xl">
          Contact Us
        </div>
        <div className="my-12 text-center mx-12 ">
        <div className="bg-[#6DE96D] w-[10rem] py-3 text-center rounded-md">
            Downlaod App
          </div>
        </div>
      </div>
    </motion.div>}</>
    )
}

export default SideBar;