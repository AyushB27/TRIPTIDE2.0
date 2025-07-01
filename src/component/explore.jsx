import React, { useState } from 'react';

const ExploreContent = ({ initialDestinationName = '' }) => {
    const [searchText, setSearchText] = useState(initialDestinationName);

    // Updated locn array with specific image URLs for landmarks
    const locn = [
        { name: "Mumbai", country: "India", img: "https://saibabatravels.com/wp-content/uploads/2019/07/mumbai-gateway-of-india-150051333747-orijgp.jpg", description: "The bustling financial capital and 'City of Dreams', home to the iconic Gateway of India." },
        { name: "Paris", country: "France", img: "https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn.jpg", description: "The 'City of Love', famous for its Eiffel Tower and romantic ambiance." },
        { name: "Tokyo", country: "Japan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4Bm1vo5qbGbR48ViIxsGXUBxeUJ090cRgg&s", description: "A vibrant metropolis blending traditional culture with futuristic technology." },
        { name: "New York City", country: "USA", img: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg", description: "The 'Big Apple', a global hub for finance, fashion, and culture, known for its iconic skyline." },
        { name: "Dubai", country: "UAE", img: "https://content.r9cdn.net/rimg/dimg/9c/5d/375edbe5-city-6080-166f9a95b45.jpg?width=1366&height=768&xhint=3688&yhint=2622&crop=true", description: "A luxurious city known for its ultramodern architecture and vibrant nightlife, including the Burj Khalifa." },
        { name: "Rome", country: "Italy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg", description: "The 'Eternal City', rich in ancient history, iconic ruins like the Colosseum, and delicious cuisine." },
        { name: "Sydney", country: "Australia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEJDADOCBmZjLuO6WmN3uVAIYhgxgl3tjvw&s", description: "Home to the iconic Opera House and beautiful harbor, offering a vibrant coastal lifestyle." },
        { name: "Rio de Janeiro", country: "Brazil", img: "https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg", description: "Known for its stunning beaches, carnival celebrations, and the Christ the Redeemer statue." },
        { name: "Cairo", country: "Egypt", img: "https://cdn.thecollector.com/wp-content/uploads/2024/07/history-cairo-monuments.jpg", description: "A historic city, gateway to the ancient pyramids and a treasure trove of artifacts." },
        { name: "London", country: "UK", img: "https://railtour.ch/itineraries/destination-tours/London%20-%20Mit%20gutem%20Gewissen-95474/1098/image-thumb__1098__gallery-slider/London%20-%20das%20gr%C3%BCne%20London%20entdecken-199835.5d876693.jpg", description: "A historic global city with landmarks like the Tower of London, Buckingham Palace, and diverse culture." }
    ];

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            <div className="p-8">
                <input
                    type="text"
                    placeholder="Search your dream destination!"
                    value={searchText}
                    onChange={handleInputChange}
                    className='border-2 rounded-2xl border-gray-600 w-99 flex justify-center p-2'
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {locn.map((destination, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                        <img src={destination.img} alt={destination.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                            <p className="text-gray-600 text-sm">{destination.country}</p>
                            <p className="text-gray-700 mt-2 text-sm">{destination.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ExploreContent;