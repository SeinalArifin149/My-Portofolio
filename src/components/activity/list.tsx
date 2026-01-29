import { ActivityCard } from "./ActivityCard";

const portfolios = [
    {
        title: "VPN Mobile App",
        category: "Mobile App",
        image: "/img/vpn.png",
    },
    {
        title: "Streaming Mobile App",
        category: "Mobile App",
        image: "/img/stream.png",
    },
    {
        title: "Creative Digital Agency",
        category: "Landing Page",
        image: "/img/agency.png",
    },
    {
        title: "Podcast Mobile App",
        category: "Mobile App",
        image: "/img/podcast.png",
    },
    {
        title: "Multimedia Design Platform",
        category: "Web Design",
        image: "/img/multimedia.png",
    },
    {
        title: "Parking Mobile App",
        category: "Mobile App",
        image: "/img/parking.png",
    },
];

export default function ActifytySection() {
    return (
        <section className="bg-[#050b16] py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Judul */}
                <h2 className="text-white text-3xl font-bold mb-10">
                    Our Portfolio
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((item, index) => (
                        <ActivityCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
