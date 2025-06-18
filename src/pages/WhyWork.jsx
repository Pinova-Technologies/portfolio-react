import React from 'react';

const WhyWork = () => {
    return (
        <div className='bg-[#292929]'>
            <div id="why-me" className='flex justify-between w-11/12 mx-auto pt-20'>
            <div className='px-5'>
                <h2 className='text-[#F2F2F2] anta text-5xl'>
                    Why work with me
                </h2>
            </div>

            {/* div 2  */}
            <div className="">
                <div >
                    <h1 className='text-[#F2F2F2] inter text-4xl w-[310px] h-[44px]'>
                        Focus on Quality
                    </h1>
                    <h6 className='text-[#F2F2F2] lato text-lg leading-6 w-[600px] h-[175px]'>
                        I deliver clean, maintainable, and scalable code that ensures high-performing and reliable solutions.
                    </h6>
                </div>

                <div className='-mt-20'>
                <h1 className='text-[#F2F2F2] inter text-4xl w-[470px] h-[44px]'>
                Adaptable and Up-to Date
                    </h1>
                    <h6 className='text-[#F2F2F2] lato text-lg leading-6 w-[600px] h-[175px]'>
                    I stay updated with the latest industry trends, incorporating modern techniques to create responsive and efficient designs
                    </h6>
                </div>

                <div  className='-mt-20'>
                <h1 className='text-[#F2F2F2] inter text-4xl w-[310px] h-[44px]'>
                Team-Driven
                    </h1>
                    <h6 className='text-[#F2F2F2] lato text-lg leading-6 w-[600px] h-[175px]'>
                    I thrive in team environments, bringing strong communication and problem-solving skills to achieve shared goals
                    </h6>
                </div>

            </div>

        </div>
        </div>
    );
};

export default WhyWork;