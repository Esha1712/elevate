import { useState } from "react";
import styles from './ElevateAnimation.module.css';

const ElevateAnimation = () => {
    const [key, setKey] = useState(0);

    const retriggerAnimation = () => {
        setKey(prevKey => prevKey + 1);
    };

    return (
        <div key={key} className={styles.logoContainer}>
            <div className={styles.wing}></div>
            <div className={styles.elevateWing}></div>
            <h1 className={styles.logoText}>
                <span>E</span>
                <span>L</span>
                <span>E</span>
                <span>V</span>
                <span>A</span>
                <span>T</span>
                <span>E</span>
            </h1>
            <button
                onClick={retriggerAnimation}
                style={{
                    marginTop: '50px',
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Re-trigger Animation
            </button>
        </div>
    )
}

export default ElevateAnimation
