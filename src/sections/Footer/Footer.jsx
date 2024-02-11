const Footer = () => {
    return (
        <div className="relative mt-56" style={{fontFamily: "Rubik"}}>
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
                        <div>
                        <h3 className="text-black mb-4 text-xl font-bold">Product</h3>
                        <ul className="text-[#4F5665]">
                            <li className='mt-3'><button>Download</button></li>
                            <li className='mt-3'><button>Pricing</button></li>
                            <li className='mt-3'><button>Locations</button></li>
                            <li className='mt-3'><button>Servers</button></li>
                            <li className='mt-3'><button>Countries</button></li>
                            <li className='mt-3'><button>Blog</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black mb-4 text-xl font-bold">Engage</h3>
                        <ul className="text-[#4F5665]">
                            <li className='mt-3'><button>LashesVPN?</button></li>
                            <li className='mt-3'><button>FAQ</button></li>
                            <li className='mt-3'><button>Tutorials</button></li>
                            <li className='mt-3'><button>About Us</button></li>
                            <li className='mt-3'><button>Privacy Policy</button></li>
                            <li className='mt-3'><button>Terms of Service</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black mb-4 text-xl font-bold">Earn Money</h3>
                        <ul className="text-[#4F5665]">
                            <li className='mt-3'><button>Affiliate</button></li>
                            <li className='mt-3'><button>Become a Partner</button></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
