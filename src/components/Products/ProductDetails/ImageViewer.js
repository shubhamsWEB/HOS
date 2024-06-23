'use client'
import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {advancedSlides,slides} from '../../../constants/slides';
function ImageViewer({images}) {
    const [basicExampleOpen, setBasicExampleOpen] = React.useState(false);
    const [advancedExampleOpen, setAdvancedExampleOpen] = React.useState(true);
    return (
        <Lightbox
            open={advancedExampleOpen}
            close={() => setAdvancedExampleOpen(false)}
            slides={images}
            plugins={[Inline,Fullscreen, Thumbnails, Video, Zoom]}
            inline={{
                style: {
                  width: "100%",
                  maxWidth: "900px",
                  height:'95%',
                  aspectRatio: "3 / 3",
                  margin: "0 auto",
                },
              }}
        />
    )
}

export default ImageViewer