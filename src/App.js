import React from "react";
import uniqid from "uniqid";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const dataMock = [
  {
    title: "Backlog",
    issues: [],
  },
  {
    title: "Ready",
    issues: [],
  },
  {
    title: "In Progress",
    issues: [],
  },
  {
    title: "Finished",
    issues: [],
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataMock,
      addingTask: false,
      movingTaskId: "",
      newTask: {
        id: uniqid(),
        name: "",
        description: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }

  onClick = (...arg) => {
    const { data } = this.state;
    const title = arg[0];
    const submit = arg[1];
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
    const nameTg = target.name;

    this.setState({
      newTask: Object.assign(this.state.newTask, {
        [nameTg]: value,
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
    let moveTask;
    if (movingTaskId === "") {
      return;
    }

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

    this.setState({
      data: newData,
      movingTaskId: "",
    });
  };

  addTask = (title) => {
    const { data, newTask } = this.state;
    const nameText = newTask.name.replace(/^\s+/, "").replace(/\s+$/, "");
    let newData;

    if (nameText === "") {
      newData = data;
    } else {
      newData = data.map((item) => {
        if (item.title === title) {
          return Object.assign(
            { ...item },
            { issues: item.issues.concat(newTask) }
          );
        }
        return item;
      });
    }

    this.setState({
      data: newData,
      newTask: {
        id: uniqid(),
        name: "",
        description: "",
      },
    });
  };

  render() {
    const { data, newTask, addingTask } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          data={data}
          newTask={newTask}
          addingTask={addingTask}
          handleInput={this.handleInput}
          handleSelect={this.handleSelect}
          onClick={this.onClick}
        />
        <Footer
          active={this.state.data[2].issues.length}
          finished={this.state.data[3].issues.length}
        />
      </div>
    );
  }
}

export default App;
