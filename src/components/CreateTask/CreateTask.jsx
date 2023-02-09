import "./CreateTask.scss";

const CreateTask = (props) => {
  const { newTask, handleInput } = props;
  return (
    <form className="task-block__create">
      <label className="task-label">
        <input
          name="name"
          className="task-input"
          // placeholder="enter the name of the task"
          placeholder="_____________________________________________________________________________________"
          onChange={handleInput}
          value={newTask.name}
        />
      </label>
      <textarea
        name="description"
        className="task-textarea"
        placeholder="add a description?"
        onChange={handleInput}
        value={newTask.description}
      ></textarea>
    </form>
  );
};

export default CreateTask;
