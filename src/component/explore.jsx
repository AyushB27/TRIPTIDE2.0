import React, { useState, useEffect } from 'react';
import { Search,Heart } from 'lucide-react';
import { Navigate, useNavigate } from "react-router-dom";

const ExploreContent = ({ initialDestinationName = '' }) => {
    const [searchText, setSearchText] = useState(initialDestinationName);
    const [filteredLocations, setFilteredLocations] = useState([]);
    const navigate = useNavigate();

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

    useEffect(() => {
        const filtered = locn.filter(destination =>
            destination.name.toLowerCase().includes(searchText.toLowerCase()) ||
            destination.country.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredLocations(filtered);
    }, [searchText]);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };
    // const toDetails=(loc)=>
    // {
    //     navigate(`/details/${loc.toLowerCase()}`);
    // }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-10 lg:p-12 rounded-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800 tracking-tight animate-fade-in-down">
                Discover Your Next Adventure
            </h1>

            <div className="relative mb-12 max-w-2xl mx-auto">
                <input
                    type="text"
                    placeholder="Search your dream destination! (e.g., Paris, Japan)"
                    value={searchText}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 text-lg shadow-md hover:shadow-lg"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>

            {filteredLocations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredLocations.map((destination, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] group"
                        >
                            <div className="relative w-full h-56 md:h-64 overflow-hidden">
                                <img
                                    src={destination.img}
                                    alt={destination.name}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{destination.name}</h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-gray-500 text-base mb-2 font-medium">{destination.country}</p>
                                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                                    {destination.description}
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <button className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
                                            key = {index}
                                            onClick={() => navigate(`/details/${destination.name.replace(/\s+/g, "").toLowerCase()}`)}
                                    >
                                        View Details
                                    </button>
                                    
                                    <button className='ml-4 text-gray-500 hover:text-red-500 transition-colors duration-300 '>
                                        <Heart size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-600 text-xl md:text-2xl mt-20">
                    <p>No destinations found matching "{searchText}".</p>
                    <p className="mt-4">Try a different search term!</p>
                </div>
            )}
        </div>
    );
};

export default ExploreContent;