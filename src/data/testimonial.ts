import { Testimonial } from "./types";
import SC from "../../public/SportsCoordinator.jpg";
import HC from "../../public/HeadCoach.jpg";
import AD from "../../public/AthleticsDirector.jpg";


const Testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    role: "Sports Coordinator",
    testimonial:
      "Implementation was seamless, and the support team has been incredible. Our district saved 15 hours per week on paperwork.",
    image: "/SportsCoordinator.jpg",
  },
  {
    name: "Carlos Rodriguez",
    role: "Head Coach",
    testimonial:
      "This platform has revolutionized how we manage our school's 25 sports teams.",
    image: "/HeadCoach.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Athletics Director",
    testimonial: "Game-changer for organizing competitions.",
    image: "/AthleticsDirector.jpg",
  },
];

export default Testimonials;
