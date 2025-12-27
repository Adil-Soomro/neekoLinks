"use client";
import TopRefferals from "@/components/dashboard/TopRefferals";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DeviceStats = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon size={24} className="text-indigo-600 mb-2" />
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-semibold">{value.toLocaleString()}</span>
    </div>
  );
};

const AnalyticsPage = () => {
  const [data, setData] = useState({
    links: [],
    analytics: {
      clicksOverTime: [0, 0, 0, 0, 0, 0],
      devices: {
        desktop: 0,
        mobile: 0,
        tablet: 0,
      },
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const mockData = {
        stats: {
          totalLinks: 125,
          totalClicks: 1024,
          uniqueVisitors: 256,
        },
        links: [
          {
            id: "1",
            shortUrl: "bit.ly/abc123",
            originalUrl: "https://example.com",
            clicks: 50,
            createdAt: new Date().toISOString(),
          },
        ],
        analytics: {
          clicksOverTime: [50, 100, 150, 200, 300, 400],
          devices: {
            desktop: 500,
            mobile: 400,
            tablet: 124,
          },
        },
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(mockData);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Clicks Over Time",
        data: data.analytics.clicksOverTime,
        borderColor: "#6366f1",
        backgroundColor: "#6366f120",
        Filler: true,
        tension: 0.4,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Clicks Over Time</h3>
        <div className="h-[300px]">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Device Breakdown</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <DeviceStats
              icon={Laptop}
              label="Desktop"
              value={data.analytics.devices.desktop}
            />
            <DeviceStats
              icon={Smartphone}
              label="Mobile"
              value={data.analytics.devices.mobile}
            />
            <DeviceStats
              icon={Tablet}
              label="Tablet"
              value={data.analytics.devices.tablet}
            />
          </div>
        </div>
        <TopRefferals />
      </div>
    </motion.div>
  );
};

export default AnalyticsPage;
