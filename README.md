# @minimal_ui/style-engine

> Create efficient styles with react

[![NPM](https://img.shields.io/npm/v/@minimal_ui/style-engine.svg)](https://www.npmjs.com/package/@minimal_ui/style-engine) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @minimal_ui/style-engine
```

## Usage

```tsx
import React from 'react'

import { Root } from '@minimal_ui/style-engine'

const App = () => {
  return <Root tag={"h1"} styles={{
    "color": "#e91e63"
  }}>
    Hello Styled component
  </Root>
}

export default App
```

## License

MIT © [singh-taranjeet](https://github.com/singh-taranjeet)
