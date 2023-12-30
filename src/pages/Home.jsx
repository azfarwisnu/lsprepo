// Home.js
import React from "react";
import Screen from "../components/Screen";
import Order from "../components/Order";
import List from "../components/List";
import { Button } from "react-bootstrap";

class Home extends React.Component {
  state = {
    position: "order", // Set initial position to "home"
  };

  toOrder = () => {
    this.setState({
      position: "order",
    });
  };

  toList = () => {
    this.setState({
      position: "list",
    });
  };

  backorder = () => {
    this.setState({
      position: "order",
    });
  };

  render() {
    return (
      <div className="container-fluid">
        {this.state.position === "home" ? (
          <>
            <Screen />
            <button
              className="btn btn-primary button-common"
              onClick={this.toOrder}
            >
              Order Now
            </button>
          </>
        ) : this.state.position === "order" ? (
            <div>
            <Order />
            <div className="order justify-content-center position-relative text-center">
              <Button variant="secondary" onClick={this.toList}>
                checkout
              </Button>
            </div>
          </div>
        ) : this.state.position === "list" ? (
          <>
            <List />
            <div className="order pb-4">
              <div className="row justify-content-center position-relative">
                <div className="mt-3 text-center pt-4 mt-4">
                  <Button variant="secondary" onClick={this.backorder}>
                    Kembali
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default Home;
