import css from "./Board.module.scss";
import TaskBlock from "../TaskBlock/TaskBlock";
import BoardButton from "../BoardButton/BoardButton";
import CreateTask from "../CreateTask/CreateTask";
import DropdownTask from "../DropdownTask/DropdownTask";

const Board = (props) => {
  const { title, data, addingTask } = props;
  return (
    <div className={css.board}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.itemWrapper}>
        {data
          ? data.map((item) => {
              if (item.title === title) {
                return item.issues.map((task) => {
                  return <TaskBlock key={task.id} task={task} {...props} />;
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
