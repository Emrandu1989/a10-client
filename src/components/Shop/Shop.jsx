 
 import img from '../../assets/shop/antique-furniture-store-wooden-goods-104771111.webp';
 import img2 from '../../assets/shop/inca-market-lima-per-AE2DND.jpg';
 import img3 from '../../assets/shop/istockphoto-1448482004-612x612.jpg';
 import img4 from '../../assets/shop/souvenir-shop-selling-hand-made-african-arts-and-crafts-on-long-street-cape-town-south-africa-2BADBXE.jpg';


const Shop = () => {
    return (
        <>
                 <div className='flex mx-12'>
                 <div className=' w-1/2 flex flex-wrap gap-5 '>
                 <img className='w-[400px] h-[500px] rounded-lg' src={img} alt="" />
                 <img className='w-[400px] h-[500px] rounded-lg ' src={img2} alt="" />
                 <img className='w-[400px] h-[500px] rounded-lg' src={img3} alt="" />
                 <img className='w-[400px] h-[500px] rounded-lg' src={img4} alt="" />
                </div>  
                 <div className='w-1/2'>
                      <h2 className='text-4xl font-bold text-center text-gray-400'>Welcome To Our Shop</h2>
                   <div className='space-y-5 my-5 text-cyan-800'>

                   <p>Welcome to J&W Store, where craftsmanship meets sustainability. Nestled in the heart of Dhaka our shop is a haven for those who appreciate the beauty of natural materials and handcrafted creations.    </p>

<p>
At J&W Store , we specialize in jute and wooden crafts, offering a curated selection of sustainable home decor, accessories, and gifts. Each piece is meticulously crafted by skilled artisans, blending traditional techniques with contemporary designs to create timeless treasures.
</p>

<p>
Our commitment to sustainability is at the core of everything we do. We source our materials responsibly, ensuring that every jute fiber and wooden grain is ethically harvested and environmentally friendly. By choosing our products, you not only adorn your space with elegance but also contribute to the preservation of our planet.
</p>

<p>
Step into our shop and explore a world of creativity and innovation. From intricately woven jute baskets to finely carved wooden sculptures, each item tells a story of craftsmanship and dedication. Whether you're decorating your home or searching for the perfect gift, you'll find inspiration at every corner.
</p>
     <p>
     Join us in celebrating the beauty of nature and the artistry of human hands. Experience the warmth of jute, the richness of wood, and the joy of sustainable living at [Your Shop Name]. Visit us today and discover the essence of rustic elegance.
     </p>
 
                   </div>
                </div>   
                 </div>
        </>
    );
};

export default Shop;