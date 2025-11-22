<<<<<<< HEAD
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart2, Link2, Share2 } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import Link from "next/link";

const OverviewPage = () => {
  const [loading, setLoading] = useState(false);
=======
"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart2, Link2, Share2 } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'



const OverviewPage = () => {
  const [loading, setLoading] = useState(false)
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
  const useCounter = (endValue, duration = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = endValue / (duration * 60); // Increment per frame (assuming 60 fps)

      const counter = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          clearInterval(counter);
          start = endValue;
        }
        setCount(Math.floor(start));
      }, 1000 / 80);

      return () => clearInterval(counter);
    }, [endValue, duration]);

    return count;
  };

  const [statsData, setStatsData] = useState({
<<<<<<< HEAD
    totalLinks: "",
    totalClicksAgg: "",
    unqiueVisitors: "",
  });
  const [recentLinks, setRecentLinks] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("/api/dashboard/overview");
      const data = await res.json();
      setRecentLinks(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();

    const fetchStats = async () => {
      const res = await fetch("api/dashboard/overview/stats");
      const data = await res.json();
=======
    totalLinks: '',
    totalClicksAgg: '',
    unqiueVisitors: ''
  })
  const [recentLinks, setRecentLinks] = useState([])

  useEffect(() => {

    setLoading(true)
    const fetchData = async () => {
      const res = await fetch('/api/dashboard/overview')
      const data = await res.json()
      setRecentLinks(data)
      setTimeout(() => {

        setLoading(false)
      }, 1000);
    }
    fetchData()

    const fetchStats = async () => {

      const res = await fetch('api/dashboard/overview/stats')
      const data = await res.json()
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c

      setStatsData({
        totalLinks: data.totalLinks,
        totalClicksAgg: data.totalClicksAggregation[0].totalClicks,
<<<<<<< HEAD
        unqiueVisitors: data.uniqueVisitors,
      });
    };
    fetchStats();
  }, []);
  useEffect(() => {}, [statsData]);
=======
        unqiueVisitors: data.uniqueVisitors
      })
    }
    fetchStats()
  }, [])
  useEffect(() => {

  }, [statsData])
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
  const totalShortLinks = useCounter(statsData.totalLinks, 2);
  const totalClicks = useCounter(statsData.totalClicksAgg, 2);
  const visitors = useCounter(statsData.unqiueVisitors, 2);

<<<<<<< HEAD
=======

>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<<<<<<< HEAD
        <StatsCard
          title="Total Links"
          value={totalShortLinks.toLocaleString()}
          icon={Link2}
        />
        <StatsCard
          title="Total Clicks"
          value={totalClicks.toLocaleString()}
          icon={BarChart2}
        />
        <StatsCard
          title="Unique Visitors"
          value={visitors.toLocaleString()}
          icon={Share2}
        />
=======
        <StatsCard title="Total Links" value={totalShortLinks.toLocaleString()} icon={Link2} />
        <StatsCard title="Total Clicks" value={totalClicks.toLocaleString()} icon={BarChart2} />
        <StatsCard title="Unique Visitors" value={visitors.toLocaleString()} icon={Share2} />
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
      </div>

      <h2 className="text-2xl font-semibold mb-4 p-2">Recent Activity</h2>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="bg-white p-4 sm:p-0 rounded-lg shadow mb-6 overflow-x-auto">
          <table className="w-full table-auto border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="text-left px-3 py-2 text-sm">Short URL</th>
                <th className="text-left px-3 py-2 text-sm">Original URL</th>
                <th className="text-left px-3 py-2 text-sm">Clicks</th>
                <th className="text-left px-3 py-2 text-sm">Last Access</th>
              </tr>
            </thead>
            <tbody>
              {recentLinks.map((link, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
<<<<<<< HEAD
                  <td className="px-3 py-2 text-sm whitespace-nowrap">
                    <Link
                      target="_blank"
                      className="hover:text-blue-800 "
                      href={link.shortUrl}
                    >
                      {link.shortUrl}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-sm truncate max-w-[300px]">
                    {link.url}
                  </td>
                  <td className="px-3 py-2 text-sm text-center">
                    {link.clicks}
                  </td>
                  <td className="px-3 py-2 text-xs whitespace-nowrap">
                    {link.lastAccess
                      ? new Date(link.lastAccess).toLocaleString()
                      : "N/A"}
=======
                  <td className="px-3 py-2 text-sm whitespace-nowrap">{link.shortUrl}</td>
                  <td className="px-3 py-2 text-sm truncate max-w-[300px]">{link.url}</td>
                  <td className="px-3 py-2 text-sm text-center">{link.clicks}</td>
                  <td className="px-3 py-2 text-xs whitespace-nowrap">
                    {link.lastAccess ? new Date(link.lastAccess).toLocaleString() : "N/A"}
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
<<<<<<< HEAD
  );
};

export default OverviewPage;
=======
  )
}

export default OverviewPage
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
