import { useState, useEffect } from "react";
const ProgressBar = ({ completedDays }) => {
  const [activeDay, setActiveDay] = useState(1);

  const days = Array.from({ length: 9 }, (_, i) => i + 1);

  useEffect(() => {
    if (completedDays.length > 0) {
      setActiveDay(completedDays[completedDays.length - 1] + 1);
    }
  }, [completedDays]);

  return (
    <div className="sidebar">
      {days.map((day) => {
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
            <span>
              {activeDay === day ? (
                <span className="timer-clock">
                  <svg
                    xmlns="http://www.w3.org"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="13" r="8"></circle>
                    <path d="M12 9v4l2 2"></path>
                    <path d="M10 2h4"></path>
                    <path d="M12 2v3"></path>
                  </svg>
                </span>
              ) : null}
              Day - {day}
            </span>

            {completed && (
              <span className="check">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#30A46c"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
            )}

            {!completed && locked && <span className="lock">🔒</span>}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
