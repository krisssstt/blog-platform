import PropTypes from 'prop-types';
import placeholder from '../../assets/icons/avatar-placeholder.png';
import styles from './Avatar.module.css';

function Avatar({ src, name = 'Пользователь', size = 'medium' }) {
    return (
        <img
            src={src || placeholder}
            alt={name}
            className={`${styles.avatar} ${styles[size]}`}
        />
    );
}

Avatar.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Avatar;