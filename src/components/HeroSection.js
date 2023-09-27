// HeroSection.js
import React from 'react';
import NFTCard from './NFTCard';

function HeroSection() {
    const backgroundImage = "path-to-your-background-image"; // replace with actual image path or URL
    const logo = "path-to-your-logo"; // replace with actual logo path or URL
    const companyGoal = "Our core goal is to facilitate seamless and instant exchange of SOL-based NFTs for any SPL token, prioritizing user trust and clarity in every transaction.";
    const userNFTs = [
        // Here you should put some fake data to populate NFTCard as an example,
        // or get real data from the state or API call
        { id: 1, image: "path-to-image", name: "NFT 1", price: "2.0 SOL" },
        //... other fake NFT data
    ];

    return (
        <div className="relative min-h-screen bg-black font-sans text-white">
            <img src={backgroundImage} alt="Innovative Background" className="absolute object-cover w-full h-full opacity-50" />
            <div className="relative z-10 p-10 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2 mb-16">
                    <img src={logo} alt="Company Logo" className="mx-auto mb-6 lg:mx-0" />
                    <h1 className="text-5xl font-extrabold text-white lg:text-left mb-4 transform transition-all duration-1000 ease-in-out opacity-0 translate-y-10 animate-fadeInSlideUp">
                        Platform Name
                    </h1>
                    <p className="text-lg text-gray-300 lg:text-left max-w-prose">
                        {companyGoal}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-1/2">
                    {userNFTs.length > 0 ? userNFTs.map(nft => (
                        <NFTCard key={nft.id} image={nft.image} name={nft.name} price={nft.price} />
                    )) : (
                        <p className="col-span-full text-xl text-center text-white">No NFTs found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
