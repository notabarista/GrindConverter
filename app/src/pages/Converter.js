import React, { useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Grinder from "../assets/images/grinder.png";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#F0A600",
    primary50: "#F0A600",
    primary25: "#E5E5E5",
  },
});

const CONVERTER = () => {
  const [selectedGrinder, setSelectedGrinder] = useState(null);
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(null);
  const [selectedGrindSize, setSelectedGrindSize] = useState(null);

  return (
    <div className="converter">
      <div className="container pt-5">
        {/* <h1>Converter</h1>  */}
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <form className="my-5">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Grinder</Form.Label>
                <Select
                  defaultValue={selectedGrinder}
                  onChange={setSelectedGrinder}
                  options={options}
                  theme={theme}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Brew method</Form.Label>
                <Select
                  defaultValue={selectedBrewMethod}
                  onChange={setSelectedBrewMethod}
                  options={options}
                  theme={theme}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Grind size</Form.Label>
                <Select
                  defaultValue={selectedGrindSize}
                  onChange={setSelectedGrindSize}
                  options={options}
                  theme={theme}
                />
              </Form.Group>
            </form>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div
              className="
                  h-100
                  w-100
                  p-3
                  d-flex
                  flex-xl-row flex-column
                  justify-content-lg-end
                  align-items-center
                "
            >
              <img src={Grinder} alt="Grinder" />
              <div className="text-center px-3">
                <p className="mb-0">Filter medium fine between</p>
                <h3>25-35 clicks</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONVERTER;
