import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="container py-5 my-5" id="faq">
      <div className="py-md-5">
        <h2 className="text-center mb-5 pb-4">FAQ</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="w-100 d-flex justify-content-between align-items-center">
                <span>Accordion Header #1 </span>

                <div
                  className="
                  round-border
                  p-1
                  d-flex
                  justify-content-center
                  align-items-center
                "
                >
                  <div className="ion-expand-icon"></div>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="w-100 d-flex justify-content-between align-items-center">
                <span>Accordion Header #2 </span>

                <div
                  className="
                  round-border
                  p-1
                  d-flex
                  justify-content-center
                  align-items-center
                "
                >
                  <div className="ion-expand-icon"></div>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
