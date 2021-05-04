import {useState, useEffect} from 'react'
import Youtube from '../component/Youtube'

const useVideos = (defaulSearchTerm) => {
  const [videos, setVideos] = useState([])
  
      useEffect(() => {
        search(defaulSearchTerm )
    }, [defaulSearchTerm])
    
    const search = async term => {
       const response = await Youtube.get('/search', {
            params: {
                q: term,
               part: 'snippet',
                type: 'video',
                maxResults: 100,
           key: 'AIzaSyBcMb28aF9Aln0p33fJ-ZuqZWedrSsqJcU',
            }
       });
        setVideos(response.data.items)
    };
  
  return [videos,  search ]

}

export default useVideos