import React from 'react';
import notFoundPhoto from '../../assets/not-found.svg';
import styles from './styles.module.css';

const NotFound = (props) => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.photoContainer}>
                    <span className={styles.errorCode}>404</span>
                    <img src={notFoundPhoto} className={styles.photo} />
                </div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.description}>
                    The page you are looking for could not be found.
                </p>
            </div>
        </section>
    );
};

NotFound.propTypes = {};

export default NotFound;
