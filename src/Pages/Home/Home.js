import React from "react";
import "./Home.scss";
import { Consumer, Context } from "../../context";
import List from "../../Components/List/List";

class Home extends React.Component {
  componentDidMount() {
    this.context.itemForDetailPage.id && this.setStyles();
    window.scrollTo(0, this.context.windowScrollPosition);
  }
  setStyles = () => {
    const elementStyle = document.getElementById(
      this.context.itemForDetailPage.id
    ).style;
    elementStyle.transform = `translate(${this.context.cords.x * -1}px, ${this
      .context.cords.y * -1}px)`;
    elementStyle.width = window.innerWidth > 991 ? `40vw` : `100vw`;
    elementStyle.height = window.innerWidth > 991 ? `100vh` : `50vh`;
    elementStyle.backgroundColor = this.context.itemForDetailPage.bg_color;
    elementStyle.opacity = "1";
    elementStyle.animationFillMode = "none";
    elementStyle.animation = "none";
    elementStyle.transition = `opacity 0ms`;

    setTimeout(() => {
      elementStyle.transform = ``;
      elementStyle.width = ``;
      elementStyle.height = ``;
      elementStyle.backgroundColor = ``;
      elementStyle.transition = ``;
      elementStyle.borderRadius = `30px`;
    }, 0);
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div className="home-wrapper">
            <header className="intro">
              <h1>{context.intro.title}</h1>
              <p>{context.intro.description}</p>
            </header>
            <div>
              <List list={context.list} />
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}
Home.contextType = Context;
export default Home;
