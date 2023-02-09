import React from "react";
import uniqid from "uniqid";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const dataMock = [
  {
    title: "Backlog",
    issues: [
      {
        id: "12345",
        name: "Sprint bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "234t56",
        name: "Sprint bugfix",
        description: "Fix all the bugs",
      },
    ],
  },
  {
    title: "Ready",
    issues: [
      {
        id: "12345j",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "2y3456",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "2y345d6",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "2y345sd6",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "2yx345sd6",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "2x345sd6",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "234u56j",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "w234u56j",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "w234u56jd",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "234y56j",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "234t56j",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "2y3456j",
        name: "Ready bugfix",
        description: "Fix all the bugs",
      },
    ],
  },
  {
    title: "In Progress",
    issues: [
      {
        id: "12345g",
        name: "Progress bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "234u56g",
        name: "Progress bugfix",
        description: "Fix all the bugs",
      },
    ],
  },
  {
    title: "Finished",
    issues: [
      {
        id: "123455",
        name: "Finished bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "234u564",
        name: "Finished bugfix",
        description: "Fix all the bugs",
      },
      {
        id: "234y563",
        name: "Finished bugfix",
        description: "Fix all the bugs",
      },
    ],
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataMock,
      addingTask: false,
      newTask: {
        id: uniqid(),
        name: "",
        description: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }

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

  onClick = (...arg) => {
    const submit = arg[1];
    const title = arg[0];
    let value;
    if (submit) {
      this.addTask(title);
      value = false;
    } else {
      value = title;
    }

    this.setState({
      addingTask: value,
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
