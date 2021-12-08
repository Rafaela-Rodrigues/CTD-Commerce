import { Card, Button } from "react-bootstrap";
import "./styles.scss"

export default function teamCards({ img, name, linkdinUrl, githubUrl }) {
    return (
        <Card className = "team-card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <a href={linkdinUrl} target="_blank" rel="noreferrer">
                <Button variant="primary" className="team-card-button py-2 my-2 linkedin" >Linkedin</Button>
                </a>
                <br/>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                <Button variant="primary" className="team-card-button py-2 my-2 github" >GitHub</Button>
                </a>
            </Card.Body>
        </Card>
    )
}