import Testimonial from "./components/Testimonial"
import profile1 from "./assets/rocketdab.png"
import profile2 from "./assets/rocketlaunch.png"
import profile3 from "./assets/rocketman.png"
import { useState } from "react"
import Button from "./components/Button"

function App() {
  const [theme, setTheme] = useState('light');
  const handleClick = () => {
    if(theme == 'light') {
      setTheme('dark');
      console.log(theme)
    } else {
      setTheme('light');
      console.log(theme)
    }
  }

  return (
    <div className={'app ' + theme}>
      <h1>Comentarios</h1>
      <Button onClickfn={handleClick} value={theme == 'dark' ? 'light' : 'dark'}/>
      <Testimonial image={profile1} 
        nombre="Carlos Gomez" 
        stars={'⭐⭐⭐⭐⭐'}
        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam vel, eos dicta, odit nulla veniam voluptatibus magnam eaque culpa dignissimos temporibus quod? Amet commodi perspiciatis, iusto assumenda optio hic.' />
      <Testimonial image={profile2} 
        nombre="Pedro Perez" 
        stars={'⭐⭐⭐'}
        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam vel, eos dicta, odit nulla veniam voluptatibus magnam eaque culpa dignissimos temporibus quod? Amet commodi perspiciatis, iusto assumenda optio hic.' />      
      <Testimonial image={profile3} 
        nombre="Rita Repulsa" 
        stars={'⭐⭐'}
        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam vel, eos dicta, odit nulla veniam voluptatibus magnam eaque culpa dignissimos temporibus quod? Amet commodi perspiciatis, iusto assumenda optio hic.' />
        
    </div>
  )
}

export default App
