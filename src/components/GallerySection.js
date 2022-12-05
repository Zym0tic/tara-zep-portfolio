import React, { useState } from 'react';
//import data
import { galleryData } from '../data';
// import photo album nad lightbox
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
//lightbox css
import 'yet-another-react-lightbox/styles.css'
//import motion
import { motion } from 'framer-motion';
//import fadein
import { fadeIn } from '../variants';

//slides
const slides = galleryData.images.map(({original, width, height}) => ({
  src: original,
  width,
  height,
}));

const GallerySection = () => {
  // index state
  const [index, setIndex] = useState(-1);
  //destructure gallery data
  const { title, btnText, btnIcon, images } = galleryData;

  return <section className='bg-pink-200 section relative mt-[40px] lg:mt-0'>
    <div className='container mx-auto'>
      <h2>{title}</h2>
    </div>
  {/* photo album */}
  <PhotoAlbum layout='rows' photos={images}/> 
    </section>;
};

export default GallerySection;
