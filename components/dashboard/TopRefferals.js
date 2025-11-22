"use client";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";

const TopRefferals = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard/toprefferals");
        const data = await response.json();
        setData(data.doc);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mt-4 translate-x-5 translate-y-2">
        Top Referrers
      </h3>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            {data.map((referrer, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{referrer.url}</span>
                <span className="font-medium">{referrer.clicks}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRefferals;
