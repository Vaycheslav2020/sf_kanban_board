import React from "react";
import uniqid from "uniqid";
import css from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import emptyData from "./data-mock.json";
import { filterToMoveTask, addingTaskFunction, deleteTask } from "./utils";
const localData = JSON.parse(window.localStorage.getItem("data"));
const initialData = localData ? localData : emptyData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
      addingTask: false,
      movingTaskId: "",
      newTask: {
        id: uniqid(),
        name: "",
        description: "",
      },
    };
  }

  componentDidUpdate() {
    const { data } = this.state;
    window.localStorage.setItem("data", JSON.stringify(data));
  }

  onClick = (title, submit) => {
    const { data } = this.state;
    let value;
    if (submit) {
      if (title === data[0].title) {
        this.addTask(title);
      } else {
        this.moveTask(title);
      }
      value = false;
    } else {
      value = title;
    }
    this.setState({
      addingTask: value,
    });
  };

  handleInput = (event) => {
    const { target } = event;
    const value = target.value;
    const nameKey = target.name;

    this.setState({
      newTask: Object.assign(this.state.newTask, {
        [nameKey]: value,
      }),
    });
  };

  handleSelect = (event) => {
    const { target } = event;
    const value = target.value;

    this.setState({
      movingTaskId: value,
    });
  };

  moveTask = (title) => {
    const { data, movingTaskId } = this.state;
    if (movingTaskId === "") {
      return;
    }
    this.setState({
      data: filterToMoveTask(data, title, movingTaskId),
      movingTaskId: "",
    });
  };

  addTask = (title) => {
    const { data, newTask } = this.state;
    this.setState({
      data: addingTaskFunction(title, newTask, data),
      newTask: {
        id: uniqid(),
        name: "",
        description: "",
      },
    });
  };

  deletingTask = (id) => {
    const { data } = this.state;
    this.setState({
      data: deleteTask(data, id),
    });
  };

  editDescription = (taskId, event) => {
    const { target } = event;
    const value = target.value;
    const { data } = this.state;

    const newDataSetDescription = data.map((item) => {
      return Object.assign(
        { ...item },
        {
          issues: item.issues.map((task) => {
            if (task.id === taskId) {
              return Object.assign({ ...task }, { description: value });
            }
            return task;
          }),
        }
      );
    });

    this.setState({
      data: newDataSetDescription,
    });
  };

  render() {
    const { data, newTask, addingTask } = this.state;
    return (
      <div className={css.App}>
        <Header />
        <Main
          data={data}
          newTask={newTask}
          addingTask={addingTask}
          handleInput={this.handleInput}
          handleSelect={this.handleSelect}
          onClick={this.onClick}
          deletingTask={this.deletingTask}
          editDescription={this.editDescription}
        />
        <Footer
          active={this.state.data[0].issues.length}
          finished={this.state.data[3].issues.length}
        />
      </div>
    );
  }
}

export default App;
