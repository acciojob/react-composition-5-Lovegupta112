
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";
const App = () => {

  const tabs1=[
    {
      title:'Tab 1',
      content:'Content for Tab 1'
    },
    {
      title:'Tab 2',
      content:'Content for Tab 2'
    },
    {
      title:'Tab 3',
      content:'Content for Tab 3'
    }
  ]
  const tabs2=[
    {
      title:'Tab A',
      content:'Content for Tab A'
    },
    {
      title:'Tab B',
      content:'Content for Tab B'
    },
    {
      title:'Tab C',
      content:'Content for Tab C'
    }
  ]
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs info={tabs1} id='tabs1'/>
        <Tabs info={tabs2} id='tabs2'/>
    </div>

  )
}

export default App
