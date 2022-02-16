import React,{useEffect} from 'react';
import { Container,Row,Col,Card,CardGroup} from 'react-bootstrap';
import Header from './Header';
import {ADD_CART,FetchProductRequest} from '../Actions/Index'
import { connect } from 'react-redux';
import { getDefaultNormalizer } from '@testing-library/react';

function Product(props) {

const getproducts=()=>{
        props.FetchProductRequest()
      }


useEffect(() => {
  getproducts();
}, [])


  return <div>
      <Container>
          <Header/>
          <Row>
              <Col>
              <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
              </Col>
          </Row>
     
    </Container>

  </div>;
}

const mapStateToProps=(state)=>{
  console.log("state" + JSON.stringify(state))
  return {
    products:state._ToDoProduct
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    FetchProductRequest:()=>dispatch(FetchProductRequest)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Product)

