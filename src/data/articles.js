import preview from '../assets/images/article-cover.jpg';
// Тестовые (mock) данные статей — передаются в ArticleCard через props
const articles = [
    {
        id: 1,
        title: 'Как начать вести блог',
        description: 'Пошаговое руководство для новичков: выбор темы, платформы и первые публикации.',
        imageUrl: preview,
        category: 'Советы',
        author: 'Анна Смирнова',
        date: '12 сентября 2026',
        readTime: 5,
        likes: 12,
    },
    {
        id: 2,
        title: 'Основы React для начинающих',
        description: 'Разбираем компоненты, JSX, props и хук useState на простых примерах.',
        imageUrl: preview,
        category: 'Разработка',
        author: 'Иван Петров',
        date: '18 сентября 2026',
        readTime: 8,
        likes: 34,
    },
    {
        id: 3,
        title: 'Дизайн-системы в Figma',
        description: 'Как Auto Layout, Variants и Styles помогают быстрее переносить макеты в код.',
        imageUrl: preview,
        category: 'Дизайн',
        author: 'Мария Ковалёва',
        date: '21 сентября 2026',
        readTime: 6,
        likes: 7,
    },
];

export default articles;