import React, { useEffect, useState, Component } from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import Header from "./Header";
import { ADD_CART, FetchProductRequest, InsertData } from "../Actions/Index";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);

    /* this.state = {
       first
    } */
  }
  componentDidMount() {
    this.props.FetchProductRequest();
    console.log("product data fetch" + JSON.stringify(this.props.products));
  }

  render() {
    const ProductData = this.props.products.Products;
    return (
      <div>
        <Container>
          <Header />
          <Row>
            {ProductData.length > 0 ? (
              ProductData.map((Pdata, Index) => (
                <Col key={Index}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{Pdata.id}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>{Pdata.title}</Card.Text>
                      <Card.Link href="#">{Pdata.author}</Card.Link>
                      <br />
                      <Button onClick={() => this.props.InsertData(Pdata)}>
                        {" "}
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h3> No Data </h3>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  /* console.log("state" + JSON.stringify(state)) */
  return {
    products: state._ToDoProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchProductRequest: () => dispatch(FetchProductRequest()),
    InsertData: (item) => dispatch(InsertData(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
