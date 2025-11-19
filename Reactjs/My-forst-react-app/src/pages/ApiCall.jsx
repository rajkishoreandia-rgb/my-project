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
        <div className="min-h-screen bg-gray-50">
            <h3 className="sticky top-0 z-10 w-full text-center py-5 bg-amber-700 text-2xl text-emerald-800 shadow-md">
                Api Call Using UseEffect Hook
            </h3>


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
        </div>
    );
}

export default ApiCall;