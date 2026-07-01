interface ActivityCardProps {
  title: string;
  category: string;
  image: string;
  link?: string;
}

export function ActivityCard({ title, category, image, link }: ActivityCardProps) {
  const content = (
    <>
      <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
        <img
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-white font-semibold text-lg line-clamp-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        {category}
      </p>
    </>
  );

  // Bagian ini digabung jadi satu baris string/pake utility class biasa 
  // supaya tidak ada whitespace liar yang ngerusak utility Tailwind
  const cardClassName = "block w-full max-w-sm sm:max-w-none bg-[#0b1220] rounded-xl p-4 shadow-lg shadow-black/40 hover:scale-[1.03] transition duration-300 ease-in-out";

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={cardClassName}>
        {content}
      </a>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}