
import './NavBar.css'
import logo from '../assets/apple2.png'
export default function NavBar() {
  return (
    <div>
      <div className='container'>
        <div className='right-container'>
     <img className='logo' src={logo} alt="" />
        </div>
        <div className='left-container'>
        <h4>products</h4>
        <h4>prices</h4>
        <h4>overview</h4>
        <h4>contacts</h4>
        </div>

      </div>
    </div>
  )
}
