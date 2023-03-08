import React, { useEffect, useState } from 'react'
import axios from 'axios';

const getRandomPhotos = async (page) => {
    // return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    //     .then((response) => {
    //         // handle success
    //         // console.log(response);
    //         return response.data
    //     })
    //     .catch((error) => {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });
    try {
        try {
            const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
            return response.data;
        } catch (error) {
            // handle error
            console.log(error);
        }
    } finally { }
}





const Photos = () => {
    const [nextPage, setNextPage] = useState(1)
    const [random, setRandom] = useState([]);

    const hanldeLoadMorePhotos = async () => {
        // getRandomPhotos(nextPage).then((images) => {
        //     console.log(images)
        //     //concat array
        //     const newPhoto = [...random, ...images]
        //     setRandom(newPhoto)
        //     setNextPage(nextPage + 1)

        // })
        const images = await getRandomPhotos(nextPage)
        const newPhoto = [...random, ...images]
            setRandom(newPhoto)
            setNextPage(nextPage + 1)
    }

    // console.log("outside")
    useEffect(() => {
        // document.title = 'welcome'
        // console.log('inside')
        hanldeLoadMorePhotos()
    }, [])
    return (
        <div>
            <div className='grid grid-cols-4 gap-5 p-5'>
                {/* {JSON.stringify(random)} */}
                {
                    random.length > 0 && random.map((item, index) => (
                        <div key={item.download_url} className="p-3 bg-white shadow-md rounded-lg ">
                            <img src={item.download_url} alt={item.author} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))
                }

            </div>
            <div className='text-center'>
                <button onClick={hanldeLoadMorePhotos} className='inline-block px-8 py-4 bg-purple-600 text-white'>
                    Load more
                </button>
            </div>
        </div>

    )
}

export default Photos