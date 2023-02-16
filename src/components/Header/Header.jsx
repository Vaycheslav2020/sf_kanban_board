import css from "./Header.module.scss";
import User from "../User/User";

const Header = () => {
  return (
    <header className={css.header}>
      <span>Awesome Kanban Board</span>
      <User />
    </header>
  );
};

export default Header;
