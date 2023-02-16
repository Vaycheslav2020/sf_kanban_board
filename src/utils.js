const filterToMoveTask = (data, title, movingTaskId) => {
  let taskItem;
  const newData = data.map((item) => {
    item.issues.map((task) => {
      if (task.id === movingTaskId) {
        return (taskItem = task);
      }
    });
    if (item.title === title) {
      return Object.assign(
        { ...item },
        { issues: item.issues.concat(taskItem) }
      );
    } else {
      return Object.assign(
        { ...item },
        { issues: item.issues.filter((task) => task.id !== movingTaskId) }
      );
    }
  });
  return newData;
};

const deleteTask = (data, id) => {
  const newData = data.map((item) => {
    return Object.assign(
      { ...item },
      { issues: item.issues.filter((task) => task.id !== id) }
    );
  });
  return newData;
};

const addingTaskFunction = (title, newTask, data) => {
  const nameText = newTask.name.replace(/^\s+/, "").replace(/\s+$/, "");
  let newAddData;
  if (nameText === "") {
    newAddData = data;
  } else {
    newAddData = data.map((item) => {
      if (item.title === title) {
        return Object.assign(
          { ...item },
          { issues: item.issues.concat(newTask) }
        );
      }
      return item;
    });
  }
  return newAddData;
};
export { filterToMoveTask, addingTaskFunction, deleteTask };
