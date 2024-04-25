import '../components/Section.css'
import HeadPhoneGirl from "../assets/girl-with-headphones.jpeg"
export default function Section() {
  return (
    <div className='sec-container'>
    <h1 className='sec-title'>Sounds like an epiphany</h1>
      <img className='girl' src={HeadPhoneGirl} alt="" />
      <p className='sec-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, cum? Ratione molestias, inventore nisi reprehenderit similique temporibus expedita culpa animi nulla, provident voluptatem sed adipisci eum illum a debitis nesciunt voluptas. Et at a natus?</p>
    </div>
  )
}
