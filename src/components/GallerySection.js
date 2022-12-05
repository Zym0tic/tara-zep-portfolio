import React from 'react';
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
  return <div>GallerySection</div>;
};

export default GallerySection;
