import React from 'react'
import Walmart from '../Assets/Logos/Walmart.svg'
import Morgan from '../Assets/Logos/JP Morgan.svg'
import Visa from '../Assets/Logos/Visa.svg'
import Tinder from '../Assets/Logos/Tinder.png'
import Samsung from '../Assets/Logos/Samsung.svg'
import Verizon from '../Assets/Logos/Verizon.svg'

const MainTop = () => {
  return (
    <div className="flex flex-col mt-5 md:mt-10 gap-1 md:gap-3">
        <div className="flex flex-col w-full md:w-1/2">
            <h2 className="md:text-5xl mb-1 text-2xl md:leading-normal font-Prata">Helping companies build better, scalable software.</h2>
            <p className=" text-gray-400 font-Inter">Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more.</p>
        </div>

        <div className="grid py-10 gap-5 md:gap-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:mt-10 justify-center md:">
            <div><img src={Walmart} alt="Walmart" className="h-5 sm:h-7 md:h-12" /></div>
            <div><img src={Morgan} alt="Morgan" className="h-5 sm:h-7 md:h-12" /></div>
            <div><img src={Visa} alt="Visa" className="h-3 sm:h-5 md:h-10" /></div>
            <div><img src={Tinder} alt="Tinder" className="h-3 sm:h-7 md:h-8" /></div>
            <div><img src={Samsung} alt="Samsung" className="h-5 sm:h-7 md:h-12" /></div>
            <div><img src={Verizon} alt="Verizon" className="h-5 sm:h-7 md:h-12" /></div>
        </div>
    </div>
  )
}

export default MainTop