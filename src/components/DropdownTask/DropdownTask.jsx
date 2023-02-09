import "./DropdownTask.scss";
import React from "react";
import { ReactComponent as Arrow } from "./arrow.svg";
import { render } from "@testing-library/react";

class DropdownTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prevTaskList } = this.props;
    return (
      <div className="dropdown">
        <select className="dropdown-select">
          {prevTaskList
            ? prevTaskList.map((task) => {
                return (
                  <option
                    className="dropdown-option"
                    key={task.id}
                    value={task.id}
                  >
                    {task.name}
                  </option>
                );
              })
            : null}
        </select>
        <Arrow className="dropdown-arrow" />
      </div>
    );
  }
}

export default DropdownTask;
