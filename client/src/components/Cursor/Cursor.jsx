import React, { useState, useEffect } from 'react';
import './Cursor.css';
import { motion } from "framer-motion"

function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);


    const variants = {
       default: {
            x: mousePosition.x-5,
            y: mousePosition.y-5,
       },
       text: {
            // Define other variants if needed
       }
    };

    return (
        <motion.div className='cursor' variants={variants} animate={cursorVariant}>
        </motion.div>
    );
}

export default Cursor;
