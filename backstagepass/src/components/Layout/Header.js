import BroadcastIcon from "../../assets/Icons/LogoIcon";
import SubHeader from "./SubHeader";

const Header = ({activeDay})=>{
  const toggleTheme = () => {
  document.body.classList.toggle("dark");
};
  return (
    <>
<div className="header">

        <div className="logo logo-container">
          <span><BroadcastIcon size={32} />
          </span>
          Backstage<span className="pass">Pass</span>
        </div>

        <div className="header-right">
          <button onClick={toggleTheme}>
🌙
          </button>

          <div className="flame">
            🔥 <span>30</span>
          </div>

          <div className="bell">🔔</div>

          <img
            className="avatar"
            src="https://i.pravatar.cc/40"
            alt="user"
          />

        </div>

      </div>
    <SubHeader activeDay={activeDay+1}/>
    </>
  );
}
export default Header