import React from 'react';

const Footer = () => {
    return (
        <footer className="" style={{fontFamily: "Rubik"}}>
            <div className="container mx-auto py-12 w-full">
                <div className="flex gap-96">
                    <div>
                        <div className="flex items-center mb-8">
                            <img src="../../../public/pngs/logo.png" alt="LashesVPN Logo" className="" />
                        </div>
                        <p className="text-[#4F5665]">
                            <span className='font-bold'>LaslesVPN</span> is a private virtual network that <br /> has unique features and has high security.
                        </p>
                        <div className="flex mt-4">
                            <button>
                                <img src="../../../public/pngs/facebook.png" alt="Facebook" />
                            </button>
                            <button>
                                <img src="../../../public/pngs/twitter.png" alt="Twitter" />
                            </button>
                            <button>
                                <img src="../../../public/pngs/instagram.png" alt="instagram" />
                            </button>
                        </div>
                        <p className="text-[#AFB5C0]">
                            &copy;2024Lasles<span className='font-bold'>VPN</span>
                        </p>
                    </div>
                    <div className='flex w-6/12 items-start justify-between'>
                        <div className="col-span-1">
                        <h3 className="text-black mb-4 text-xl font-bold">Product</h3>
                        <ul className="text-gray-300">
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Servers</a></li>
                            <li><a href="#">Countries</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-black mb-4 text-xl font-bold">Engage</h3>
                        <ul className="text-gray-300">
                            <li><a href="#">LashesVPN?</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-black mb-4 text-xl font-bold">Earn Money</h3>
                        <ul className="text-gray-300">
                            <li><a href="#">Affiliate</a></li>
                            <li><a href="#">Become a Partner</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
