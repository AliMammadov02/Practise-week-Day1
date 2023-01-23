import React from 'react'
import "./Index.css"
import pro_1 from '../../Image/pro-1.svg'
import pro_2 from '../../Image/pro-2.svg'
function Index() {
  return (
    <>
        <section>
            <h1 className='OurPrograms'>Our Programs</h1>
            <p className='title1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut<br/> neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta<br/> repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        
            <div className='education'>
                <img src={pro_1} alt="as" className='image1'/>
                    <div className='educationRight'>
                        <h2>We Are Excellent In Education</h2>
                        <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Rem maxime nam porro<br/> possimus fugiat quo molestiae illo.</p>
                        <div className='icondiv'>
                            <div className='icon1'>1</div> <span>22,931 Yearly Graduates</span>
                        </div>

                        <div className='icondiv'>
                            <div className='icon2'>2</div> <span>150 Universities Worldwide</span>
                        </div>
                    </div>

            </div>

            <div className='education'>
            <div className='educationRight'>
                        <h2>We Are Excellent In Education</h2>
                        <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Rem maxime nam porro<br/> possimus fugiat quo molestiae illo.</p>
                        <div className='icondiv'>
                            <div className='icon1'>1</div> <span>22,931 Yearly Graduates</span>
                        </div>

                        <div className='icondiv'>
                            <div className='icon2'>2</div> <span>150 Universities Worldwide</span>
                        </div>
                    </div>
            <img src={pro_2} alt="asa" className='image1'/>
            </div>
        
        
        
        
        </section>
    </>
  )
}

export default Index