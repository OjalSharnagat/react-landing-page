import Typed from 'react-typed'

const Hero = () => {
  return (
    <div>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="text-[#FFBF00] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                ACTMIT SOLAR ENERGIE
            </h1>
            <div className='flex justify-center items-center'>
                <p className="md:text-xl sm:text-2xl text-xl font-bold">
                    Empowering Homes with Solar
                </p>
                <Typed 
                 className="md:text-xl sm:text-2xl text-xl pl-2 font-bold text-[#00df9a]"
                 strings={['Innovation', 'Advancement', 'Solutions']}
                 typeSpeed={120} 
                 backSpeed={140} loop
                />
            </div>
        </div>
    </div>
  )
}

export default Hero