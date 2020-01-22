import React from 'react'
import ReactPlayer from 'react-player'

const VisualArtModule = ( props ) => {
    const videoMedia = props.media
    // console.log( videoMedia, videoMedia.file.url )

    return (
        <div className="w-full px-6 mb-2 player-wrapper">
            <ReactPlayer
                id={videoMedia.id}
                loading="lazy"
                url={videoMedia.file.url}
                className="mx-auto rounded-lg shadow-xl"
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
