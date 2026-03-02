import { motion } from "framer-motion"; // Import motion
import { ActivityCard } from "../../components";
import BpmImg from "./img/bpm.png";
import AbdImg from "./img/ABD.png"
import SandiImg from "./img/sandi.png"
import ChatImg from "./img/chatbot.png"
const portfolios = [
    { 
        title: "Prediksi BPM Musik 2025", 
        category: "Kaggle Competition", 
        image: BpmImg,
        link: "https://predictthe-bpmofmusicwithensemble-learning-hiaqlzclnappf6xlycw.streamlit.app/"
    },
    { 
        title: "Analisis komentar Aplikasi Tiktok 2025", 
        category: "Analisis Big Data", 
        image: AbdImg,
        link: "https://big-data-analysisreviewapptiktokcihuy.streamlit.app/"
    },
    { 
        title: "Sistem Sandi Az sederhana", 
        category: "Sandi Pramuka", 
        image: SandiImg,
        link: "https://prabaya-sandi-az.vercel.app"
    },
    { 
        title: "Sistem Chatbot berbasis Whatsapp", 
        category: "Chatbot AI", 
        image: ChatImg,
        link: "https://wa.me/+6289676013629"
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

export default function ProjectSection() {
    return (
        <section className="bg-[#050b16] py-5">
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
                        <motion.div key={index} 
                        variants={itemVariants}
                        className="
                        min-w-[85%]
                        sm:min-w-0
                        "
                        >
                            <ActivityCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}