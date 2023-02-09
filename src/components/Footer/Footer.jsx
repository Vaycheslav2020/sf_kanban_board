import "./footer.scss";

const Footer = ({ active, finished }) => {
  return (
    <footer className="footer">
      <div className="task-info">
        <span>Active tasks: &lt;{active}&gt; </span>
        <span>Finished tasks: &lt;{finished}&gt;</span>
      </div>
      <div className="user-info">
        Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;
      </div>
    </footer>
  );
};

export default Footer;
