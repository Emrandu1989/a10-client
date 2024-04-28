const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">J&W Arts and Crafts</h3>
            <p className="text-sm">
              Nurturing creativity with sustainable materials
            </p>
          </div>
          <ul className="flex justify-center md:justify-end space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} J&W Arts and Crafts. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
