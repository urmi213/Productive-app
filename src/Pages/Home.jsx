import React from 'react';
import { Link } from 'react-router-dom';
import { appsData } from '../Data/appsData';
import playStore from '/assets/playStore.png'
import appStore from '/assets/appStore.png'
import Hero from '/assets/hero.png'
import rating from '/assets/icon-ratings.png'
import download from '/assets/icon-downloads.png'

const Home = () => {
  const topApps = appsData.slice(0, 8);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  const totalDownloads = appsData.reduce((sum, app) => sum + app.downloads, 0);
  const totalReviews = appsData.reduce((sum, app) => sum + app.reviews, 0);

  return (
    <div className="home">

      
      <section className="hero min-h-screen  ">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">We Build <br /><span className="text-purple-500">Productive</span> Apps</h1>
            <p className="text-sm mb-8 text-gray-400">
              At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://play.google.com" className="btn  btn-lg">
              <img src= {playStore} alt="Logo" className="w-8 h-8"/>
                Google Play
              </a>
              <a href="https://www.apple.com/app-store/" className="btn btn-outline  btn-lg">
              <img src= {appStore} alt="Logo" className="w-8 h-8"/>
                App Store
              </a>
            </div>
            <div className="mt-9">
          <img src={Hero} alt="Logo" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center font-bold text-3xl">Trusted by Millions, Built for You</div>
          <div className="stats  w-full flex flex-col md:flex-row justify-around text-center">
            
           <div className="stat">
              
              <div className="text-sm text-gray-300">Total Downloads</div>
              <div className="text-4xl font-bold">29.6M</div>
              <div className="text-sm text-gray-300">21% more than last month</div>
            </div>

            <div className="stat">
              
              <div className="text-sm text-gray-300">Total Reviews</div>
              <div className="text-4xl font-bold">906K</div>
              <div className="text-sm text-gray-300">46% more than last month</div>
            </div>
             <div className="stat">
              
              <div className="text-sm text-gray-300">Total Apps</div>
              <div className="text-4xl font-bold">132+</div>
              <div className="text-sm text-gray-300">31 more than last month</div>
            </div>
          </div>
          
        </div>
      </section>

     
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className=" mb-8 flex-wrap gap-4 text-center">
            <h2 className="text-4xl font-bold ">Trending Apps</h2>
            <p className="text-gray-400 text-sm p-3">Explore All Trending Apps on the Market developed by us</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topApps.map(app => (
              <Link
                key={app.id}
                to={`/app/${app.id}`}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <figure className="px-6 pt-6">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="rounded-xl h-32 w-full object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h3 className="card-title text-lg">{app.title}</h3>
                  <div className="card-actions justify-between items-center">
                    <div className="text-sm font-semibold flex gap-1 bg-gray-100 p-1 rounded-xl text-green-500 items-center">
                      <img src={download} alt="" className="w-4 h-4"/>{formatNumber(app.downloads)}</div>
                    <div className="badge badge-ghost text-orange-400">
                      <img src={rating} alt="" className="w-5 h-5 "/> {app.ratingAvg}</div>
                    
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className=" flex items-center justify-center p-7"><Link to="/apps" className="btn btn-primary ">Show All</Link></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
