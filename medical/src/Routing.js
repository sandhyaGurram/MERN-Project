import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginForm from './admin/LoginForm'

import Mainpage from './dashboard/Mainpage'
import AddTreat from './treatments/AddTreat'
import GetTreatDetails from './treatments/GetTreatDetails'
import EditTreat from './treatments/EditTreat'
import AddDoctor from './doctor/AddDoctor'
import GetDoctorDetails from './doctor/GetDoctorDetails'
import EditDoctor from './doctor/EditDoctor'
import Home from './homepage/Home'
import OurDoctors from './homepage/OurDoctors'
import Treatmentslist from './homepage/Treatmentslist'
import Contact from './homepage/Contact'
import Aboutus from './homepage/Aboutus'
import Addtestim from './testimonial/Addtestim'
import GetTestimonial from './testimonial/GetTestimonial'
import Testimonial from './homepage/Testimonial'
import Fulldetails from './homepage/Fulldetails'
import GetContact from './contact details/GetContact'
import Profile from './admin/Profile'
import Appointment from './homepage/Appointment'
import GetBooking from './booking/GetBooking'

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/treatmentlist' element={<Treatmentslist/>} />
          <Route path='/appointment/:name/:title' element={<Appointment/>} />
          <Route path='/testimonial' element={<Testimonial/>} />
          <Route path='/ourdoctors' element={<OurDoctors/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/fulldetails/:title' element={<Fulldetails/>}/>
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/dashboard' element={<Mainpage/>} >
              <Route path='' element={<AddTreat/>} />
              <Route path='gettreatdetails' element={<GetTreatDetails/>} />
              <Route path='/dashboard/edittreatment/:id' element={<EditTreat/>} />
              <Route path='doctoradd' element={<AddDoctor/>} />
              <Route path='getdoctordetails' element={<GetDoctorDetails/>} />
              <Route path='/dashboard/editdoctor/:id' element={<EditDoctor/>} />
              <Route path='addtestim' element={<Addtestim/>} />
              <Route path='gettestimonial' element={<GetTestimonial/>} />
              <Route path='getcontact' element={<GetContact/>} />
              <Route path='getbooking' element={<GetBooking/>} />
              

          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing