import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
  <section className={`${styles.paddingY} relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"></div>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-0"></div>
    <div className="w-full flex justify-between items-start md:items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]   ">
      <h2 className={`${styles.heading2} relative z-[4] `}>What people are
        <br className="sm:block hidden" />saying about us</h2>
      <p className={`${styles.paragraph} max-w-[450px] max-h-[64px] z-[5] text-left mr-32`}> Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative  z-[1]">
      {feedback.map((card, index) => (
        <FeedbackCard key={card.id} {...card} index={index} />
      ))}
    </div>
  </section >
)

export default Testimonials;
