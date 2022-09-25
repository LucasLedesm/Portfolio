import React from 'react'


const Home = () => {


  return (
    <div className='HomePage'>
      <div class="window">
        <div class="terminal">
          <p class="command">Hello everyone, my name is Lucas.</p>
          <p class="log">
            <span>
              I'm a frontend developer, <br />
              I studied at coderhouse.com, <br />
              looking for my first job in IT
            </span>
          </p>
          <p class="command">Thank You!<br />
            <a href="https://github.com/LucasLedesm">github.com/LucasLedesm</a><br />
          </p>
        </div>
      </div>
      <section className='container TextContainer '>
        <div className='row TextRow'>
          <div className='col-md-6'>
            <h3 className='TitleMe'>LET ME <span className='colorText'>INTRODUCE</span> MY SELF</h3>
            <h6 className='textMe'>
              I fell in love with <span className='colorText'>programming</span>  and I have at least learnt something, I think… 

              I am fluent in classic like, <span className='colorText'>Javascript.</span> 

              My field of Interest's are building new  Web Technologies and Products and also in areas related to <span className='colorText'>web 3.0.</span>

              Whenever possible, I also apply my passion for developing products with <span className='colorText'>Node.js</span>  and Modern <span className='colorText'>Javascript</span> Library and Frameworks  like <span className='colorText'>React.js.</span>
            </h6 >
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home