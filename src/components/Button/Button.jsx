import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, variant = 'primary', icon, onClick, disabled = false, type = 'button' }) {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{children}</span>
            {icon && <img src={icon} alt="" className={styles.icon} />}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    icon: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
};

export default Button;