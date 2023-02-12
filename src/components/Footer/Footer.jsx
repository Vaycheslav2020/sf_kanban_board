import css from "./Footer.module.scss";

const Footer = ({ active, finished }) => {
  return (
    <footer className={css.footer}>
      <div className="task-info">
        <span>Active tasks: {active} </span>
        <span>Finished tasks: {finished}</span>
      </div>
      <div className="user-info">
        Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;
      </div>
    </footer>
  );
};

export default Footer;
