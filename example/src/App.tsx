import React, { useState } from 'react'

import { Root } from '@minimal_ui/style-engine'

const App = () => {

  const [styles, setStyles] = useState({
    "color": "#e91e63"
  });

  function changeColor() {
    setStyles({
      ...styles,
      color: "#8a089c"
    })
  }

  return (
    <div>

      <Root tag={"button"}
            onClick={changeColor}
            styles={{
        border: 0,
        color: "white",
        "border-radius": "4px",
        padding: "15px 5px",
        "background-color": "rgb(26,33,135)"
      }}>Change color</Root>

      <Root tag={"h1"} styles={styles}>
        Hello
      </Root>
    </div>
  );
}

export default App
