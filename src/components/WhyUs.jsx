import img1 from '../assets/img1.png'

const WhyUs = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={img1} alt='/' />
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Why choose us?</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Reprehenderit quas fugiat illum nam illo ratione, officia sed numquam amet, 
                    sit beatae porro modi, repellat iure magni delectus sapiente saepe rem.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium py-3 my-6 md:mx-0 mx-auto'>
                    Know More...
                </button>
            </div>
        </div>
    </div>
  )
}

export default WhyUs