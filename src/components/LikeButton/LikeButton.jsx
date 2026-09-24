import { useState } from 'react';
import PropTypes from 'prop-types';
import likeIcon from '../../assets/icons/like.svg';
import styles from './LikeButton.module.css';

function LikeButton({ initialLikes = 0 }) {
  // Состояние 1: текущее количество лайков
  const [likes, setLikes] = useState(initialLikes);
  // Состояние 2: поставил ли пользователь лайк
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1); // повторный клик — убираем лайк
    } else {
      setLikes((prev) => prev + 1); // первый клик — ставим лайк
    }
    setIsLiked(!isLiked);
  };

  return (
    <button
      type="button"
      className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
      onClick={handleClick}
      aria-pressed={isLiked}
      aria-label={isLiked ? 'Убрать лайк' : 'Поставить лайк'}
    >
      <span>Like</span>
      <img src={likeIcon} alt="" className={styles.icon} />
      <span className={styles.counter}>{likes}</span>
    </button>
  );
}

LikeButton.propTypes = {
  initialLikes: PropTypes.number,
};

export default LikeButton;