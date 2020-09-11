# Student Status Components for React

[![NPM](https://img.shields.io/npm/v/student-status.svg)](https://www.npmjs.com/package/student-status) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save student-status

yarn add student-status
```

## Usage

```js
import React from 'react'

import {
  StudentStatusDefault,
  StudentStatusCard,
  StudentStatusButton
} from 'student-status'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
      }}
    >
      <StudentStatusDefault />
      <StudentStatusCard />
      <StudentStatusButton
        logoWidth={20}
        fontSize='1rem'
        padding='0.5rem 1rem'
        lineHeight='1.5rem'
      />
    </div>
  )
}

export default App
```
