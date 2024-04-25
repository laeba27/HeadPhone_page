import smartcase from '../assets/Smart-case.png'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
    <div className='details'>
        <h1>Magical experience</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit rerum quis veritatis ex exercitationem nisi distinctio doloribus facere praesentium dolorum reiciendis, </p>
        <button> Read More</button>
    </div>
      <img className='smartcase' src={smartcase} alt="" />
    </div>
  )
}
