"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaShareSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import {
  Settings,
  BarChart2,
  Link2,
  LayoutDashboard,
  Menu,
} from "lucide-react";
// import AnalyticsView from "@/components/dashboard/analytics/AnalyticsView";
// import StatsCard from "@/components/dashboard/StatsCard";

const Shorten = () => {
  const [url, setURL] = useState("");
  const [shortUrl, setShortURL] = useState("");
  const [generated, setGenerated] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [urlError, setUrlError] = useState("");
  const [shortUrlError, setShortUrlError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Genloading, setGenLoading] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState("");
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        setLoading(false);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setData(result.data);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [generated]);

  const handleGenerate = () => {
    if (!url) {
      setUrlError("URL is required.");
      return;
    } else {
      setUrlError("");
    }

    if (!shortUrl) {
      setShortUrlError("Short URL is required.");
      return;
    } else {
      setShortUrlError("");
    }
    if (!url.includes("https://")) {
      setErrorMessage("Invalid Link! URL must include https://");
      return;
    } else {
      setErrorMessage("");
    }

    setGenLoading("true");

    const request = fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url,
        shorturl: shortUrl,
      }),
    }).then(async (res) => {
      const result = await res.json();

      if (!result.success) {
        throw new Error("URL Already Exists");
      }

      return result;
    });

    toast.promise(request, {
      loading: "Submitting...",
      success: <b>Your Link Generated Successfully!</b>,
      error: (error) => <b>{error}</b>,
    });

    request
      .then(() => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setURL("");
        setShortURL("");
      })
      .finally(() => {
        setGenLoading(false);
      });
  };
  const ValidateURL = (e) => {
    const isValidLink = e.includes("https://") && e.includes(".");
    if (!isValidLink) {
      setErrorMessage("Invalid Link! URL must include https://");
    } else {
      setErrorMessage("");
    }
  };

  const handleInput = (e) => {
    const input = e.target.value;
    setURL(input);
    ValidateURL(input);
  };

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Short URL copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy. Try again!");
      });
  };

  const handleConfirmDelete = async (id) => {
    setLoading(true);
    try {
      const res = await fetch("/api/dashboard", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();
      if (result.success) {
        setLoading(false);
        toast.success("Item deleted successfully!");
        setConfirmDelete(false);
        getData();
      } else {
        setLoading(false);
        alert(result.message || "Error occurred while deleting.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error deleting item:", error);
      alert("A  n error occurred. Please try again.");
    }
  };
  const handleDelete = async (URL) => {
    setConfirmDelete(true);
    setDeleteItem(URL);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-screen-xl sm:max-w-4xl bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-6"
      >
        <div className="mb-6 flex flex-col gap-1 items-center justify-center">
          <h1 className="text-5xl font-bold text-center sm:px-12 text-violet-500">
            Shorten Your <span className="text-orange-700">Loooong!</span> URLs
            like never Before
          </h1>
          <p className="text-sm text-gray-800">
            Copy your long URL. Paste it below. Then create your own short URL.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <motion.input
            type="text"
            value={url}
            className="placeholder:text-gray-600 px-4 py-2 rounded-md border border-gray-300 focus:outline-violet-600"
            onChange={(e) => handleInput(e)}
            placeholder="Enter your URL"
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          />
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          {urlError && <p className="text-red-500 text-sm">{urlError}</p>}
          <motion.input
            type="text"
            value={shortUrl}
            className="placeholder:text-gray-600 px-4 py-2 rounded-md border border-gray-300 focus:outline-violet-600"
            onChange={(e) => setShortURL(e.target.value)}
            placeholder="Enter your preferred short URL text"
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          />
          {shortUrlError && (
            <p className="text-red-500 text-sm">{shortUrlError}</p>
          )}
          <motion.button
            onClick={handleGenerate}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 py-2 rounded-lg shadow-lg font-semibold text-white"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            {Genloading ? "Generating..." : "Generate"}
          </motion.button>
          ''
        </div>

        <h1 className="font-semibold text-center text-3xl text-gray-950">
          Your Links
        </h1>
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" />
            <p className="text-gray-600">Loading data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-2xl flex flex-col gap-3 border border-gray-200"
              >
                <span className="text-sm text-gray-500 truncate">
                  {item.url}
                </span>
                <Link
                  target="_blank"
                  href={`${item.shortUrl}`}
                  className="text-base font-bold text-blue-600 hover:underline truncate"
                >
                  {process.env.NEXT_PUBLIC_HOST}/{item.shortUrl}
                </Link>
                <div className="mt-3 flex items-center justify-between text-gray-800">
                  <div className="flex items-center gap-2 text-sm">
                    <FaEye className="text-gray-500" />
                    <span>{item.clicks}</span>
                  </div>
                  <span className="text-xs text-gray-800 ">
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                    })
                      .replace("about", "")
                      .replace("less than ", "")}
                  </span>
                  <div className="flex gap-3">
                    <FaCopy
                      onClick={() =>
                        handleCopy(
                          `${process.env.NEXT_PUBLIC_HOST}/${item.shortUrl}`
                        )
                      }
                      className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer transition-colors duration-200"
                    />
                    <MdDelete
                      onClick={() => handleDelete(item)}
                      className="text-red-500 hover:text-red-700 text-xl cursor-pointer transition-colors duration-200"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {confirmDelete && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setConfirmDelete(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transform transition-all scale-95 hover:scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex flex-col justify-between items-center mb-1">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Are you sure?
                </h2>
                <p className="text-sm pt-2 text-red-600">
                  This ShortURL will be Permanently Deleted.
                </p>
              </div>

              <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-2xl flex flex-col gap-3 border border-gray-200">
                <span className="text-sm text-black truncate">
                  {deleteItem.url}
                </span>
                <Link
                  target="_blank"
                  href={`${deleteItem.shortUrl}`}
                  className="text-base font-bold text-blue-600 hover:underline truncate"
                >
                  {process.env.NEXT_PUBLIC_HOST}/{deleteItem.shortUrl}
                </Link>
                <div className="mt-3 flex items-center justify-between text-gray-800">
                  <div className="flex items-center gap-2 text-sm">
                    <FaEye className="text-gray-500" />
                    <span>{deleteItem.clicks}</span>
                  </div>
                  <span className="text-xs text-gray-800 ">
                    {formatDistanceToNow(new Date(deleteItem.createdAt), {
                      addSuffix: true,
                    })
                      .replace("about", "")
                      .replace("less than ", "")}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setConfirmDelete(null)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => handleConfirmDelete(deleteItem._id)}
                  className={`px-4 py-2 text-white rounded-lg transition-all ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}

        <span className="text-end font-medium text-orange-600 hover:underline">
          <Link href={"/dashboard"} className="hover:cursor-pointer">
            View All
          </Link>
        </span>
      </motion.div>
    </>
  );
};

export default Shorten;
