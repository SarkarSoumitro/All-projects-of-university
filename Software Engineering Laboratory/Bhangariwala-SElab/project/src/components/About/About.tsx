import React from 'react';
// import img1 from '../assets/10001.png'
// import img2 from '../assets/10002.png'
// import img3 from '../assets/10003.png'
// import img4 from '../assets/10005.png'
// import img5 from '../assets/10006.png'
// import img6 from '../assets/10007.png'
// import img7 from '../assets/10009.jpg'
// import img8 from '../assets/10010.png'
// import img9 from '../assets/10008.png'
// import img10 from '../assets/2.png'
// import img11 from '../assets/1.png'
import img1 from '../../assets/image/about/aboutslide.png'
import img2 from '../../assets/image/about/10002.png'
import img3 from '../../assets/image/about/10003.png'
import img4 from '../../assets/image/about/10005.png'
import img5 from '../../assets/image/about/10006.png'
import img6 from '../../assets/image/about/10007.png'
import img7 from '../../assets/image/about/10009.jpg'
import img8 from '../../assets/image/about/10010.png'
import img9 from '../../assets/image/about/10008.png'
import img10 from '../../assets/image/about/2.png'
import img11 from '../../assets/image/about/1.png'
const About = () => {
    return (
        <div>
            {/* first part */}
            <div>
                <img src={img1} className='relative w-full md:h-[650px]' alt="sss" />
                <h3 className='md:absolute text-5xl font-bold top-80 left-20 text-white'>About us</h3>
            </div>
            {/* 2nd part */}
            <div className='mt-20'>
                <p className='text-2xl font-bold text-center max-w-[1200px] mx-auto'>We are here to make recycling easy and accessible for everyone. We help households and businesses take small, smart steps in the right direction and keep valuable resources in circulation.</p>

                <div className='max-w-[1400px] h-auto md:h-[700px]  items-stretch mx-auto mt-20'>
                    <div className='md:flex  gap-11'>

                        <img src={img2} className='w-[600px] mt-[100px] h-[600px] rounded-full' alt="" />

                        <div className=''>
                            <img src={img3} className='w-[300px] h-[300px] rounded-full md:mb-32 md:ml-[350px]' alt="" />
                            <h3 className='text-5xl font-bold mb-10 text-[#001A70]'>Our vision</h3>
                            <p className='text-2xl '>Our mission is to accelerate Australia’s transition to a circular economy. We aim to foster a growing and engaged community that adopts sustainable behaviour. To achieve this, we utilise technology, powerful data, transparent partnerships, and encourage active participation to make recycling easy and trustworthy.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd part */}
            <div className='grid grid-cols-1 items-center gap-5 md:grid-cols-2 w-full md:h-[600px] max-w-[1300px] mx-auto mt-20'>
                <div className='col-span-1'>
                    <h3 className='text-5xl font-bold text-[#001A70] '>Our Team</h3>
                    <p className='text-2xl mt-7'>RecycleSmart was born in September 2019 from co-founders Marco Prayer and Giorgio Baracchi. Since then, RecycleSmart has grown to a tight-knit team of 10 people passionate about recycling (yes!) and a crew of incredible drivers. We are a diverse group with different backgrounds, living along the coast between Melbourne and Byron Bay. </p>
                    <p className='text-2xl mt-7'>Your friendly drivers are contracted locally: they are (even more!) passionate and trained to sort, weigh and assess the breakdown of all the items we collect, and report before delivering them to our partners.</p>
                </div>
                <div className='col-span-1'>
                    <img src={img4} alt="" />
                </div>
            </div>
            {/* 4PART */}
            <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-40 max-w-[1300px] mx-auto gap-10'>
                <div className='col-span-1'>
                    <h3 className='text-5xl font-bold text-[#001A70] '>Our partners</h3>
                    <p className='text-2xl mt-10 font-bold'>Once your items are collected, they are delivered to our recycling partners, whether directly or through our consolidation points.</p>
                    <p className='text-2xl mt-5'>Our partners are:</p>
                    <p className='text-2xl leading-loose mt-8 font-bold'>Soft plastics: APR Plastics. See the process here. <br />

                        Clothes: Australian Red Cross and Upcycle4Better etc. <br />

                        E-Waste: SPC Cycle, Mobile Muster etc. <br />

                        Misfits: Nespresso, Sell & Parker and more!</p>
                    <p className='text-2xl mt-5 font-bold text-[#001A70] '>We are constantly evolving and searching for the most sustainable outcome for the recyclables we collect. </p>
                    <p className='text-2xl mt-5 font-bold text-[#001A70] '>Would you like to partner with us? Get in touch at eugenie@recyclesmart.com</p>
                </div>
                <div className='col-span-1'>
                    <img src={img5} className='w-[600px]' alt="" />
                </div>
            </div>
            {/* 5part */}
            <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-20 max-w-[1300px] mx-auto mt-28'>
                <div className='col-span-1'>
                    <h3 className='text-5xl font-bold text-[#001A70] '>We are carbon neutral</h3>
                    <p className='text-2xl mt-10 font-bold'>Carbon neutrality through carbon offsetting means balancing out the amount of carbon emissions produced by investing in projects that reduce carbon emissions elsewhere.</p>
                    <p className='text-2xl mt-10 font-bold'><u>TRACE</u> has helped calculate the emissions of our day-to-day operations and worked with us to offset our carbon footprint through a program that plants trees in Australia and around the world.</p>
                    <button className="btn btn-active btn-secondary font-bold w-56 mt-16">Find Out More</button>
                </div>
                <div className='col-span-1'>
                    <img src={img6} className='w-[500px]' alt="" />
                </div>
            </div>
            {/* 6part */}
            <div className='grid grid-cols-1 gap-9 items-center md:grid-cols-2 max-w-[1300px] mx-auto mt-28'>
                <div className='col-span-1'>
                    <p className='text-2xl mt-10 font-bold  text-[#001A70] '>We understand that recycling is not the only answer. We believe that tackling the waste problem will take more than one solution. We encourage our residents to reduce and reuse before recycling through our online platform.</p>
                    <p className='text-xl font-semibold mt-20'>Follow our social media or subscribe to our newsletter as we share simple ways to combat plastic pollution and make sustainable changes.</p>
                    <div className='flex mt-16'>
                        <img src={img7} className='md:w-24 w-10' alt="" />
                        <img src={img8} className='md:w-24 w-10' alt="" />
                        <img src={img10} className='md:w-24 w-10' alt="" />
                        <img src={img11} className='md:w-24 w-10' alt="" />
                    </div>
                </div>
                <div className='col-span-1'>
                    <img src={img9} className='w-[600px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;