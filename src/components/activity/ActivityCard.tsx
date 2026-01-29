interface ActivityCardProps {
  title: string;
  category: string;
  image: string;
}

export function ActivityCard({ title, category, image }: ActivityCardProps) {
  return (
    <div className="
      bg-[#0b1220]
      rounded-xl
      p-4
      shadow-lg shadow-black/40
      hover:scale-[1.03]
      transition duration-300
    ">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />

      <h3 className="text-white font-semibold text-lg">
        {title}
      </h3>

      <p className="text-slate-400 text-sm">
        {category}
      </p>
    </div>
  );
}
