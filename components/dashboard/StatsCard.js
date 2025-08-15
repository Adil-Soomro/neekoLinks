import React from 'react'

const StatsCard = ({ title, value, icon: Icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-600 text-sm">{title}</h3>
                <Icon className="text-indigo-600" size={20} />
            </div>
            <p className="text-3xl font-semibold mt-2">{value.toLocaleString()}</p>
        </div>
    )
}

export default StatsCard
