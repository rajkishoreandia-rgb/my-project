import React, { useState, useEffect } from 'react';

function ApiCall() {
    const [photosList, setphotosList] = useState([]);

    useEffect(() => {
        getPhotosGallery();
    }, []);

    const getPhotosGallery = async () => {
        const res = await fetch('https://picsum.photos/v2/list?page=2&limit=50');
        const photosDetails = await res.json();
        setphotosList(photosDetails);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1">
                {photosList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-12 h-12 border-4 border-amber-700 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <div className="text-lg text-gray-600">Loading...</div>
                    </div>
                ) : photosList.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                        {photosList.map((photo) => (
                            <div key={photo.id} className="bg-white rounded shadow p-4 text-center">
                                <img
                                    src={photo.download_url}
                                    alt={photo.author}
                                    className="w-full h-48 object-cover rounded-md mb-2"
                                />
                                <h6 className="text-emerald-600 font-semibold">{photo.author}</h6>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16">
                        <span className="text-2xl text-gray-500 font-semibold">No records found</span>
                    </div>
                )}
            </div>
            <footer className="w-full py-4  bg-amber-100 flex justify-center items-center shadow-inner sticky bottom-0 z-10">
                <button
                    onClick={getPhotosGallery}
                    className="px-6 py-2 cursor-pointer bg-amber-700 text-white rounded hover:bg-amber-800 transition font-semibold shadow focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-60 active:scale-95"
                >
                    <span className="inline-block animate-pulse mr-2">&#9889;</span>
                    Refresh
                </button>
            </footer>
        </div>
    );
}

export default ApiCall;