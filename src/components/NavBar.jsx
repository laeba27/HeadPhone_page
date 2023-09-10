
import './NavBar.css'
import logo from '../assets/logo.png'
export default function NavBar() {
  return (
    <div>
      <div className='container'>
        <div className='right-container'>
     <img className='logo' src={logo} alt="" />
        </div>
        <div className='left-container'>
        <h4>product</h4>
        <h4>price</h4>
        <h4>overview</h4>
        <h4>contact</h4>
        </div>

      </div>
    </div>
  )
}
