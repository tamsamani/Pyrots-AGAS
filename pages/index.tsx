import React, { useState } from "react";
import Link from 'next/link';

import Button from '../components/Button';

const MainPage = () => {
  
  const [ switchState, setSwitchState ] = useState(false);

  const toggleSwitch = () => setSwitchState(!switchState);

  return <div>
    <h3 className="text-red-500" >I love You NextJs!</h3>
    <p>the state is <b>{(switchState) ? 'Active' : 'Inactive'}</b></p>
    <Button color='blue' className="ms-1" onClick={toggleSwitch} >Switch</Button>

    <Link href="/stories" ><a><Button className="" >go to here</Button></a></Link>
  </div>;
};

export default MainPage