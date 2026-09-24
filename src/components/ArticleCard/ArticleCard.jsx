import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import LikeButton from '../LikeButton/LikeButton';
import commentIcon from '../../assets/icons/comment.svg';
import styles from './ArticleCard.module.css';

function ArticleCard({
    title,
    description,
    imageUrl,
    category,
    author,
    authorAvatar,
    date,
    readTime,
    likes = 0,
    onCommentClick,
}) {
    return (
        <article className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.image} />

            <div className={styles.content}>
                {category && <span className={styles.tag}>{category}</span>}
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.meta}>
                    {date} · {readTime} мин чтения
                </p>
            </div>

            <div className={styles.footer}>
                <div className={styles.author}>
                    <Avatar src={authorAvatar} name={author} size="small" />
                    <span className={styles.authorName}>{author}</span>
                </div>

                <div className={styles.actions}>
                    <LikeButton initialLikes={likes} />
                    <Button icon={commentIcon} onClick={onCommentClick}>
                        Comment
                    </Button>
                </div>
            </div>
        </article>
    );
}

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string,
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string,
    date: PropTypes.string,
    readTime: PropTypes.number,
    likes: PropTypes.number,
    onCommentClick: PropTypes.func,
};

export default ArticleCard;