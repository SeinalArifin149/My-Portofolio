const StatItem = ({
  label,
  value,
}: {
  label: React.ReactNode;
  value: string;
}) => (
  <div className="flex flex-col items-center lg:items-end text-center lg:text-right min-w-[90px]">
    <span className="text-gray-400 text-xs sm:text-sm mb-1 leading-tight">
      {label}
    </span>
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      {value}
    </span>
  </div>
);


export function Knowledge() {
  return (
    <div className="
      lg:col-span-3 
      flex flex-row 
      lg:flex-col 
      justify-around 
      lg:justify-center 
      gap-6 
      lg:gap-16 
      order-3
    ">
      <StatItem
        label={
          <>
            Years of
            <br className="hidden lg:block" />
            Experience
          </>
        }
        value="2+"
      />

      <StatItem
        label={
          <>
            Complete
            <br className="hidden lg:block" />
            Project
          </>
        }
        value="20+"
      />

      <StatItem
        label="Years Old"
        value="21+"
      />
    </div>
  );
}
