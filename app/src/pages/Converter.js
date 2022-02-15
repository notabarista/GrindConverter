import React, { useEffect, useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Grinder from "../assets/images/grinder.png";
import {getAllData} from "../components/DAO";

const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#F0A600",
    primary50: "#F0A600",
    primary25: "#E5E5E5",
  },
});

 function CONVERTER () {
  const [grinders, setGrinders] = useState(null);
  const [brewingMethods, setBrewingMethods] = useState(null);
  const [grindSize, setGrindSize] = useState(null);
  const [data, setData] = useState(null);
  const [selectedGrinderIndex, setSelectedGrinderIndex] = useState(null);
  const [grindSizeText, setGrindSizeText] = useState(null);

  function upateGrindSize()
  {
    setGrindSizeText(grindSize[0].label);
  }

  function updateBrewingMethodSizes(brewingMethodIndex)
  {
    console.log(data[selectedGrinderIndex].grinderBrewingMethods[brewingMethodIndex].grindSize);
    let size = data[selectedGrinderIndex].grinderBrewingMethods[brewingMethodIndex].grindSize;
    setGrindSize([{value:size, label:size}])
    
  }

  function updateBrewingMethods(grinderIndex)
  {
    let grinderMethods = data[grinderIndex].grinderBrewingMethods;

    let arr = []
      for(let index=0;index< grinderMethods.length;++index)
      {
        arr.push({value:index, label:grinderMethods[index].brewingMethod});
      }

      setBrewingMethods(arr);
  }


async function fetchData()
{ 
  const resp = await getAllData();
      let arr = []
      for(let index=0;index< resp.data.length;++index)
      {
        arr.push({value:index, label:resp.data[index].grinder});
      }
      setGrinders(arr);
      setData(resp.data);
} 

  useEffect(()=>
  {
   fetchData()
  },[])

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
                  onChange={(e)=>{updateBrewingMethods(e.value);setSelectedGrinderIndex(e.value);}}
                  options={grinders}
                  theme={theme}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Brew method</Form.Label>
                <Select
                  defaultValue={{}}
                  onChange={(e)=>{updateBrewingMethodSizes(e.value);}}
                  options={brewingMethods}
                  theme={theme}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Grind size</Form.Label>
                <Select
                  defaultValue={{}}
                  onChange={upateGrindSize}
                  options={grindSize}
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
                <p className="mb-0">{grindSizeText?"Filter medium fine between":""}</p>
                <h3>{grindSizeText} {grindSizeText?"clicks":""}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONVERTER;
