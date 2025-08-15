"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"]
})

const ManageLinksPage = () => {
  const [urls, setUrls] = useState([]);
  const [sortBy, setSortBy] = useState("lastAccess");
  const [order, setOrder] = useState("desc");
  const [filterStatus, setFilterStatus] = useState("");
  const [search, setSearch] = useState("");
  const [openEditFile, setOpenEditFile] = useState(null);
  const [docItem, setDocItem] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataloading, setDataLoading] = useState(false)
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    URL: '',
    shortUrl: '',
    status: 'active',
    created: ''
  });

  useEffect(() => {
    if (docItem) {
      setFormData({
        URL: docItem.url,
        shortUrl: docItem.shortUrl,
        status: docItem.isActive ? 'active' : 'inactive'
      })
    }

  }, [docItem])


  const fetchUrls = async () => {
    setDataLoading(true)
    try {
      const res = await fetch(
        `/api/urls?sortBy=${sortBy}&order=${order}&filterStatus=${filterStatus}&search=${search}`
      );
      const data = await res.json();
      setUrls(data);
      setTimeout(() => {
        setDataLoading(false)
      }, 1000);
    } catch (error) {
      setDataLoading(false)
    }
  };

  useEffect(() => {
    fetchUrls();
  }, [sortBy, order, filterStatus, search]);

  const handleSort = (field) => {
    setSortBy(field);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const handlePopupFunc = (doc) => {
    setOpenEditFile(true)
    setDocItem(doc)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(`/api/updatedocument/${docItem._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      setMessage(data.message)
      setTimeout(() => {
        setMessage('')

      }, 3000);
      if (!data.success) {
        setMessage(data.message)
        setLoading(false)
      }
    } catch (error) {
      setMessage("Something Went Wrong Please Try Again Later!");
      setsetStatusMessage("error")
      setLoading(false)
    }
    setLoading(false)


  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="container flex flex-col justify-center p-4">
      <h1 className="text-3xl font-poppins font-semibold mb-4">Manage Your Links</h1>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by URL or Short URL"
          className="border p-2 flex-1 min-w-[200px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full table-auto border rounded-lg shadow-md">
          {dataloading ? (
            <tbody>
              <tr>
                <td colSpan="6" className="flex flex-col items-center justify-center min-h-[400px] text-center py-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" />
                  <p className="text-gray-600">Loading...</p>
                </td>
              </tr>
            </tbody>
          ) : urls.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="6" className={`${poppins.className} text-center py-4 text-gray-500 font-medium`}>
                  No results found
                </td>
              </tr>
            </tbody>
          ) : (
            <>
              <thead>
                <tr className="bg-gray-100">
                  {["Short URL", "Full URL", "Clicks", "Last Access", "Status"].map((title, index) => (
                    <th
                      key={index}
                      className="border px-4 py-2 text-left cursor-pointer text-gray-700 font-medium text-[12px]"
                      onClick={() => handleSort(title.toLowerCase().replace(" ", ""))}
                    >
                      {title.toUpperCase()}
                    </th>
                  ))}
                  <th className="border px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {urls.map((doc) => (
                  <tr key={doc._id} className="hover:bg-gray-50 transition">
                    <td className="border px-4 py-2">
                      <Link className="text-blue-500 cursor-pointer hover:text-blue-700" target="_blank" href={doc.shortUrl}>
                        {process.env.NEXT_PUBLIC_HOST}/{doc.shortUrl}
                      </Link>
                    </td>
                    <td className="border px-4 py-2 truncate max-w-[250px]">{doc.url}</td>
                    <td className="border px-4 py-2 text-sm">{doc.clicks}</td>
                    <td className="border px-4 py-2 text-sm">{new Date(doc.lastAccess).toLocaleString()}</td>
                    <td
                      className={`border px-4 py-2 text-sm font-medium ${doc.isActive ? "text-green-600" : "text-red-600"}`}
                    >
                      {doc.isActive ? "Active" : "Inactive"}
                    </td>
                    <td className="relative border px-4 py-2">
                      <button
                        onClick={() => handlePopupFunc(doc)}
                        className="hover:text-black text-gray-800 cursor-pointer"
                      >
                        <Player hover autoplay src={'/lotties/edit.json'} className="size-12" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>

        {openEditFile && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setOpenEditFile(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Edit URL</h2>
                <button
                  onClick={() => setOpenEditFile(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={(e) => handleUpdate(e)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short URL</label>
                  <input
                    type="text"
                    name="shortUrl"
                    value={formData.shortUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter short URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full URL</label>
                  <input
                    type="text"
                    name="URL"
                    value={formData.URL}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter full URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status}
                    name="status"
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="active">Activate</option>
                    <option value="inactive">Deactivated</option>
                  </select>
                </div>
                <div className="px-4">
                  <span className="font-medium">Created on:</span>
                  <span></span>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setOpenEditFile(null)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors w-full sm:w-auto"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-4 py-2 text-white rounded-xl transition-colors w-full sm:w-auto ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-400 shadow-md"}`}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
                {message && (
                  <div className="mb-4 p-3 text-sm text-green-700 bg-green-100 rounded-lg">{message}</div>
                )}
              </form>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default ManageLinksPage;
