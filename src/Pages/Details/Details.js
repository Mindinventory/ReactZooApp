import React from "react";
import "./Details.scss";
import { Context } from "../../context";
import Back from "../../assets/icons/left-arrow.svg";

class Details extends React.Component {
  componentDidMount() {
    this.context.handleDetailPage(this.props.match.params.itemId);
    this.setStyles();
    window.scrollTo(0, 0);
  }
  setStyles = () => {
    const elementStyle = document.getElementById("img-wrapper").style;
    elementStyle.transform = `translate(${this.context.cords.x}px, ${this.context.cords.y}px)`;
    elementStyle.maxWidth = `${this.context.cords.width}px`;
    elementStyle.height = `${this.context.cords.height}px`;
    elementStyle.borderRadius = `30px`;

    setTimeout(() => {
      elementStyle.transform = ``;
      elementStyle.maxWidth = ``;
      elementStyle.height = ``;
      elementStyle.borderRadius = ``;
    }, 0);
  };
  render() {
    const { itemForDetailPage } = this.context;
    const {
      title,
      img_url,
      bg_color,
      description,
      lifespan,
      speed,
      weight,
      facts
    } = itemForDetailPage;
    return (
      <div className="details-wrapper">
        <div
          className="img-wrapper"
          style={{ backgroundColor: bg_color }}
          id={"img-wrapper"}
        >
          <img src={img_url} alt={title} />
        </div>
        <div className="details">
          <span onClick={this.props.history.goBack} className="back">
            <img src={Back} alt="back" width={20} />
            Back to Home
          </span>
          <div className="detail-box">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="detail-box">
            <h3>Lifespan</h3>
            <p>{lifespan}</p>
          </div>
          <div className="detail-box">
            <h3>Speed</h3>
            <p>{speed}</p>
          </div>
          <div className="detail-box">
            <h3>Weight</h3>
            <p>{weight}</p>
          </div>
          <div className="detail-box">
            <h3>Interesting facts</h3>
            <ul>
              {facts &&
                facts.map((item, i) => (
                  <li key={i}>
                    <p>{item}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
Details.contextType = Context;
export default Details;
