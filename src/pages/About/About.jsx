import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'animate.css';

const About = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className='mt-20'>
            <div className="container animate__animated animate__bounceIn mx-auto px-2 md:px-0 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-center animate__animated animate__bounceIn mb-8">Welcome to J&W Arts and Crafts</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        At J&W Arts and Crafts, we don't just offer products; we nurture creativity and inspire imagination. Located at the crossroads of artistry and craftsmanship, we redefine the notion of handmade with passion, innovation, and personalized service.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Our commitment to excellence drives us to curate the finest selection of materials and supplies, each meticulously chosen to elevate your artistic journey. From traditional techniques to contemporary trends, every aspect of our offerings is tailored to exceed your expectations.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        But our dedication extends beyond mere products; it's about fostering moments of creativity that resonate deeply. Whether you're a seasoned artisan or a novice crafter, our dedicated team ensures that every interaction is enriching, allowing you to explore, experiment, and immerse yourself in boundless creativity.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        We invite you to embark on a journey of artistic exploration, where every visit is an opportunity to discover, create, and celebrate the beauty of handmade. Experience the essence of creativity at J&W Arts and Crafts and let us redefine your artistic aspirations.
                    </p>
                </div>
            </div>

            <div className='mt-20'>
                <div className="swiper-container animate__animated animate__bounceInUp container mx-auto py-12" style={{ overflowX: 'hidden' }}>
                    <h1 className="text-4xl font-bold text-center mb-10">Meet Our Artisan Team</h1>
                    <div className="swiper-wrapper">
                        <div className='swiper-slide flex justify-center items-center'>
                            <div className="text-center">
                                <img  src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg" alt="Artisan 1" className=" mb-4 mx-auto w-[300px] rounded-2xl" />
                                <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                                <p className="text-lg text-gray-600">Master Woodworker</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex justify-center items-center">
                            <div className="text-center">
                                <img src="https://media.istockphoto.com/id/1437931505/photo/businessman-digital-tablet-or-strategy-planning-in-hotel-conference-lobby-or-airport-travel.webp?b=1&s=170667a&w=0&k=20&c=Vv-Jqr3AkIYRCwup76BHnKzRrzvwQ6HmKSrmLcHPpfQ=" alt="Artisan 2" className=" rounded-2xl mb-4 mx-auto w-[300px]" />
                                <h1 className="text-2xl font-bold text-gray-800">Jane Smith</h1>
                                <p className="text-lg text-gray-600">Expert Knitter</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex justify-center items-center">
                            <div className="text-center">
                                <img src="https://media.northwest.education/wp-content/uploads/2022/02/05162943/pexels-tima-miroshnichenko-5717512-680x380.jpg" alt="Artisan 3" className=" mb-4 mx-auto rounded-2xl w-[300px]" />
                                <h1 className="text-2xl font-bold text-gray-800">Lina Rose</h1>
                                <p className="text-lg text-gray-600">Creative Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
