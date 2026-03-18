import { useState , useEffect } from "react";
const ProgressBar = ({completedDays})=>{
   const [activeDay, setActiveDay] = useState(1);

  const days = Array.from({ length: 9 }, (_, i) => i + 1);

  useEffect(() => {
    if (completedDays.length > 0) {
      setActiveDay(completedDays[completedDays.length - 1] + 1);
    }
  }, [completedDays]);

  return (
    <div className="sidebar">

      {days.map(day => {

        const completed = completedDays.includes(day);
        const locked = day > activeDay;

        return (
          <div
            key={day}
            className={`day 
              ${activeDay === day ? "active" : ""}
              ${locked ? "locked" : ""}
            `}
            onClick={() => !locked && setActiveDay(day)}
          >

            <span>Day - {day}</span>

            {completed && <span className="check">✅</span>}

            {!completed && locked && <span className="lock">🔒</span>}

          </div>

        );

      })}

    </div>
  );
}

export default ProgressBar