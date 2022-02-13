import {Component} from "react";
import axios from "axios";

const baseURL = "https://nab-grinder-converter.herokuapp.com";

export default class DAO extends Component{


    Test() {
      console.log("Testing");
      axios.get(baseURL + "/grinder/all").then((res) => {
        const grinders = res.data;
        console.log(grinders);
        //this.setState({ data: grinders.data });
      });
    }
  
    render()
    {
      return null
    }

    // render() {
    //   return (
    //     <>
    //       {/* commented this out from the layout */}
  
    //       {/* <ul>
    //         {this.state.data.map((item) => (
    //           <>
    //             <li key={item.grinder}>Name: {item.grinder}</li>
    //             <li key={item.grindSize}>Size: {item.grindSize}</li>
    //           </>
    //         ))}
    //       </ul> */}
    //     </>
    //   );
    // }
  }
