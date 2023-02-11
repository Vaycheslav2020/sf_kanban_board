import React from "react";
import uniqid from "uniqid";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import emptyData from "./data-mock.json";
import { filterToMoveTask, addingTaskFunction } from "./utils";

const initialData =
  JSON.parse(window.localStorage.getItem("data")) || emptyData;

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
