import css from "./CreateTask.module.scss";

const CreateTask = (props) => {
  const { newTask, handleInput } = props;
  return (
    <form className={css.createTask}>
      <label className={css.label}>
        <input
          name="name"
          className={css.input}
          // placeholder="enter the name of the task"
          placeholder="_____________________________________________________________________________________"
          onChange={handleInput}
          value={newTask.name}
        />
      </label>
      <textarea
        name="description"
        className={css.textarea}
        placeholder="add a description?"
        onChange={handleInput}
        value={newTask.description}
      ></textarea>
    </form>
  );
};

export default CreateTask;
