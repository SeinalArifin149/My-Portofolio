const StatItem = ({ label, value, }: { label: React.ReactNode, value: string }) => (
  <div className="flex flex-col lg:items-end items-center text-center lg:text-right">
    <span className="text-gray-400 text-sm mb-1">{label}</span>
    <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
  </div>
);

export function Knowledge() {
    return(
        <div className="lg:col-span-3 flex flex-row lg:flex-col justify-center lg:justify-center gap-8 lg:gap-16 order-3">
          <StatItem 
            label={
              <>
                Years of <br className="hidden lg:block"/> Experience
              </>
            } 
            value="2+" 
          />
          <StatItem 
            label={
              <>
                Complete <br className="hidden lg:block"/> Project
              </>
            } 
            value="20+" 
          />
          <StatItem 
            label="Years old" 
            value="21+" 
          />
        </div>
    )
}