import "./card.scss";
import TaskBlock from "../TaskBlock/TaskBlock";
import CardButton from "../CardButton/CardButton";
import CreateTask from "../CreateTask/CreateTask";
import DropdownTask from "../DropdownTask/DropdownTask";

const Card = (props) => {
  const { title, data, addingTask } = props;
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-item-wrapper">
        {data
          ? data.map((item) => {
              if (item.title === title) {
                return item.issues.map((task) => {
                  return <TaskBlock key={task.id} task={task} />;
                });
              }
            })
          : null}
        {addingTask === title ? (
          title === data[0].title ? (
            <CreateTask {...props} />
          ) : (
            <DropdownTask {...props} />
          )
        ) : null}
        <CardButton {...props} />
      </div>
    </div>
  );
};

export default Card;
