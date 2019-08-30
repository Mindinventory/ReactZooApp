import React from "react";
import "./ListItem.scss";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

const ListItem = ({ item }) => {
  return (
    <Consumer>
      {context => (
        <li className="list-item">
          <Link
            to={`/details/${item.id}`}
            id={item.id}
            onClick={() => context.getCords(item.id)}
          >
            <img src={item.img_url} alt={item.title} />
            {/*<h3>{item.title}</h3>*/}
            <div className="bg" style={{ backgroundColor: item.bg_color }} />
          </Link>
        </li>
      )}
    </Consumer>
  );
};

export default ListItem;
