import React from 'react';
import Section from "./Section";
import { ssn, pdp, qr } from "../assets";


const Data = () => {
  return (
    <Section className='bg-gris font-code'>
      
      <div className='max-w-[1000px] mx-auto'>
        <div className="lg:flex mt-4 text-black justify-between">
          {/* First element */}
          <div className='flex mb-4 flex-col items-center'>
            <p className='text-center'>Lands Broker <br />
                N° de Inscripción <br />
                en SSN  Registro <br />
                N° 1699
                </p>
          </div>
          
          {/* Second element */}
          <div className='flex flex-col items-center'>
            <p className='text-center'>Atención al <br /> asegurado: <br /> 
            +54 9 11 7098-5000</p>
                    </div>
                    
          {/* Third element */}
          <div className='flex flex-col items-center'>
            <img src={ssn} alt='Element 3' className='w-[190px] h-[80px] object-contain mb-2' />
          </div>

          <div className='flex flex-col items-center'>
            <img src={pdp} alt='Element 3' className='w-24 h-24 object-contain mb-2' />
          </div>

          <div className='flex flex-col items-center'>
            <img src={qr} alt='Element 3' className='w-24 h-24 object-contain mb-2' />
          </div>

          
        </div>
      </div>
    </Section>
  );
};

export default Data;
