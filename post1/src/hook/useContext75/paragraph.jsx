import{useContext} from 'react'
import {ThemeContext} from './on12'


function Paragraph() {
  const theme = useContext(ThemeContext)

console.log()
  return (
    <div className={theme}>
      <h2>hello các em gái xinh</h2>
     
    </div>
  )
}
export default Paragraph