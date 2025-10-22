import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { appsData } from '../Data/appsData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Toast from '../components/Toast';
import LoadingSpinner from '../components/LoadingSpinner';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const appData = appsData.find(a => a.id === parseInt(id));
    setApp(appData);

    // Check if already installed
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const isInstalled = installedApps.some(a => a.id === parseInt(id));
    setInstalled(isInstalled);

    
    setTimeout(() => setLoading(false), 300);
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    if (!installedApps.some(a => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(true);
      setShowToast(true);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  if (loading) return <LoadingSpinner />;

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="/assets/Error-App Not Found.png" alt="Not Found" className="w-40 h-40 mb-4"/>
        <h1 className="text-3xl font-bold mb-2">App Not Found</h1>
        <Link to="/apps" className="btn btn-primary mt-4">Browse Apps</Link>
      </div>
    );
  }

  return (
    <div className="app-details py-8 bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">

       
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
  
  <img
    src={app.image}
    alt={app.title}
    className="rounded-xl w-full md:w-1/4 h-64 object-contain"
  />

 
  <div className="flex-1 flex flex-col justify-between h-full">
    
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-1">{app.title}</h1>
      <p className=" font-medium mb-6">
        Developed by <span className="text-blue-600">{app.companyName}</span>
      </p>

     
      <div className="flex flex-wrap gap-6 mb-6 items-center text-sm">
        <div className="flex items-center gap-2">
          <img src="/assets/icon-downloads.png" alt="Downloads" className="w-5 h-5" />
          <div>
            <div className="font-bold text-lg">{formatNumber(app.downloads)}</div>
            <div className="text-gray-500 text-xs">Downloads</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/assets/icon-ratings.png" alt="Rating" className="w-5 h-5" />
          <div>
            <div className="font-bold text-lg">{app.ratingAvg}</div>
            <div className="text-gray-500 text-xs">Average Ratings</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/assets/icon-review.png" alt="Reviews" className="w-5 h-5" />
          <div>
            <div className="font-bold text-lg">{formatNumber(app.reviews)}</div>
            <div className="text-gray-500 text-xs">Total Reviews</div>
          </div>
        </div>
      </div>
    </div>
    <button
      onClick={handleInstall}
      disabled={installed}
      className={`btn btn-primary w-full md:w-auto px-6 py-3 text-white text-sm font-semibold ${installed ? 'btn-disabled' : ''}`}
    >
      {installed ? 'Installed' : `Install Now (${app.size} MB)`}
    </button>
  </div>
</div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">User Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-400">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
            <br /><br />A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
<br /><br />For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
</p>
          <p className="mt-2 text-gray-500">Size: {app.size} MB</p>
        </div>

      </div>
      {showToast && (
        <Toast
          message="App installed successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default AppDetails;
