import Typed from 'react-typed'

const Hero = () => {
  return (
    <div>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='md:text-xl sm:text-xl text-sm font-semibold text-[#00df9a]'>
                Solar Excellence, Powered by
            </p>
            <h1 className="text-[#FFBF00] md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                ACTMIT SOLAR ENERGIE
            </h1>
            <div className='flex justify-center items-center'>
                <p className="md:text-2xl sm:text-sm text-xl font-bold py-5">
                    Empowering Homes with Solar
                </p>
                <Typed 
                 className="md:text-2xl sm:text-sm text-xl pl-2 font-bold text-[#00df9a]"
                 strings={['Innovation', 'Advancement', 'Solutions']}
                 typeSpeed={120} 
                 backSpeed={140} loop
                />
            </div>
            <p className='md:text-lg text-xl text-gray-500 font-medium'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo voluptas dignissimos possimus eum laborum quo dolorum quisquam nostrum ipsa distinctio quidem perferendis reprehenderit molestias hic totam perspiciatis eligendi, in dolores.
            </p>
            <button className='bg-[#00df9a] w-[160px] rounded-md font-semibold my-6 mx-auto py-2 text-white'>
                Get Quote
            </button>
        </div> 
    </div>
  )
}

export default Hero