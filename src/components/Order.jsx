// Order.js
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

class Order extends React.Component {

    
  render() {
    return (
    <div className="order">
      <div className="row justify-content-center position-relative">
        <div className="col-12 col-md-4 p-0 vh-100">
          <div className="vh-100 color-primary top-order">
            <div className="content-top-order mx-3 pt-4">
              <span>Dapur Bunda Bahagia</span>
              <p>Pesan makanan mu sendiri di app</p>
            </div>
          </div>
          <div className="col-12 content-order">
            <div className="d-flex justify-content-between align-items-center p-3">
              <h5 className="color-txt-primary">Menu List</h5>
              <div>
                <Button variant="warning" size="sm" className="mr-2 mx-1">
                  Makanan
                </Button>
                <Button variant="warning" size="sm" className="mr-2 mx-1">
                  Minuman
                </Button>
                <Button variant="warning" size="sm" className="mx-1">
                  Snack
                </Button>
              </div>
            </div>
            <Row>
                {/* Box kiri */}
                <Col xs={6}>
                  <Card className="mb-3 border-0 shadow">
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/1018/400/200"
                      alt="Makanan 1"
                    />
                    <Card.Body>
                      <Card.Title>Chicken triyaki</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>Rp. 20.000</div>
                        <Button
                          variant="primary"
                          size="sm"
                          className="d-flex align-items-center"
                        >
                          <i className="bi-cart-plus"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card className="mb-3 border-0 shadow">
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/1018/400/200"
                      alt="Makanan 1"
                    />
                    <Card.Body>
                      <Card.Title>Chicken triyaki</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>Rp. 20.000</div>
                        <Button
                          variant="primary"
                          size="sm"
                          className="d-flex align-items-center"
                        >
                          <i className="bi-cart-plus"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>  
                <Col xs={6}>
                  <Card className="mb-3 border-0 shadow">
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/1018/400/200"
                      alt="Makanan 1"
                    />
                    <Card.Body>
                      <Card.Title>Chicken triyaki</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>Rp. 20.000</div>
                        <Button
                          variant="primary"
                          size="sm"
                          className="d-flex align-items-center"
                        >
                          <i className="bi-cart-plus"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card className="mb-3 border-0 shadow">
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/1018/400/200"
                      alt="Makanan 1"
                    />
                    <Card.Body>
                      <Card.Title>Chicken triyaki</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>Rp. 20.000</div>
                        <Button
                          variant="primary"
                          size="sm"
                          className="d-flex align-items-center"
                        >
                          <i className="bi-cart-plus"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Kolom kanan untuk tombol */}
              </Row>
            {/* Tambahkan box lainnya sesuai kebutuhan */}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Order;
