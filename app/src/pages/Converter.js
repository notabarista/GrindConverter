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
  const [grindersOptions, setGrindersOptions] = useState([]);
  const [brewingMethodsOptions, setBrewingMethodsOptions] = useState([]);
  const [grindSizesOptions, setGrindSizesOptions] = useState([]);
  const [brewingMethods, setBrewingMethods] = useState(null);
  const [grindSize, setGrindSize] = useState(null);
  const [grindSizeText, setGrindSizeText] = useState(null);
  const [grindSizes, setGrindSizes] = useState(null);
  const mediaURL = useRef(Grinder);
  const toggleAutoText = useRef(true);
  const brewingMethodIndex = useRef();
  const selectedGrinderIndex = useRef();
  const [value, setValue] = useState();

  async function updateBrewingMethodSizes() {
    const resp = await dao.getSizesByGrinderId(
      grinders[selectedGrinderIndex.current].id
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

  // useEffect(() => {
  //   if (grindSizes) {
  //     populateWithTwoArgsOptions(setGrindSizesOptions, grindSizes, "grindSize");
  //   }
  // }, [grindSizes]);

  useEffect(() => {
    if (grinders && grindSizes) {
      populateWithTwoArgsOptions(setGrindSizesOptions, grindSizes, "grindSize");
    }
  }, [grinders, grindSizes]);

  const updateGrindSizesIndex = useCallback(
    (index) => {
      setValue({ value: index, label: grindSizesOptions[index].label });
    },
    [grindSizesOptions]
  );

  const updateGrindSizesText = useCallback(
    (index) => {
      setGrindSizeText(grindSizes[index]["clicksPerRound"]);
    },
    [grindSizes]
  );

  const onChangeGrinder = useCallback(
    (index) => {
      selectedGrinderIndex.current = index;
      updateBrewingMethods();
      mediaURL.current = grinders[index]["grinderMediaUrl"];
      //The url has by default simple quotes
      mediaURL.current = mediaURL.current.split("'").join("");
      toggleAutoText.current = true;
    },
    [grinders, toggleAutoText]
  );

  const onChangeGrindSizes = useCallback(
    (index) => {
      updateGrindSizesIndex(index);
      toggleAutoText.current = false;
      updateGrindSizesText(index);
    },
    [toggleAutoText, updateGrindSizesIndex, updateGrindSizesText]
  );

  const onChangeBrewMethod = useCallback(
    (index) => {
      brewingMethodIndex.current = index;
      setGrindSize(brewingMethods[index]["grindSize"]);
      toggleAutoText.current = true;
    },
    [brewingMethodIndex, brewingMethods, toggleAutoText]
  );

  useEffect(() => {
    if (toggleAutoText.current === false) return;

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
  }, [
    grindSize,
    grindSizesOptions,
    grindSizes,
    updateGrindSizesIndex,
    updateGrindSizesText,
  ]);

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
      <div className="container py-5">
        {/* <h1>Converter</h1>  */}
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <form className="my-5">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Grinder</Form.Label>
                <Select
                  defaultValue={{}}
                  onChange={(e) => {
                    onChangeGrinder(e.value);
                    updateBrewingMethodSizes(brewingMethodIndex.current);
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
                    onChangeBrewMethod(e.value);
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
                    onChangeGrindSizes(e.value);
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
                  justify-content-lg-center
                  align-items-center
                "
            >
              <div>
                <img
                  src={mediaURL.current}
                  className="grinder-img"
                  alt="Grinder"
                />
              </div>
              <div className="text-center ps-3 mt-lg-0 mt-3">
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
