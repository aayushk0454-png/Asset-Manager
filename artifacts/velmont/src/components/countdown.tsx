import { useEffect, useState } from "react";

// Launch date is fixed 365 days out from when the site first loads this build.
const LAUNCH_DATE = new Date("2027-07-10T00:00:00Z").getTime();

function getTimeLeft() {
  const total = Math.max(LAUNCH_DATE - Date.now(), 0);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units: Array<[string, number]> = [
    ["Days", timeLeft.days],
    ["Hrs", timeLeft.hours],
    ["Min", timeLeft.minutes],
    ["Sec", timeLeft.seconds],
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-8 mb-12 font-serif text-3xl md:text-4xl">
      {units.map(([label, value], i) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="text-foreground/90 tabular-nums">{String(value).padStart(2, "0")}</span>
            <span className="font-sans text-[10px] tracking-widest uppercase mt-2 text-muted-foreground">{label}</span>
          </div>
          {i < units.length - 1 && <span className="mx-2 md:mx-4 text-muted-foreground/50 self-start">:</span>}
        </div>
      ))}
    </div>
  );
}
