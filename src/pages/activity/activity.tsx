import { motion } from "framer-motion"; // Import motion
import ActifytySection from "./list";
import { ProfileQuotes, TextQuotes } from "./quotes";
import { GithubActivity } from "../../components";

export function Activity() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 py-10"
        >
            <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white text-3xl font-bold mb-8 text-center"
            >
                My Activities
            </motion.h2>
            
            <ActifytySection />
            <GithubActivity />

            {/* Quotes */}
            <motion.div 
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="min-h-screen px-6 py-20"
            >
                <div className="grid grid-cols-12 gap-6">
                    <ProfileQuotes />
                    <TextQuotes />
                </div>
            </motion.div>
        </motion.div>
    );
}