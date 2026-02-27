import { motion } from "framer-motion"; // Import motion
import { ActivityCard } from "../../components";
import designerImg from "./img/Designer.jpg";
import ScoutImg from "./img/Scout.jpeg";
import organisasiImg from "./img/organisasi.jpeg";
import HardwareImg from "./img/Hardware.jpeg";
import DataAnalysis from "./img/analysis.jpeg";
import Competition from "./img/competition.jpeg";

const portfolios = [
  {
    title: "Pembina dan Pramuka Aktif",
    category: "Scout (Pramuka)",
    image: ScoutImg,
    link: "#",
  },
  {
    title: "Designer UI/UX",
    category: "Designer",
    image: designerImg,
    link: "#",
  },
  {
    title: "Competition",
    category: "Competition",
    image: Competition,
    link: "#",
  },
  {
    title: "Organda,Pramuka,Organisasi Islam",
    category: "Organisasi",
    image: organisasiImg,
    link: "#",
  },
  {
    title: "Service HP & Upgrade Laptop",
    category: "Hardware Service",
    image: HardwareImg,
    link: "#",
  },
  {
    title: "Data Analysis",
    category: "Data",
    image: DataAnalysis,
    link: "#",
  },
];

// Konfigurasi animasi container (induk)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Jeda antar item 0.2 detik
        },
    },
};

// Konfigurasi animasi tiap card (anak)
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export default function ActifytySection() {
    return (
        <section className="bg-[#050b16] py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* GRID RESPONSIVE */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex gap-6 overflow-x-auto pb-4
                        sm:grid sm:grid-cols-2 
                        lg:grid-cols-3 
                        sm:overflow-visible"
                >
                    {portfolios.map((item, index) => (
                        <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="
                        min-w-[85%]
                        sm:min-w-0
                        ">
                            <ActivityCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}