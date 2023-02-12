import css from "./TaskBlock.module.scss";

const TaskBlock = ({ task }) => {
  return (
    <div id={task.id} className={css.task} title="click to open the task">
      <h4 className={css.name}>{task.name}</h4>
      <div className={css.description}>{task.description}</div>
    </div>
  );
};

export default TaskBlock;
