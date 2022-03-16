import React, { useCallback, useEffect, useRef, useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Grinder from "../assets/images/grinder.png";
import * as dao from "../components/DAO";

const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#F0A600",
    primary50: "#F0A600",
    primary25: "#E5E5E5",
  },
});

function CONVERTER() {
  const [grinders, setGrinders] = useState(null);
  const [grindersOptions, setGrindersOptions] = useState(null);
  const [brewingMethodsOptions, setBrewingMethodsOptions] = useState(null);
  const [grindSizesOptions, setGrindSizesOptions] = useState(null);
  const [brewingMethods, setBrewingMethods] = useState(null);
  const [selectedGrinderIndex, setSelectedGrinderIndex] = useState(null);
  const [grindSize, setGrindSize] = useState(null);
  const [grindSizeText, setGrindSizeText] = useState(null);
  const [grindSizes, setGrindSizes] = useState(null);
  const mediaURL = useRef(Grinder);
  const toggleAutoText = useRef(true);
  const [value, setValue] = useState();

  async function updateBrewingMethodSizes() {
    const resp = await dao.getSizesByGrinderId(
      grinders[selectedGrinderIndex].id
    );
    const grindSizesData = resp.data;
    setGrindSizes(grindSizesData);
  }

  async function updateBrewingMethods() {
    const resp = await dao.getAllBrewingMethods();
    const brewingMethodsData = resp.data;
    setBrewingMethods(brewingMethodsData);
  }

  function populateOptions(setFunction, inArr, arg) {
    let opts = [];
    for (let index = 0; index < inArr.length; ++index) {
      opts.push({ value: index, label: inArr[index][arg] });
    }
    setFunction(opts);
  }

  function populateWithTwoArgsOptions(setFunction, inArr, arg) {
    let opts = [];
    for (let index = 0; index < inArr.length; ++index) {
      opts.push({
        value: index,
        label:
          inArr[index][arg] + " | " + inArr[index]["clicksPerRound"] + " click",
      });
    }
    setFunction(opts);
  }

  async function updateGrinders() {
    const resp = await dao.getAllGrinders();
    const grindersData = resp.data;
    setGrinders(grindersData);
  }

  useEffect(() => {
    if (grindSizes) {
      populateWithTwoArgsOptions(setGrindSizesOptions, grindSizes, "grindSize");
    }
  }, [grindSizes]);

  const updateGrindSizesIndex = useCallback((index) =>
  {
    setValue({ value: index, label: grindSizesOptions[index].label });
  },[grindSizesOptions]);

  const updateGrindSizesText = useCallback((index) =>
  {
    setGrindSizeText(grindSizes[index]["clicksPerRound"]);
    console.log(grindSizeText);
  },[grindSizes, grindSizeText])

  useEffect(() => {

    if(toggleAutoText.current === false)
    return;

    if (grindSize && grindSizesOptions) {
      let index = 0;

      for (; index < grindSizesOptions.length; index++) {
        if (grindSizes[index]["grindSize"] === grindSize) {
          break;
        }
      }

      updateGrindSizesIndex(index);
      updateGrindSizesText(index);
      
    }
  }, [grindSize, grindSizesOptions, grindSizes,updateGrindSizesIndex,updateGrindSizesText]);

  useEffect(() => {
    if (brewingMethods) {
      populateOptions(
        setBrewingMethodsOptions,
        brewingMethods,
        "brewingMethod"
      );
    }
  }, [brewingMethods]);

  useEffect(() => {
    if (grinders) {
      populateOptions(setGrindersOptions, grinders, "grinder");
    }
  }, [grinders]);

  useEffect(() => {
    updateGrinders();
  }, []);

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
                  defaultValue={{}}
                  onChange={(e) => {
                    setSelectedGrinderIndex(e.value);
                    updateBrewingMethods();
                    mediaURL.current = grinders[e.value]["grinderMediaUrl"];
                    //The url has by default simple quotes
                    mediaURL.current = mediaURL.current.split("'").join("");
                  }}
                  options={grindersOptions}
                  theme={theme}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Brew method</Form.Label>
                <Select
                  defaultValue={{}}
                  onChange={(e) => {
                    updateBrewingMethodSizes(e.value);
                    setGrindSize(brewingMethods[e.value]["grindSize"]);
                    toggleAutoText.current = true;
                  }}
                  options={brewingMethodsOptions}
                  theme={theme}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Grind size</Form.Label>
                <Select
                  value={value}
                  defaultValue={{}}
                  onChange={(e) => {
                    updateGrindSizesIndex(e.value);
                    toggleAutoText.current = false;
                    updateGrindSizesText(e.value);
                  }}
                  options={grindSizesOptions}
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
              <img src={mediaURL.current} alt="Grinder" />
              <div className="text-center px-3">
                <p className="mb-0">
                  {grindSizeText ? "Filter medium fine between" : ""}
                </p>
                <h3>
                  {grindSizeText} {grindSizeText ? "clicks" : ""}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CONVERTER;
