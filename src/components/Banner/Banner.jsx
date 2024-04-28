import React from "react";
import img1 from '../../assets/banner/1000_F_677438536_KdQws7ljRo6MRdJdqBlWLifWRnNTS1Rt.jpg';
import img2 from '../../assets/banner/91Wy3CcnSfL.jpg';
import img3 from '../../assets/banner/beautiful-handicrafts-made-of-jute-2H8FD2T.jpg';
import img4 from '../../assets/banner/rope-and-jute-old-vintage-background-concept-on-boards-D4GBWH.jpg';

const Banner = () => {
    return (
        <div className="carousel relative w-full h-[800px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-blue-100 w-full md:w-[900px] text-center'>
                    <h1 className='text-5xl font-bold'> J&W Store</h1>
                    <h2 className='text-2xl font-bold'>Make Your Dream Furniture by Our Expert Engineer</h2>
                    <p className="text-sm">You can make any kind of furniture with us. Customize your design as you want or choose from our ready-made designs.</p>
                </div>
                <img src={img1} className="w-full h-[800px] object-cover" alt="Banner 1" />
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-blue-100 w-full md:w-[900px] text-center'>
                    <h1 className='text-5xl font-bold'> J&W Store</h1>
                    <h2 className='text-2xl font-bold'>Make Your Dream Furniture by Our Expert Engineer</h2>
                    <p className="text-sm">You can make any kind of furniture with us. Customize your design as you want or choose from our ready-made designs.</p>
                </div>
                <img src={img2} className="w-full h-[800px] object-cover" alt="Banner 2" />
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-blue-100 w-full md:w-[900px] text-center'>
                    <h1 className='text-5xl font-bold'> J&W Store</h1>
                    <h2 className='text-2xl font-bold'>Make Your Dream Furniture by Our Expert Engineer</h2>
                    <p className="text-sm">You can make any kind of furniture with us. Customize your design as you want or choose from our ready-made designs.</p>
                </div>
                <img src={img3} className="w-full h-[800px] object-cover" alt="Banner 3" />
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-white bg-slate-400 opacity-90 p-5 w-full md:w-[900px] text-center'>
                    <h1 className='text-5xl font-bold'> J&W Store</h1>
                    <h2 className='text-2xl font-bold'>Make Your Dream Furniture by Our Expert Engineer</h2>
                    <p className="text-sm">You can make any kind of furniture with us. Customize your design as you want or choose from our ready-made designs.</p>
                </div>
                <img src={img4} className="w-full h-[800px] object-cover" alt="Banner 4" />
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
