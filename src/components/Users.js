import React from "react";

import { FirestoreCollection } from "react-firestore";

export default ({ name }) => (
  <FirestoreCollection
    path="users"
    filter={["name", "==", name]}
    render={({ isLoading, data }) => {
      return isLoading ? (
        <span>dhfhhdf fdfjdjfd djfjdf</span>
      ) : (
        <div>
          <h1>Stories</h1>
          <ul>{data.map(story => <li key={story.id}>{story.name}</li>)}</ul>
        </div>
      );
    }}
  />
);
