import React, { useState } from "react";
import css from "./User.module.scss";
import { ReactComponent as UserIcon } from "./Vector.svg";
import { ReactComponent as Arrow } from "./Arrow.svg";

const User = () => {
  const [open, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!open);
  };

  return (
    <div className={css.user}>
      <button onClick={handleClick} className={css.userIcon}>
        <UserIcon />
      </button>
      <Arrow className={open ? css.arrow : css.arrow + " " + css.arrowRotate} />
      {open ? (
        <div className={css.menu}>
          <a>Profile</a>
          <a>Log Out</a>
        </div>
      ) : null}
    </div>
  );
};
export default User;
