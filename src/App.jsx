import { useState } from 'react';
import ArticleCard from './components/ArticleCard/ArticleCard';
import CommentInput from './components/CommentInput/CommentInput';
import Avatar from './components/Avatar/Avatar';
import Button from './components/Button/Button';
import articles from './data/articles';
import logo from './assets/icons/logo.svg';
import publishIcon from './assets/icons/publish.svg';
import styles from './App.module.css';

function App() {
    // Комментарии для каждой статьи: { 1: [...], 2: [...], 3: [...] }
    const [comments, setComments] = useState({});
    // id статьи, у которой сейчас открыта форма комментария (null — ни у одной)
    const [openFormId, setOpenFormId] = useState(null);

    const handleAddComment = (articleId, text) => {
        setComments((prev) => ({
            ...prev,
            [articleId]: [...(prev[articleId] || []), { id: Date.now(), text }],
        }));
    };

    const toggleForm = (articleId) => {
        setOpenFormId((prev) => (prev === articleId ? null : articleId));
    };

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src={logo} alt="BlogSpace" className={styles.logo} />
                <Button icon={publishIcon} onClick={() => console.log('Нажата кнопка «Опубликовать»')}>
                    Опубликовать
                </Button>
            </header>

            <main className={styles.main}>
                <h1 className={styles.heading}>Последние статьи</h1>

                <section className={styles.grid}>
                    {articles.map((article) => {
                        const articleComments = comments[article.id] || [];

                        return (
                            <div key={article.id} className={styles.column}>
                                <ArticleCard
                                    title={article.title}
                                    description={article.description}
                                    imageUrl={article.imageUrl}
                                    category={article.category}
                                    author={article.author}
                                    date={article.date}
                                    readTime={article.readTime}
                                    likes={article.likes}
                                    onCommentClick={() => toggleForm(article.id)}
                                />

                                {openFormId === article.id && (
                                    <CommentInput onSubmit={(text) => handleAddComment(article.id, text)} />
                                )}

                                {articleComments.length > 0 && (
                                    <ul className={styles.commentList}>
                                        {articleComments.map((comment) => (
                                            <li key={comment.id} className={styles.commentItem}>
                                                <Avatar size="small" />
                                                <p>{comment.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </section>
            </main>
        </div>
    );
}

export default App;