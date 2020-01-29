import React from 'react'
import ReactPlayer from 'react-player'

const VisualArtModule = ( props ) => {
    const videoMedia = props.media

    return (
        <div className="player-wrapper rounded-xl">
            <ReactPlayer
                id={videoMedia.id}
                loading="lazy"
                url={videoMedia.file.url}
                className="mx-auto shadow-lg outline-none"
                playing={false}
                muted={true}
                controls={true}
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default VisualArtModule
