import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import useVideos from '../Hooks/useVideos'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('best cars')

    useEffect(() => {
        setSelectedVideo(videos[0])
        
    }, [videos]);

     return (
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onFormSubmit={search} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="">
                            <VideoList
                                onVideoSelect={setSelectedVideo}
                                videos={videos} />
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default App