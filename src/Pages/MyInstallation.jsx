import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toast from '../components/Toast';
import LoadingSpinner from '../components/LoadingSpinner';

const MyInstallations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    setTimeout(() => setLoading(false), 300); 
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (appId) => {
    const updated = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
    setToastMessage('App uninstalled successfully!');
    setShowToast(true);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  
  const filteredApps = installedApps
    .filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'high-low') return b.downloads - a.downloads;
      if (sort === 'low-high') return a.downloads - b.downloads;
      return 0;
    });

  if (loading) return <LoadingSpinner />;

  return (
    <div className="my-installations py-8 bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">

        
        <div className="text-center mb-8 border border-dashed border-blue-300 p-4">
          <h1 className="text-4xl font-bold mb-2">Your Installed Apps</h1>
          <p className="text-gray-400">Explore All Trending Apps on the Market developed by us</p>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-lg">
            <span className="font-bold">{filteredApps.length}</span> apps found
          </div>
          <div className="flex gap-4 flex-wrap">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select select-bordered w-full md:w-64"
            >
              <option value="">Sort by Size</option>
              <option value="high-low">High to Low</option>
              <option value="low-high">Low to High</option>
            </select>
          </div>
        </div>

       
        {filteredApps.length === 0 ? (
          <div className="text-center py-12">
            <img src="/assets/error-404.png" alt="No Apps Installed" className="mx-auto w-100 h-100 mb-4" />
            <h3 className="text-4xl font-bold mb-2">Oops, page not found!</h3>
            <p className="text-gray-500 mb-6">The page you are looking for is not available.</p>
            <Link to="/apps" className="btn btn-primary">Go Back</Link>
          </div>
        ) : (
          <div className="border border-dashed border-blue-300 p-4">
            <div className="space-y-4">
              {filteredApps.map(app => (
                <div key={app.id} className="flex items-center justify-between bg-white p-4 rounded border border-gray-200">
                  
                  
                  <div className="flex items-center space-x-4">
                    <img src={app.image} alt={app.title} className="w-14 h-14 rounded bg-gray-100" />
                    <div>
                      <h3 className="text-md font-semibold">{app.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 space-x-4 mt-1">
                        <span className="flex items-center">
                          <div className="text-sm font-semibold flex gap-1 bg-gray-100 p-1 rounded-xl text-green-500 items-center">
                      <img src="/assets/icon-downloads.png" alt="" className="w-4 h-4"/>{formatNumber(app.downloads)}</div>
                        </span>
                        <span className="flex items-center">
                          <div className="badge badge-ghost text-orange-400">
                      <img src="public/assets/icon-ratings.png" alt="" className="w-5 h-5"/> {app.ratingAvg}</div>
                         
                        </span>
                        <span>{app.size || '258 MB'} MB</span>
                      </div>
                    </div>
                  </div>

                  
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="btn btn-success btn-sm text-white"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default MyInstallations;
