import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 
const KnowYourRights = () => {
  const cardData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/djpqj3nhr/image/upload/v1704871608/ri8mowal2w6h32edhn7m.jpg",
      title: "Right to Education",
      link: "https://en.wikipedia.org/wiki/Right_to_education", 
    },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxtQqOi3rw7oiV5adjHujvMV8lpNrNgKQHg&usqp=CAU",
        title: "Right against Child Labour",
        link: "https://en.wikipedia.org/wiki/Child_labour_law",
      }, 
       {
          id: 3,
          image:"https://res.cloudinary.com/djpqj3nhr/image/upload/c_crop,w_244,h_169/v1704867220/images_jlgwgv.jpg",
          title: "Right to Protection",
          link: "https://vikaspedia.in/education/child-rights/child-protection-1/right-to-protection", 
        },
        {
          id: 4,
          image: "https://res.cloudinary.com/djpqj3nhr/image/upload/v1704880979/r2pvdo6ochs6judupoyh.jpg",
          title: "Right to Identity",
          link: "https://www.humanium.org/en/identity/#:~:text=From%20birth%2C%20each%20individual%20has%20the%20right%20to%20have%20a,the%20eyes%20of%20the%20law.", 
        },
        {
          id: 5,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuGurilUYSkxgrG74niSS-Kxx8ir-KRtG6w&usqp=CAU",
          title: "Right to Participation",
          link: "https://childhub.org/en/child-protection-online-library/fact-sheet-right-participation", 
        },
        {
          id: 6,
          image: "https://res.cloudinary.com/djpqj3nhr/image/upload/c_crop,w_225,h_155/v1704869737/images_pp04uj.jpg",
          title: "Right to Freedom of Expression",
          link: "https://www.humanium.org/en/fundamental-rights/freedom/", 
        },
        {
          id: 7,
          image: "https://res.cloudinary.com/djpqj3nhr/image/upload/v1704870018/images_zantn8.jpg",
          title: "Right aginst Discrimination",
          link: "https://www.unicef.org/reports/rights-denied-discrimination-children", 
        },
        {
          id: 8,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ERpFgGhfGCl0661TvtYxXIgXHJpgc9k4yQ&usqp=CAU",
          title: "Right to Equality",
          link: "https://unacademy.com/content/clat/study-material/logical-reasoning/right-to-equality/", 
        },
  ];

  return (
    <Container className="mt-4" style={{ backgroundColor: 'lightgray' }}>
      <Link to="/mainpage" className="back-button">
        Back
      </Link>
      <div className="heading-box text-center mb">
        <h1>KNOW YOUR RIGHTS</h1>
      </div>
      <Row>
        {cardData.map((card) => (
          <Col key={card.id} sm={6} md={4} lg={4} xl={3} className="mb-4">
            <Card style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src={card.image}
                style={{ objectFit: "fit", height: "100%", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Link to={card.link}>
                  <Button variant="btn btn-outline-warning">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default KnowYourRights;
