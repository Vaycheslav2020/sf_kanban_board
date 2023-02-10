const filterToMoveTask = (data, title, movingTaskId) => {
  let moveTask;
  const newData = data.map((item) => {
    item.issues.map((task) => {
      if (task.id === movingTaskId) {
        return (moveTask = task);
      }
    });
    if (item.title === title) {
      return Object.assign(
        { ...item },
        { issues: item.issues.concat(moveTask) }
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
export { filterToMoveTask, addingTaskFunction };
