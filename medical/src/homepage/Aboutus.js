import React from 'react'
import Header from '../header/Header'
import './homestyle.css'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'

const Aboutus = () => {
  return (
    <div className='aboutus'>
        
            <Header/>
    
        <div className='hompage-banner'>
            <div className='text-center'>
                <h4>About Us</h4>
                <p>Home - <span> About</span></p>
            </div>

        </div>
        <div className=' about-text'>
            {/* <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <img src='https://yesofcorsa.com/wp-content/uploads/2017/05/Hospital-Wallpaper-Download-Free.jpg' />
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <p>The intention to transform, shift the paradigms, and make an indelible impact that will last generations – all starts with a thought! A thought then evolves into an intention driven by unruffled passion. It is this intention that turned Mr. Kamineni Suryanarayana into an entrepreneur and philanthropist.</p>
                    <p>A staunch believer in Karma Yoga, having no attachment to the fruits but deeds alone along with the grand vision of impacting more lives with a noble intention drove Mr. Suryanarayana Kamineni to find the Kamineni Group. Starting with United Steel Allied Industries Pvt. Ltd., in 1966, he stood at the helm of the organization with a crystal clear vision of enhancing lives. Soon after, USAIPL successfully forged the way for several other manufacturing facilities under the aegis of Kamineni Group – Oil Country Tubular Ltd. We credit all our accomplishments to his unwavering vision and ambition.</p>
                </div>
            </div> */}
            <div>
            <div>
                    <p>The intention to transform, shift the paradigms, and make an indelible impact that will last generations – all starts with a thought! A thought then evolves into an intention driven by unruffled passion. It is this intention that turned Mr. Kamineni Suryanarayana into an entrepreneur and philanthropist.</p>
                    <p>A staunch believer in Karma Yoga, having no attachment to the fruits but deeds alone along with the grand vision of impacting more lives with a noble intention drove Mr. Suryanarayana Kamineni to find the Kamineni Group. Starting with United Steel Allied Industries Pvt. Ltd., in 1966, he stood at the helm of the organization with a crystal clear vision of enhancing lives. Soon after, USAIPL successfully forged the way for several other manufacturing facilities under the aegis of Kamineni Group – Oil Country Tubular Ltd. We credit all our accomplishments to his unwavering vision and ambition.</p>
                </div>
                <h5 className='text-danger py-3 mt-3'>Who we are?</h5>
                <p>Health Care is a group of doctors from various specialties and hospitals across Hyderabad, ranging from Internal medicine, General Surgery, Orthopedics, Pediatrics, Obstetrics, Gynecology, Cardiology, Cardio thoracic surgery, Neurology, Neurosurgery, Nephrology, Urology, Plastic surgery, Critical care, Vascular surgery, Interventional radiology, Dentistry and Organ Transplants.</p>
                <h5 className='text-danger'>How we work?</h5>
                <p>We are a group of doctors who admit patients under our care. We are not a referral company like other companies you come across. We provide the patient with consultation options for admission to surgery (if necessary) and post op care is taken care completely by our team. This removes any doubt of the standard of doctors, care provided in the hospitals and post discharge follow up as the patient continues with the same doctor who has seen the patient from the first consultation till post discharge follow up.</p>
            </div>
        </div>
        <div>
            <Footer/>
            <Bottom/>
        </div>
    </div>
  )
}

export default Aboutus