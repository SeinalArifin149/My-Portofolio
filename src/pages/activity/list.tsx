// import { ActivityCard } from ",,/components/Activti";
import { ActivityCard } from "../../components";
import designerImg from "./img/Designer.jpg";
import ScoutImg from "./img/Scout.jpeg";
import KaggleImg from "./img/Kaggle.jpeg";
import HardwareImg from "./img/Hardware.jpeg";

const portfolios = [
	{
		title: "Pembina dan Pramuka Aktif",
		category: "Scout (Pramuka)",
		image: ScoutImg,
	},
	{
		title: "Designer Or UI/UX",
		category: "Designer",
		image: designerImg,
	},
	{
		title: "Organisasi",
		category: "Organisasi",
		image: "/img/agency.png",
	},
	{
		title: "Kaggle Kompetisi",
		category: "Mobile App",
		image: KaggleImg,
	},
	{
		title: "Service Hp,Upgrade Laptop",
		category: "Hardware Service",
		image: HardwareImg,
	},
	{
		title: "Workshop / Bootcamp",
		category: "Mobile App",
		image: "/img/parking.png",
	},
];

export default function ActifytySection() {
	return (
		<section className="bg-[#050b16] py-20">
			<div className="max-w-6xl mx-auto px-6">
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
