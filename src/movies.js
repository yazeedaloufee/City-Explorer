import React from 'react'


import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Row from 'react-bootstrap/Row'

class Movies extends React.Component {

    render() {
        console.log(4);
        console.log(this.props.moviesArray)
        return (

            <Row xs={1} sm={2} md={3} lg={4} className="g-4">

                {

                    this.props.moviesArray.map(movie => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={movie.image_url} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>overview:{movie.overview}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>popularity:{movie.popularity}</ListGroupItem>
                                    <ListGroupItem>released_on,{movie.released_on}</ListGroupItem>
                                    <ListGroupItem>total_votes,{movie.total_votes}</ListGroupItem>
                                </ListGroup>
                                {/* <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body> */}
                            </Card>
                        )

                    })
                }
            </Row>
       )
    }
}

export default Movies;