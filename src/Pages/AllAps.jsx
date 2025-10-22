import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appsData } from '../Data/appsData';
import LoadingSpinner from '../components/LoadingSpinner';

const AllApps = () => {
  const [apps, setApps] = useState(appsData);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    setTimeout(() => setLoading(false), 300); 
  }, []);

  useEffect(() => {
    let filtered = appsData;

   
    if (search) {
      filtered = filtered.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    
    if (sort === 'high-low') filtered.sort((a, b) => b.downloads - a.downloads);
    else if (sort === 'low-high') filtered.sort((a, b) => a.downloads - b.downloads);

    setApps(filtered);
    setShowAll(false); 

  }, [search, sort]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  if (loading) return <LoadingSpinner />;
  const displayedApps = showAll ? apps : apps.slice(0, 20);
  console.log("Displayed apps:", displayedApps.length);

  return (
    <div className="all-apps py-8 bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">

        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">All Applications</h1>
          <p className="text-gray-600">Browse our complete app collection</p>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-lg">
            <span className="font-bold">{apps.length}</span> apps available
          </div>
          <div className="flex gap-4 flex-wrap">
            

            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full md:w-64"
            />
          </div>
        </div>

       
        {apps.length === 0 ? (
          <div className="text-center py-12">
            <img src="/assets/App-Error.png" alt="No Apps" className="mx-auto  mb-4"/>
            <h3 className="text-4xl font-bold mb-2">OPPS!! APP NOT FOUND</h3>
            <p className="text-gray-500">The App you are requesting is not found on our system. please try another apps.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {apps.map(app => (
              <Link
                key={app.id}
                to={`/app/${app.id}`}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <figure className="px-6 pt-6">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="rounded-xl h-40 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{app.title}</h3>
                  <p className="text-sm text-gray-500">{app.companyName}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm font-semibold flex gap-1 bg-gray-100 p-1 rounded-xl text-green-500 items-center">
                      <img src="/assets/icon-downloads.png" alt="" className="w-4 h-4"/>{formatNumber(app.downloads)}</div>
                    <div className="badge badge-ghost text-orange-400">
                      <img src="public/assets/icon-ratings.png" alt="" className="w-5 h-5"/> {app.ratingAvg}</div>
                    
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default AllApps;
