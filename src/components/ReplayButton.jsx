import React from 'react';

function ReplayButton({ onReplay }) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-5xl font-bold mb-2 font-serif'>Game Over!</h1>
            <svg 
                onClick={onReplay} 
                xmlns="http://www.w3.org/2000/svg" 
                className=" mt-10 icon icon-tabler icon-tabler-repeat cursor-pointer hover:scale-110 transition-transform duration-200" 
                width="66" 
                height="66" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="#ffffff" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
            </svg>
        </div>
    );
}

export default ReplayButton;
