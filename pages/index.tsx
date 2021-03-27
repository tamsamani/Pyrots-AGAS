import { useState } from "react";

const MainPage = () => {
  
  const [ switchState, setSwitchState ] = useState(false);

  const toggleSwitch = () => setSwitchState(!switchState);

  return <div>
    <h3>I love You NextJs!</h3>
    <p>the state is {
      do {
        if (switchState) <b>Active</b>;
        else <b>Inactive</b>;
      }
    }</p>
    <button onClick={toggleSwitch} >Switch</button>
  </div>;
};

export default MainPage