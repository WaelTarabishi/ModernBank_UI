import { arrowUp } from "../assets";
import styles from "../style";
const Getstarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient text-white  p-[2px] cursor-pointer`}>
    <div className={` ${styles.flexCenter} bg-primary flex-col  w-[100%] h-[100%] rounded-full `}>
      <div className={`${styles.flexStart}  flex-row `}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-3 ">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="ArrowUp" className="w-[23px] h-[23px] object-contain  " />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px] ">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div >
);

export default Getstarted;
