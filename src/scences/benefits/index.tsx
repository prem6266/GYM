import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6 cursor-pointer" />,
    title: "State of the Art Facilities",
    description:
    "Unleash the athlete within you at our state-of-the-art gym! Experience a dynamic and efficient workout with cutting-edge equipment and a space that elevates your fitness journey.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Join our gym for many classes, including cardio, strength training, and yoga. Find your new favorite way to get fit!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Elevate your workouts with our expert trainers! Get personalized guidance, technique corrections, and unwavering motivation from dedicated professionals.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div className="md:w-3/5 md:my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-md">
          We deliver state-of-the-art fitness equipment, seasoned trainers, and a wide range of classes to propel you towards reaching your fitness aspirations effortlessly. We prioritize the well-being of every member with utmost dedication.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div className="md-flex items-center justify-between mt-5 gap-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and  Description*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img className="mx-auto max-w-lg rounded-md hover:scale-105 duration-500" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <p className="my-5">  Millions of people around the world have discovered a path to fitness that's not just effective, it's actually enjoyable. Imagine a community that celebrates your progress, no matter how big or small. A supportive network where high fives and encouragement are as common as sweat. That's the reality for millions who've embraced a new way of getting fit. They're not just building strength and endurance, they're building a healthier, happier lifestyle. This isn't about pushing yourself to the point of exhaustion; it's about finding activities you genuinely enjoy, whether it's mastering a new yoga pose, crushing a HIIT workout, or simply feeling the exhilaration of a group fitness class.</p>
              <p className="mb-5">The key is finding a program that fits your unique goals and preferences. With millions already on board, there's a vibrant community waiting to welcome you with open arms. So, ditch the negativity and join the movement. It's time to discover the joy of getting fit, surrounded by a community that will cheer you on every step of the way.</p>
            </motion.div>
            {/* Button */}
            <motion.div className="relative mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
                <div  className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                            Join now
                    </ActionButton>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits