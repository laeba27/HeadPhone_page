import AirPods from '../assets/airpods-max.png'
import '../components/Header.css'
import pods from '../assets/Pods.png'
export default function Header() {
  return (
    <div className='container'>
    <div className='white-title'>
    <h1>Air Pods Max</h1>  
    </div>
      <img className='headphones' src={AirPods} alt="" />
      <div className='content'>
        <h1>air pods max</h1><br />
        <p className='content-para'>
            The new Apple Air Pods Max are the most powerful wireless earbuds in history, with a 20W output and up to six hours is Requires.
        </p>
        <button className='Read-more'>Read More</button>
      </div>
      <img className='pods' src={pods} alt="" />
    </div>
  )
}
