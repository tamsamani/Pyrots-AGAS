import { useState } from "react";

const MainPage = () => {
  
  const [ switchState, setSwitchState ] = useState(false);

  const toggleSwitch = () => setSwitchState(!switchState);

  return <div>
    <h3 className="text-red-500" >I love You NextJs!</h3>
    <p>the state is <b>{
        (switchState) ? 'Active' : 'Inactive'
      }</b>
    </p>
    <button className="px-4 py-2 bg-blue-500 text-white" onClick={toggleSwitch} >Switch</button>
  </div>;
};

export default MainPage