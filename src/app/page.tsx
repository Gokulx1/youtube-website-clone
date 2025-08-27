"use client";

import { Search, Menu, Bell, User, Home, Compass, PlaySquare, Clock, ThumbsUp, Folder, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const videos = [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      channel: "Tech Tutorials",
      views: "1.2M views",
      time: "2 days ago",
      duration: "12:45",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 2,
      title: "React Server Components Explained",
      channel: "Developer Channel",
      views: "856K views", 
      time: "1 week ago",
      duration: "15:30",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 3,
      title: "Building Modern Web Apps",
      channel: "Code Academy",
      views: "2.1M views",
      time: "3 days ago", 
      duration: "8:22",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 4,
      title: "TypeScript Best Practices 2024",
      channel: "Programming Tips",
      views: "734K views",
      time: "5 days ago",
      duration: "20:15",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox",
      channel: "Design Basics",
      views: "1.8M views",
      time: "1 week ago",
      duration: "14:33",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 6,
      title: "Database Design Fundamentals",
      channel: "Data Science Pro",
      views: "967K views",
      time: "4 days ago",
      duration: "18:45",
      thumbnail: "/api/placeholder/320/180"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <PlaySquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">RedVido</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-l-full bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
            <button className="px-6 py-2 bg-gray-100 dark:bg-zinc-700 border border-l-0 border-gray-300 dark:border-zinc-600 rounded-r-full hover:bg-gray-200 dark:hover:bg-zinc-600">
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-700 min-h-screen p-2">
          <nav className="space-y-1">
            <div className="flex items-center gap-6 px-3 py-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 cursor-pointer">
              <Compass className="w-5 h-5" />
              <span>Explore</span>
            </div>
            <div className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 cursor-pointer">
              <PlaySquare className="w-5 h-5" />
              <span>Subscriptions</span>
            </div>
          </nav>

          <hr className="my-4 border-gray-200 dark:border-zinc-700" />

          <nav className="space-y-1">
            <div className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 cursor-pointer">
              <Folder className="w-5 h-5" />
              <span>Library</span>
            </div>
            <div className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 cursor-pointer">
              <Clock className="w-5 h-5" />
              <span>History</span>
            </div>
            <div className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 cursor-pointer">
              <ThumbsUp className="w-5 h-5" />
              <span>Liked videos</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="cursor-pointer group">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-200 dark:bg-zinc-700 rounded-lg overflow-hidden mb-3">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-zinc-600 dark:to-zinc-700 flex items-center justify-center">
                    <PlaySquare className="w-12 h-12 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="flex gap-3">
                  {/* Channel Avatar */}
                  <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {video.channel}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}