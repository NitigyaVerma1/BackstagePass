const SubHeader = ({activeDay}) => {
  return (
    <div className="sub-header">

      <div className="sub-left">

        <span className="back">
          ← Back
        </span>

        <div className="divider"></div>

        <span className="day day-subheader">
          Day {activeDay} of 9
        </span>

      </div>

      <div className="challenge-title">
        9-Day Fitness Challenge
        <span className="info">ⓘ</span>
      </div>

    </div>
  );
}
export default SubHeader