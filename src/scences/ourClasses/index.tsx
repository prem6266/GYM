
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Sculpt your physique and build serious strength with our weight training classes! Catered to all levels, from beginners to seasoned lifters, our classes offer expert guidance, personalized routines, and a supportive environment. Get ready to tone muscle, boost metabolism, and unlock your inner power – one rep at a time!.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find your inner zen and unwind with our diverse yoga classes! Whether you're a seasoned yogi or a complete beginner, we offer a variety of styles to suit your needs. Flow through dynamic Vinyasa sequences, hold challenging postures in Hatha yoga, or melt into deep relaxation with restorative yoga. Unwind, de-stress, and build flexibility – all on your yoga mat.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Fire up your core and sculpt a strong midsection with our ab core classes! Designed to target all the muscles in your abdomen, these classes will help you achieve a toned and defined core. Get ready for dynamic routines that combine crunches, planks, leg lifts, and more, all in a high-energy atmosphere. It's time to build a rock-solid core that will improve your posture, stability, and overall fitness!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Ditch the gym routine and ignite your inner adventurer! Our action-packed adventure classes offer a thrilling escape from the ordinary. Conquer challenging obstacle courses, test your limits on the climbing wall, or take on a high-intensity workout with unexpected twists. It's fitness with a serious dose of fun – get ready to sweat, smile, and push your limits!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Unleash your fitness potential with our diverse training classes! We cater to all interests and goals, offering something for everyone. From high-octane adventure classes that push your limits to sculpting strength sessions with weights, we've got you covered. Find inner peace with yoga or target your core for a rock-solid foundation. It's time to ditch the solo routine and discover a training class that ignites your passion for fitness!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Dive into a world of fitness fun with our diverse gym classes! No matter your goal, we have something for everyone. From high-energy cardio to strength-building workouts, and flexibility-focused flows, our classes offer a dynamic way to reach your peak. Come sweat it out, learn new skills, and find your fitness tribe – all in one place!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
