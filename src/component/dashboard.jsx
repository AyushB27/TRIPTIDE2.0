import React, { useState } from "react";
import Drawer from "./drawer"; 
import ExploreContent from './explore';
import Profile from "./profile.jsx";
import Map from './map.jsx';
import LocnDetails from "./details.jsx";

const Dashboard = () => {
  
  const [selectedContent, setSelectedContent] = useState('explore');

  
  const handleSelectContent = (contentType) => {
    setSelectedContent(contentType);
    
    // if (contentType === 'logout') {
    //   console.log('User logging out...');
    // 
    switch(contentType)
    {
        case 'logout':
            alert("Logout!");
            break;
        case 'explore':
            break;
        case 'map':
            break;
        case 'bucketList':
            break;
        case 'profile':
            break;
        case 'rewards':
            break;
        default:
            alert("WARNING! Unknown content type selected.");
    }    

  };

  
const renderContent = () => {
    switch (selectedContent) {
      case 'explore':
        return <ExploreContent />;
      // Add cases for other content types as you develop them
      case 'map':
        return <Map/>
      // case 'bucketList':
      //   return <BucketListContent />;
      case 'profile':
        return <Profile/>;
      // case 'rewards':
      //   return <RewardsContent />;
      default:
        // Fallback or a message indicating content not found
        return (
          <div className="text-center p-8 text-gray-600">
            Content not found or not yet implemented.
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen "> 
      <Drawer onSelect={handleSelectContent} />

     
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {renderContent()} 
      </main>
    </div>
  );
};

export default Dashboard;