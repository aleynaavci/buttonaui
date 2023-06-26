import React from 'react'
import Button from 'buttonaui'
import 'buttonaui/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='primary' text='primary'/>
      <Button type='default' text='default'/>
      <Button type='dashed' text='dashed'/>
      <Button type='text' text='text'/>
      <Button type='link' text='link'/>
    </>
  )
}
export default App
