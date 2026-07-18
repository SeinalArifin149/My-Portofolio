import { motion } from "framer-motion"; // Import motion
import { ActivityCard } from "../../components";
import BpmImg from "./img/bpm.png";
import AbdImg from "./img/ABD.png";
import SandiImg from "./img/sandi.png";
import ChatImg from "./img/chatbot.png"; 
import CatalogueImg from "./img/catalogue_jamu.png"; 
import IRImg from "./img/IR.png";
import BIImg from "./img/BI.png";

const portfolios = [
    { 
        title: "Catalogue Jamu Madura with AI", 
        category: "Fullstack dev", 
        image: CatalogueImg,
        link: "https://catalogue-jamu-madura.vercel.app/"
    },
    { 
        title: "Search Engine Berita Madura 2026", 
        category: "Information Retrieval", 
        image: IRImg,
        link: "https://information-retrieval-kappa.vercel.app/"
    },
    { 
        title: "Analisis Bisnis Penjualan Produk Google",
        category: "Business Intelligence",
        image: BIImg,
        link: "https://datastudio.google.com/u/0/reporting/86903052-688c-474a-bf3b-44185fba0df9/page/tEnnC"
    },
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

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
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="scrollbar-thin scrollbar-thumb-zinc-800 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
                >
                    {portfolios.map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="
                            min-w-[85%] 
                            
                            sm:min-w-0
                            sm:w-[340px] 
                            flex-shrink-0
                            snap-center
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