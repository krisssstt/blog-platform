import { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import commentIcon from '../../assets/icons/comment.svg';
import styles from './CommentInput.module.css';

function CommentInput({ title = 'Оставить комментарий', placeholder = 'Напишите ваш комментарий...', onSubmit }) {
    // Локальное состояние: текст комментария (контролируемое поле)
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = text.trim();
        if (!value) return;

        console.log('Комментарий:', value);
        if (onSubmit) onSubmit(value);
        setText(''); // очищаем поле после отправки
    };

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.row}>
                <Avatar size="small" />
                <textarea
                    className={styles.textarea}
                    value={text}
                    onChange={handleChange}
                    placeholder={placeholder}
                    rows={3}
                />
            </div>

            <div className={styles.footer}>
                <span className={styles.counter}>{text.length} символов</span>
                <Button type="submit" icon={commentIcon} disabled={!text.trim()}>
                    Отправить
                </Button>
            </div>
        </form>
    );
}

CommentInput.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
};

export default CommentInput;