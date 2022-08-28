import React from "react"
import images from '../export/imges.js'
import '..//styles/Tortas.css'
import { motion } from "framer-motion";

const Tortas = (props) => {
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{ right: 0, left: -2800 }}>
                {images.map(image => (
                    <motion.div className="item">
                        <img src={image} alt="" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Tortas;