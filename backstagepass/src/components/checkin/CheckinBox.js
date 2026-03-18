import { useState } from "react";
import AddCheckinModal from "./AddCheckinModal";

const CheckinBox = ({onSubmit}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="checkin-box" onClick={()=>setOpen(!open)}>
        <img className="checkin-avatar" src="https://i.pravatar.cc/40" alt="" />

        <span>Share what you completed today?</span>
        </div>

      {open && <AddCheckinModal close={() => setOpen(false)} onSubmit={onSubmit} />}
    </>
  );
};

export default CheckinBox;
