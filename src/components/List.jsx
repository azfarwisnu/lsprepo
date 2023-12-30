import React from "react";
import { Card, Button } from "react-bootstrap";

class List extends React.Component {
  state = {
    items: [
      { id: 1, itemName: "Food Item 1", quantity: 1 },
      { id: 2, itemName: "Food Item 2", quantity: 1 },
      // Add more items as needed
    ],
  };

  handleAdd = (itemId) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };

  handleSubtract = (itemId) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      ),
    }));
  };

  handleClearOrder = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div className="order">
        <div className="row justify-content-center position-relative">
          <div className="col-12 col-md-4 p-0 vh-100 list">
            <div className="vh-100 color-primary top-order">
              <div className="content-top-order mx-3 pt-4">
                <span>Dapur Bunda Bahagia</span>
                <p>Pesan makanan mu sendiri di app</p>
              </div>
            </div>
            <div className="px-4 pt-4 content spaning pb-4">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-center">My order</span>
                <Button variant="primary" onClick={this.handleClearOrder}>
                  Clear Order
                </Button>
              </div>
              <br />
              <div className="col-12 order-list">
                {this.state.items.map((item) => (
                  <OrderItem
                    key={item.id}
                    itemName={item.itemName}
                    quantity={item.quantity}
                    onAdd={() => this.handleAdd(item.id)}
                    onSubtract={() => this.handleSubtract(item.id)}
                  />
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const OrderItem = ({ itemName, quantity, onAdd, onSubtract }) => (
  <Card className="mb-3 border-0 shadow">
    <div className="d-flex align-items-center">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/50" // Replace with actual image URL
        alt={itemName}
        className="mr-3" // Margin to separate image and text
      />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            Quantity: {quantity}
          </div>
          <div>
            <Button variant="outline-primary" size="sm" onClick={onSubtract}>
              -
            </Button>{" "}
            <Button variant="outline-primary" size="sm" onClick={onAdd}>
              +
            </Button>
          </div>
        </div>
      </Card.Body>
    </div>
  </Card>
);

export default List;
