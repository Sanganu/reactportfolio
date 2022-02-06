import React from "react";
import {Card} from"react-bootstrap";

const ProjectCard = ({details}) => {
    return (<div className="card m-3 p-3">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + details.screenshot} />
            <Card.Body>
                <Card.Title>{details.app}</Card.Title>
                <Card.Text>
                    {details.description}
                </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                <ListGroupItem>{details.description}</ListGroupItem>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem></ListGroupItem>
            </ListGroup> */}
            <Card.Body>
                <Card.Link className="links" href={details.repo}>Github</Card.Link>
                <Card.Link className="links" href={details.live}>Live</Card.Link>
            </Card.Body>
        </Card>
    </div>)
}

export default ProjectCard;
