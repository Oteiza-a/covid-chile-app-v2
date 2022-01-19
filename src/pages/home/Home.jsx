import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { BiHomeAlt } from "react-icons/bi"

import { NavMenu } from "../../components/nav-menu/NavMenu";

import "./Home.css";

export function Home() {
  let navigate = useNavigate();

  const menuItems = [
    { text: 'Home', iconNode: <BiHomeAlt size={25} /> },
    { text: 'About', iconNode: <BiHomeAlt size={25} /> },
  ]

  return (
    <div className="home-container">
      <div className="basic-page-template">
        <Container fluid>
          <Row>

            <Col sm={3}>
              <NavMenu items={menuItems} />
            </Col>

            <Col sm={9}>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
}
