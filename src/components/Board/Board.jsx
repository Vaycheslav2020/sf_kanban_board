import "./Board.scss";
import TaskBlock from "../TaskBlock/TaskBlock";
import BoardButton from "../BoardButton/BoardButton";
import CreateTask from "../CreateTask/CreateTask";
import DropdownTask from "../DropdownTask/DropdownTask";

const Board = (props) => {
  const { title, data, addingTask } = props;
  return (
    <div className="board">
      <h3 className="board-title">{title}</h3>
      <div className="board-item-wrapper">
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
        <BoardButton {...props} />
      </div>
    </div>
  );
};

export default Board;
