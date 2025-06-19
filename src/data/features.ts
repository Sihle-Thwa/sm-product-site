import { Feature } from "./types";
import {
    Handshake,
    UserRoundSearch,
    ShieldPlus,
    ServerCog
} from "lucide-react";

const features: Feature[] = [
    {
        title: "Team Management",
        description:
            "Sports management has evolved dramatically in the digital age. Organizations that embrace comprehensive platforms like this one gain a competitive advantage both on and off the field.",
        icon: Handshake,
    },
    {
        title: "Player Development",
        description:
            "Comprehensive player profiles. Performance tracking across multiple teams. Participation history. Health and fitness monitoring.",
        icon: UserRoundSearch,
    },
    {
        title: "Administrative Tools",
        description:
            "Role-based dashboards. Custom reporting. Document management. Communication tools for coaches, players, and parents.",
        icon: ShieldPlus,
    },
    {
        title: "Technical Highlights",
        description:
            "Cloud-based secure database. Mobile-responsive design. Real-time updates. API integration capabilities.",
        icon: ServerCog,
    },
];

export default features;