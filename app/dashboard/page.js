"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  BarChart2,
  Link2,
  LayoutDashboard,
  Menu,
  AlertCircle,
  LogOut,
} from "lucide-react";
import OverviewPage from "@/components/pages/OverviewPage";
import AnalyticsPage from "@/components/pages/AnalyticsPage";
import ManageLinksPage from "@/components/pages/ManageLinksPage";
import SettingsPage from "@/components/pages/SettingsPage";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

// Register ChartJS

const Dashboard = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const expiry = localStorage.getItem("tokenExpiry");
    if (!token || !expiry || new Date() > Number(expiry)) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
      toast.error("Session Expired!");
      redirect("/login");
    }
  }, [token]);
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [handleLogout, setHandleLogout] = useState(false);

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
    }, [endValue, duration, activeSection]);

    return count;
  };

  useEffect(() => {
    if (handleLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
      toast.success("Logged out successfully!");
      router.push("/login");
    }
  }, [handleLogout]);

  const totalShortLinks = useCounter(125, 2);
  const totalClicks = useCounter(1024, 2);
  const visitors = useCounter(256, 2);

  const handleLogoutFunction = () => {
    setHandleLogout(!handleLogout);
  };

  const MENU_ITEMS = [
    { id: "overview", icon: LayoutDashboard, label: "Overview" },
    { id: "manageLinks", icon: Link2, label: "Manage" },
    { id: "analytics", icon: BarChart2, label: "Analytics" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulated API response
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
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const renderContent = () => {
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" />
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      );
    }

    switch (activeSection) {
      case "overview":
        return <OverviewPage />;

      case "analytics":
        return <AnalyticsPage />;

      case "manageLinks":
        return <ManageLinksPage />;

      case "settings":
        return <SettingsPage />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 240 : 80 }}
        className="h-screen border-r shadow-sm hidden md:block z-10 sticky top-0 bg-gradient-to-r from-gray-600 to-gray-700 text-white"
      >
        <div className="flex items-center">
          <div className="p-4 flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
<<<<<<< HEAD
              className="p-2 hover:bg-gray-600 rounded-lg"
=======
              className="p-2 hover:bg-gray-100 rounded-lg"
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
              aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              <Menu className="relative" />
            </button>
          </div>
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            className="overflow-hidden font-semibold text-xl"
          >
            Dashboard
          </motion.h1>
        </div>
        <nav className="mt-6 px-2 flex flex-col justify-between h-full pb-60">
          {/* Top menu items */}
          <div className="flex flex-col justify-between h-full">
            {/* Menu buttons */}
            <div>
              {MENU_ITEMS.map(({ id, icon: Icon, label, link }) => (
                <div key={id} className="flex items-center px-2">
                  <button
                    onClick={() => setActiveSection(id)}
                    className={`
            w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-2 transition-colors
            ${
              activeSection === id
                ? "bg-gray-200 text-indigo-600"
                : "text-gray-300 hover:bg-gray-500"
            }
          `}
                    aria-current={activeSection === id ? "page" : undefined}
                  >
                    <Icon size={20} />
                    {isSidebarOpen && (
                      <motion.span
                        className="font-medium"
                        animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                      >
                        {label}
                      </motion.span>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="px-2 pb-4">
              <button
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-500 transition-colors"
                onClick={handleLogoutFunction}
              >
                <LogOut size={20} />
                {isSidebarOpen && "Logout"}
              </button>
            </div>
          </div>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-10">
        <nav className="flex justify-around p-2">
          {MENU_ITEMS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`
                            flex flex-col items-center p-2 rounded-lg transition-colors
                            ${
                              activeSection === id
                                ? "text-indigo-600"
                                : "text-gray-600 hover:bg-gray-300"
                            }
                        `}
              aria-current={activeSection === id ? "page" : undefined}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
          <button
            className=" flex flex-col items-center p-2 rounded-lg text-gray-600 hover:bg-gray-300 transition-colors"
            onClick={handleLogoutFunction}
          >
            <LogOut size={20} />
            {isSidebarOpen && "Logout"}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
