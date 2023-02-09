import "./Main.scss";
import Card from "../Card/Card";

const Main = (props) => {
  const { data } = props;
  return (
    <main className="main">
      {data.map((item, idx) => {
        return <Card key={item.title} title={item.title} prevTaskList={idx === 0 ? false : data[idx - 1].issues} {...props} />;
      })}
    </main>
  );
};

export default Main;
