import React from 'react';

const StatsCard = ({ stat }) => {
  return (
    <div className="text-center p-6 rounded-lg hover:bg-white/10 transition-all">
      <div className="flex justify-center mb-4">{stat.icon}</div>
      <div className="text-4xl font-bold mb-2">{stat.value}</div>
      <div className="text-white/80">{stat.label}</div>
    </div>
  );
};

export default StatsCard;
