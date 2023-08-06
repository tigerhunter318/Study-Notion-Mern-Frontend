import React from 'react'
import ContactDetails from '../components/core/ContactPage/ContactDetails'
import ContactUsForm from '../components/core/ContactPage/ContactUsForm'
import Footer from '../components/common/Footer'

const Contact = () => {
  return (
    <div className='bg-richblack-900 text-white' >
      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col justify-between mt-20' >

        <div className='flex flex-col md:flex-row gap-10' >
          <div className='lg:w-[40%]' >
            <ContactDetails />
          </div>


          <div className=' lg:w-[60%] flex flex-col gap-3 border border-richblack-600 rounded-xl p-7 lg:p-14' >
            <h1 className='text-4xl font-semibold text-richblack-5' >Got a Idea? We've got the skills. Let's team up</h1>

            <p className='mb-8 text-richblack-300' >Tell us more about yourself and what you&apos;re got in mind.</p>

            <ContactUsForm />
          </div>
        </div>

        <div className='my-20' >
          <h1 className='text-center mt-8 text-3xl md:text-4xl font-semibold text-richblack-5' >Reviews from other learner</h1>

          {/* TODO - add Reviews section */}
          {/* <ReviewSlider /> */}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
