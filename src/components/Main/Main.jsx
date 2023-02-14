import { BrowserRouter, Routes, Route } from "react-router-dom";
import css from "./Main.module.scss";
import Board from "../Board/Board";
import ViewingTask from "../ViewingTask/ViewingTask";

const Main = (props) => {
  const { data } = props;
  return (
    <main className={css.main}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={data.map((item, idx) => {
              return (
                <Board
                  key={item.title}
                  title={item.title}
                  prevTaskList={idx === 0 ? false : data[idx - 1].issues}
                  {...props}
                />
              );
            })}
          ></Route>
          <Route path={"/:taskId"} element={<ViewingTask {...props} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
