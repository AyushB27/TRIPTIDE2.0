import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ListTodo} from "lucide-react"; 

const LocnDetails = () => {
    const { loc } = useParams();
    const [destinationDetails, setDestinationDetails] = useState(null);

    const allLocations = [
        { name: "Mumbai", country: "India", img: "https://saibabatravels.com/wp-content/uploads/2019/07/mumbai-gateway-of-india-150051333747-orijgp.jpg", description: "The bustling financial capital and 'City of Dreams', home to the iconic Gateway of India.", population: "20 Million", climate: "Tropical Wet and Dry", attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"], avgCost: "$50-100/day (budget)", guides: ["Local Heritage Tours", "Bollywood Tours"], thingsToDo: ["Explore Colaba Causeway", "Visit Siddhivinayak Temple", "Enjoy Juhu Beach"] },
        { name: "Paris", country: "France", img: "https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn.jpg", description: "The 'City of Love', famous for its Eiffel Tower and romantic ambiance.", population: "2.1 Million", climate: "Temperate", attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"], avgCost: "€150-300/day", guides: ["Paris Walking Tours", "Louvre Museum Guided Tours"], thingsToDo: ["Dine in Montmartre", "Cruise the Seine River", "Stroll along the Champs-Élysées"] },
        { name: "Tokyo", country: "Japan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4Bm1vo5qbGbR48ViIxsGXUBxeUJ090cRgg&s", description: "A vibrant metropolis blending traditional culture with futuristic technology.", population: "14 Million", climate: "Humid Subtropical", attractions: ["Tokyo Skytree", "Shibuya Crossing", "Imperial Palace"], avgCost: "¥10,000-20,000/day", guides: ["Shinjuku Nightlife Tours", "Cultural Kimono Experiences"], thingsToDo: ["Experience a Sumo Stable", "Visit a Maid Cafe", "Explore Ghibli Museum"] },
        { name: "New York City", country: "USA", img: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg", description: "The 'Big Apple', a global hub for finance, fashion, and culture, known for its iconic skyline.", population: "8.5 Million", climate: "Humid Continental", attractions: ["Statue of Liberty", "Central Park", "Times Square"], avgCost: "$150-300/day", guides: ["NYC Bus Tours", "Broadway Insider Tours"], thingsToDo: ["See a Broadway Show", "Walk the Brooklyn Bridge", "Visit a Museum on Museum Mile"] },
        { name: "Dubai", country: "UAE", img: "https://content.r9cdn.net/rimg/dimg/9c/5d/375edbe5-city-6080-166f9a95b45.jpg?width=1366&height=768&xhint=3688&yhint=2622&crop=true", description: "A luxurious city known for its ultramodern architecture and vibrant nightlife, including the Burj Khalifa.", population: "3.1 Million", climate: "Hot Desert", attractions: ["Burj Khalifa", "The Dubai Mall", "Palm Jumeirah"], avgCost: "AED 400-800/day", guides: ["Desert Safari Guides", "City Architectural Tours"], thingsToDo: ["Go Skiing at Ski Dubai", "Experience a Dhow Cruise", "Visit Global Village"] },
        { name: "Rome", country: "Italy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg", description: "The 'Eternal City', rich in ancient history, iconic ruins like the Colosseum, and delicious cuisine.", population: "2.8 Million", climate: "Mediterranean", attractions: ["Colosseum", "Roman Forum", "Trevi Fountain"], avgCost: "€100-200/day", guides: ["Colosseum & Forum Tours", "Vatican City Guides"], thingsToDo: ["Throw a coin in Trevi Fountain", "Explore Trastevere", "Take a Pasta Making Class"] },
        { name: "Sydney", country: "Australia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEJDADOCBmZjLuO6WmN3uVAIYhgxgl3tjvw&s", description: "Home to the iconic Opera House and beautiful harbor, offering a vibrant coastal lifestyle.", population: "5.3 Million", climate: "Temperate Oceanic", attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach"], avgCost: "AUD 100-200/day", guides: ["Opera House Tours", "BridgeClimb Guides"], thingsToDo: ["Surf at Bondi Beach", "Visit Taronga Zoo", "Explore The Rocks historical area"] },
        { name: "Rio de Janeiro", country: "Brazil", img: "https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg", description: "Known for its stunning beaches, carnival celebrations, and the Christ the Redeemer statue.", population: "6.7 Million", climate: "Tropical Savanna", attractions: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"], avgCost: "BRL 200-400/day", guides: ["Favela Tours", "Carnival Experience Guides"], thingsToDo: ["Relax on Copacabana Beach", "Take a cable car up Sugarloaf Mountain", "Hike in Tijuca National Park"] },
        { name: "Cairo", country: "Egypt", img: "https://cdn.thecollector.com/wp-content/uploads/2024/07/history-cairo-monuments.jpg", description: "A historic city, gateway to the ancient pyramids and a treasure trove of artifacts.", population: "9.8 Million", climate: "Hot Desert", attractions: ["Pyramids of Giza", "Khan el-Khalili", "Egyptian Museum"], avgCost: "EGP 500-1000/day", guides: ["Giza Pyramids Expert Guides", "Nile Cruise Guides"], thingsToDo: ["Camel Ride at the Pyramids", "Bargain at Khan el-Khalili Bazaar", "Visit the Citadel of Salah al-Din"] },
        { name: "London", country: "UK", img: "https://railtour.ch/itineraries/destination-tours/London%20-%20Mit%20gutem%20Gewissen-95474/1098/image-thumb__1098__gallery-slider/London%20-%20das%20gr%C3%BCne%20London%20entdecken-199835.5d876693.jpg", description: "A historic global city with landmarks like the Tower of London, Buckingham Palace, and diverse culture.", population: "9 Million", climate: "Temperate Oceanic", attractions: ["Tower of London", "Buckingham Palace", "British Museum"], avgCost: "£100-250/day", guides: ["London Eye Experience", "Jack the Ripper Tours"], thingsToDo: ["Ride the London Eye", "Explore Borough Market", "Catch a West End Show"] }
    ];

    useEffect(() => {
        const foundDestination = allLocations.find(
            (dest) => dest.name.replace(/\s+/g, "").toLowerCase() === loc
        );
        setDestinationDetails(foundDestination);
    }, [loc]);

    if (!destinationDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-gray-700">Destination not found or loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in">
                <div className="relative h-96 md:h-80 lg:h-96">
                    <img
                        src={destinationDetails.img}
                        alt={destinationDetails.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <h1 className="text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                            {destinationDetails.name}
                        </h1>
                    </div>
                </div>

                <div className="p-8 space-y-6">
                    <p className="text-lg text-blue-700 font-semibold">{destinationDetails.country}</p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {destinationDetails.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Key Information</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {destinationDetails.population && <li><span className="font-semibold">Population:</span> {destinationDetails.population}</li>}
                                {destinationDetails.climate && <li><span className="font-semibold">Climate:</span> {destinationDetails.climate}</li>}
                                {destinationDetails.avgCost && <li><span className="font-semibold">Avg. Daily Cost:</span> {destinationDetails.avgCost}</li>}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Top Attractions</h2>
                            {destinationDetails.attractions && (
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    {destinationDetails.attractions.map((attraction, i) => (
                                        <li key={i}>{attraction}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Guides & Services</h2>
                        {destinationDetails.guides && (
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {destinationDetails.guides.map((guide, i) => (
                                    <li key={i}>{guide}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Things to Do</h2>
                        {destinationDetails.thingsToDo && (
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {destinationDetails.thingsToDo.map((activity, i) => (
                                    <li key={i}>{activity}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='mt-8 text-center'>
                        <button className='inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl'><ListTodo className='mr-2'/> Add to Bucket List</button>
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            to="/explore"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            ← Back to Destinations
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LocnDetails;