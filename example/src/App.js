import React from 'react'

import {
  StudentStatusDefault,
  StudentStatusCard,
  StudentStatusButton
} from 'student-status'
import 'student-status/dist/index.css'

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
      <StudentStatusButton />
    </div>
  )
}

export default App
