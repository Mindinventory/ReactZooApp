import React from "react";
import "./Home.scss";
import { Consumer, Context } from "../../context";
import {Link} from "react-router-dom";

class Home extends React.Component {
  state = {
    styles: {}
  }
  componentDidMount() {
    if(this.context.itemForDetailPage.id){
      window.scrollTo(0, this.context.windowScrollPosition)
      this.setState({styles: {
        transform: `translate(${this.context.cords.x * -1}px, ${this.context.cords.y * -1}px)`,
        width: window.innerWidth > 991 ? `40vw` : `100vw`,
        height: window.innerWidth > 991 ? `100vh` : `50vh`,
        backgroundColor: this.context.itemForDetailPage.bg_color,
        opacity: "1",
        animationFillMode: "none",
        animation: "none",
        transition: `opacity 0ms`
        }}, () => {
        setTimeout(() => this.setState({ styles: {
          transform: ``,
          width: ``,
          height: ``,
          backgroundColor: ``,
          opacity: "1",
          animationFillMode: "none",
          animation: "none",
          transition: ``
          }}))
      })
    }
  }

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
              <ul className="list">
                {context.list.map(item => (
                  <li key={item.id} className="list-item">
                    <Link style={this.context.itemForDetailPage.id === item.id ? this.state.styles : {}} to={`/details/${item.id}`} id={item.id} onClick={() => context.getCords(item.id)}>
                      <img src={item.img_url} alt={item.title} />
                      <div className="bg" style={{ backgroundColor: item.bg_color }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}
Home.contextType = Context;
export default Home;
