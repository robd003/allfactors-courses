import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  deadline: string;
}

export function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const earlyBirdDeadline = new Date(deadline).getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = earlyBirdDeadline - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex gap-8 justify-center">
      {[
        { value: timeLeft.days, label: 'DAYS' },
        { value: timeLeft.hours, label: 'HOURS' },
        { value: timeLeft.minutes, label: 'MIN' },
        { value: timeLeft.seconds, label: 'SEC' }
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="text-6xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Geist Mono', monospace" }}>
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600 font-semibold tracking-wider" style={{ fontFamily: "Geist, sans-serif" }}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}