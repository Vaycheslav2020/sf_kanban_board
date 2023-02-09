import "./taskBlock.scss"

const TaskBlock = ({ task }) => {
  return (
    <div id={task.id} className="task-block" title="click to open the task">
      <h4 className="task-name">{task.name}</h4>
      <div className="task-description">{task.description}</div>
    </div>
  )
}

export default TaskBlock