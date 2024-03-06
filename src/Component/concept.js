import React from "react";
import { Col,  Container,  Row } from "react-bootstrap";
import SideBar from "./SideBar";

const Concept = () => {
  return (
  
      <div style={{ display: "flex"}}>
        <Container>
        <div>
          {" "}
          <Row>
            <Col className="subject" xs="12" lg="10" md="8" sm="6">
              Fish Tech is the next revolution in fish farming
            </Col>

            <Col
              xs="8"
              lg="10"
              md="8"
              sm="6"
              className="subject2"
            
            >
              <b>
                {" "}
                Fish Tech is a full automated and stable fish farming system
                that can build the appropriate environment for all types of fish
                in all regions of the world to meet all the needs and
                expectations of the world in terms of quality and quantity with
                global characteristics
              </b>
            </Col>

            <Col className="subject" xs="8" lg="10" md="8" sm="6">
              <b>What we do?????? </b>
            </Col>
            <Col
              xs="8"
              lg="10"
              md="8"
              sm="6"
              className="subject2"
            >
              <b>
                {" "}
                1- production large quantities of fish through smart devices
                controls. Our system can enhance production and the ability to
                provide a suitable environment for growing any type of fish.
                This is achieved by controlling water temperature, pH levels,
                salinity, and dissolved oxygen levels. Consequently,
                high-quality fish are produced, enabling us to export to global
                markets, thereby contributing to foreign currency reserves.
              </b>
            </Col>
            <Col className="subject" xs="8" lg="10" md="8" sm="6">
              <b>2-Monitoring system to track fish growth. </b>
            </Col>
            <Col
              xs="8"
              lg="10"
              md="8"
              sm="6"
              className="subject2"
            >
              <b>
                Automation systems are employed to minimize errors, along with a
                comprehensive monitoring system to track fish growth, predict
                any potential diseases, and intervene quickly to avoid
                significant losses.
              </b>
            </Col>
            <Col className="subject" xs="8" lg="10" md="8" sm="6">
              <b>3-Nothing by luck. </b>
            </Col>
            <Col
              xs="8"
              lg="10"
              md="8"
              sm="6"
              className="subject2"
            >
              <b>
                Our system contains sensors to give accurate measurements for
                everything, and there is also an automatic feeding system to
                save on feed, all to ensure the quality of the fish.{" "}
              </b>
            </Col>
            <Col className="subject" xs="8" lg="10" md="8" sm="6">
              <b>4-Control the world! </b>
            </Col>
            <Col
              xs="8"
              lg="10"
              md="8"
              sm="6"
            >
              <b>
                We can help our customers to see and control the system through
                any portable device through the IIOT system{" "}
              </b>
            </Col>
          </Row>
        </div>
        </Container>
        <div >
          <SideBar />
        </div>
       
      </div>
   
  );
};

export default Concept;
