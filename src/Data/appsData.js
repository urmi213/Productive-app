
const baseApps = [
  {
    id: 1,
    title: "Photo Editor Pro",
    companyName: "productive.io",
    description: "Edit photos with advanced tools and filters.",
    image: "/assets/demo-app (1).webp",
    size: 85.5,
    reviews: 12500,
    ratingAvg: 4.7,
    downloads: 5000000,
    ratings: [
      { name: "1 star", count: 250 },
      { name: "2 star", count: 500 },
      { name: "3 star", count: 1250 },
      { name: "4 star", count: 3750 },
      { name: "5 star", count: 6750 }
    ]
  },
  {
    id: 2,
    title: "Music Stream",
    companyName: "AudioTech",
    description: "Stream millions of songs with high-quality audio.",
    image: "/assets/demo-app (2).webp",
    size: 42.3,
    reviews: 8900,
    ratingAvg: 4.5,
    downloads: 3500000,
    ratings: [
      { name: "1 star", count: 445 },
      { name: "2 star", count: 890 },
      { name: "3 star", count: 1780 },
      { name: "4 star", count: 2670 },
      { name: "5 star", count: 3115 }
    ]
  },
  {
    id: 3,
    title: "Fitness Tracker",
    companyName: "HealthPlus",
    description: "Track your workouts and monitor progress easily.",
    image: "/assets/demo-app (3).webp",
    size: 30.2,
    reviews: 5300,
    ratingAvg: 4.3,
    downloads: 1500000,
    ratings: [
      { name: "1 star", count: 210 },
      { name: "2 star", count: 320 },
      { name: "3 star", count: 540 },
      { name: "4 star", count: 1980 },
      { name: "5 star", count: 2250 }
    ]
  },
  {
    id: 4,
    title: "Recipe Master",
    companyName: "CookIt",
    description: "Find thousands of recipes and cooking tips.",
    image: "/assets/demo-app (4).webp",
    size: 27.5,
    reviews: 4200,
    ratingAvg: 4.4,
    downloads: 1200000,
    ratings: [
      { name: "1 star", count: 140 },
      { name: "2 star", count: 210 },
      { name: "3 star", count: 630 },
      { name: "4 star", count: 1400 },
      { name: "5 star", count: 1820 }
    ]
  },
  {
    id: 5,
    title: "Travel Guide",
    companyName: "Wanderlust",
    description: "Explore new destinations and plan your trips.",
    image: "/assets/demo-app (5).webp",
    size: 55.1,
    reviews: 7100,
    ratingAvg: 4.6,
    downloads: 2700000,
    ratings: [
      { name: "1 star", count: 300 },
      { name: "2 star", count: 450 },
      { name: "3 star", count: 900 },
      { name: "4 star", count: 2000 },
      { name: "5 star", count: 2450 }
    ]
  },
  {
    id: 6,
    title: "Meditation App",
    companyName: "CalmMind",
    description: "Guided meditations for stress relief and focus.",
    image: "/assets/demo-app (6).webp",
    size: 40.7,
    reviews: 6200,
    ratingAvg: 4.7,
    downloads: 2100000,
    ratings: [
      { name: "1 star", count: 150 },
      { name: "2 star", count: 220 },
      { name: "3 star", count: 610 },
      { name: "4 star", count: 1750 },
      { name: "5 star", count: 2470 }
    ]
  },
  {
    id: 7,
    title: "Budget Planner",
    companyName: "FinancePro",
    description: "Manage your expenses and savings efficiently.",
    image: "/assets/demo-app (1).webp",
    size: 33.9,
    reviews: 4800,
    ratingAvg: 4.2,
    downloads: 1400000,
    ratings: [
      { name: "1 star", count: 300 },
      { name: "2 star", count: 450 },
      { name: "3 star", count: 600 },
      { name: "4 star", count: 1250 },
      { name: "5 star", count: 2200 }
    ]
  },
  {
    id: 8,
    title: "Language Learner",
    companyName: "EduLang",
    description: "Learn new languages with fun exercises.",
    image: "/assets/demo-app (3).webp",
    size: 60.4,
    reviews: 9700,
    ratingAvg: 4.8,
    downloads: 3200000,
    ratings: [
      { name: "1 star", count: 230 },
      { name: "2 star", count: 300 },
      { name: "3 star", count: 400 },
      { name: "4 star", count: 3500 },
      { name: "5 star", count: 5270 }
    ]
  },
  {
    id: 9,
    title: "Weather Now",
    companyName: "SkyCast",
    description: "Real-time weather updates and forecasts.",
    image: "/assets/demo-app (2).webp",
    size: 25.6,
    reviews: 6700,
    ratingAvg: 4.1,
    downloads: 1800000,
    ratings: [
      { name: "1 star", count: 400 },
      { name: "2 star", count: 600 },
      { name: "3 star", count: 700 },
      { name: "4 star", count: 2800 },
      { name: "5 star", count: 1200 }
    ]
  },
  {
    id: 10,
    title: "News Daily",
    companyName: "InfoStream",
    description: "Stay updated with the latest news around the world.",
    image: "/assets/demo-app (5).webp",
    size: 48.9,
    reviews: 8200,
    ratingAvg: 4.3,
    downloads: 2900000,
    ratings: [
      { name: "1 star", count: 250 },
      { name: "2 star", count: 500 },
      { name: "3 star", count: 750 },
      { name: "4 star", count: 3200 },
      { name: "5 star", count: 1500 }
    ]
  },
  {
    id: 11,
    title: "Task Manager",
    companyName: "WorkFlow",
    description: "Organize your tasks and boost productivity.",
    image: "/assets/demo-app (6).webp",
    size: 29.8,
    reviews: 5400,
    ratingAvg: 4.5,
    downloads: 1600000,
    ratings: [
      { name: "1 star", count: 180 },
      { name: "2 star", count: 300 },
      { name: "3 star", count: 600 },
      { name: "4 star", count: 2200 },
      { name: "5 star", count: 2120 }
    ]
  },
  {
    id: 12,
    title: "Language Translator",
    companyName: "EduTech",
    description: "Translate text and speech in multiple languages instantly.",
    image: "/assets/demo-app (4).webp",
    size: 75.8,
    reviews: 9500,
    ratingAvg: 4.6,
    downloads: 5000000,
    ratings: [
      { name: "1 star", count: 475 },
      { name: "2 star", count: 950 },
      { name: "3 star", count: 1900 },
      { name: "4 star", count: 2850 },
      { name: "5 star", count: 2825 }
    ]
  }
];



export const appsData = Array.from({ length: 132 }, (_, i) => {
  const baseApp = baseApps[i % baseApps.length]; 

  return {
    ...baseApp,
    id: i + 1, 
    title: `${baseApp.title} #${i + 1}` 
  };
});
