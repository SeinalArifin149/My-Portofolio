import { motion } from "framer-motion"; // Import motion
import { ActivityCard } from "../../components";
import designerImg from "./img/Designer.jpg";
import ScoutImg from "./img/Scout.jpeg";
import KaggleImg from "./img/Kaggle.jpeg";
import HardwareImg from "./img/Hardware.jpeg";

const portfolios = [
    { title: "Pembina dan Pramuka Aktif", category: "Scout (Pramuka)", image: ScoutImg },
    { title: "Designer Or UI/UX", category: "Designer", image: designerImg },
    { title: "Organisasi", category: "Organisasi", image: "/img/agency.png" },
    { title: "Kaggle Kompetisi", category: "Mobile App", image: KaggleImg },
    { title: "Service Hp,Upgrade Laptop", category: "Hardware Service", image: HardwareImg },
    { title: "Workshop / Bootcamp", category: "Mobile App", image: "/img/parking.png" },
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {portfolios.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ActivityCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}