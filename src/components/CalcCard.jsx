import React from 'react';

function OvalCard({ number, title, bgColor, }) {
    return (
        <div className={`${bgColor} dark:bg-gray-800 rounded-full shadow-lg p-6 w-34 h-34 flex flex-col items-center justify-center`}>
            <div className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {parseFloat(number).toFixed(2)}
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-400">
                {title}
            </div>
        </div>
    );
}

export default OvalCard;
