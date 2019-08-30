import React from "react";
import "./List.scss";
import ListItem from "../ListItem/ListItem";

const List = ({ list }) => {
  return (
    <ul className="list">
      {list.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
