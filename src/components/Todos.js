import * as React from "react";
import "../css/chat.css";

import { FirestoreCollection } from "react-firestore";

class Todos extends React.Component {
  render() {
    return (
      <FirestoreCollection
        path="todos"
        render={({ isLoading, data }) => {
          return isLoading ? (
            <div>looooding</div>
          ) : (
            <div>
              {data.map(todo => (
                <div className="container">
                  <img
                    src="https://www.w3schools.com/w3images/avatar_g2.jpg"
                    alt="Avatar"
                  />
                  <p>{todo.title}</p>
                  <span className="time-right">11:00</span>
                </div>
              ))}
            </div>
          );
        }}
      />
    );
  }
}

export default Todos;
