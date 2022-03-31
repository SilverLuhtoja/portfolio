import './testimonials.scss'


function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
        <h1>Testimonials</h1>
        <div className="container">
            <div className="card">
                <div className="top">
                    <img src="assets/right-arrow.png" className='left' alt="" />
                    <img src="https://images.pexels.com/photos/11519125/pexels-photo-11519125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  className='user'/>
                    <img src="assets/youtube.png" alt=""  className='right'/>
                </div>

                <div className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium ab fugiat veniam modi repellat distinctio quas earum culpa non!</div>
                <div className="bottom">
                    <h3>Alex</h3>
                    <h4>CEO of LAMBDA</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials