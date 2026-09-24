# BlogSpace — блоговая платформа

Лабораторная работа №2 по дисциплине «Интерфейсы информационных систем» (БГУИР).
Тема: «Создание базовой структуры веб-приложения на React с использованием компонентов, JSX и управления состоянием».
Вариант 4 — блоговая платформа.

Выполнила: Ковалева К.В., гр. 310901.

React-приложение, в котором UI-компоненты из дизайн-системы ЛР №1
([макет в Figma](https://www.figma.com/design/r9i1dOZSqjij5Y1Uo05Ix9/Untitled?node-id=0-1&t=27GouLqfGqoaEZIW-1))
реализованы как функциональные компоненты с интерактивностью на хуке `useState`.

## Возможности

- Список карточек статей: данные передаются в `ArticleCard` через props.
- Кнопка Like со счётчиком: первый клик ставит лайк (кнопка красная, счётчик +1),
  повторный клик снимает лайк (кнопка снова серая, счётчик −1).
- Кнопка Comment открывает и закрывает форму комментария под своей статьёй.
- Поле комментария хранит текст в `useState`, показывает количество символов;
  кнопка «Отправить» неактивна, пока поле пустое.
- У каждой статьи свой список комментариев, он выводится в колонку под карточкой.

## Технологии

- React 19 — только функциональные компоненты, JSX, хук `useState`
- Vite — сборка и dev-сервер
- CSS Modules — инкапсулированные стили (`*.module.css`)
- PropTypes — проверка типов props
- Oxlint — проверка кода, Prettier — форматирование

Внешние библиотеки для управления состоянием (Redux, MobX, Zustand) не используются.

## Запуск проекта

Требуется [Node.js](https://nodejs.org/) версии 20 или выше (проверить: `node -v`).

1. Клонировать репозиторий и перейти в папку проекта:

   ```bash
   git clone https://github.com/krisssstt/blog-platform/
   cd blog-platform
   ```

2. Установить зависимости:

   ```bash
   npm install
   ```

3. Запустить dev-сервер:

   ```bash
   npm run dev
   ```

4. Открыть в браузере адрес из терминала (обычно http://localhost:5173).
   Остановить сервер — `Ctrl + C` в терминале.

> Windows: если PowerShell пишет, что выполнение сценариев отключено (`npm.ps1`),
> один раз выполните `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` и перезапустите терминал.

## Другие команды

| Команда | Что делает |
|---|---|
| `npm run build` | production-сборка в папку `dist` |
| `npm run preview` | просмотр собранной версии |
| `npm run lint` | проверка кода линтером Oxlint |
| `npx prettier --write src` | форматирование кода по правилам из `.prettierrc` |

## Структура проекта

```
blog-platform/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/            # like.svg, comment.svg, publish.svg, logo.svg, avatar-placeholder.png
│   │   └── images/           # article-cover.jpg — обложка статьи
│   ├── components/
│   │   ├── ArticleCard/      # карточка статьи (данные через props)
│   │   ├── Avatar/           # аватар пользователя с заглушкой
│   │   ├── Button/           # базовая кнопка (Primary / Secondary / Disabled)
│   │   ├── CommentInput/     # форма комментария (useState для текста)
│   │   └── LikeButton/       # кнопка лайка (useState для счётчика и статуса)
│   ├── data/articles.js      # тестовые данные статей
│   ├── App.jsx               # главная страница, комментарии по статьям
│   ├── App.module.css
│   ├── index.css             # дизайн-токены: цвета, шрифт, радиусы
│   └── main.jsx              # точка входа
├── .editorconfig             # кодировка UTF-8 для всех файлов
├── .prettierrc               # настройки форматирования
├── index.html
├── package.json
└── vite.config.js
```

Каждый компонент лежит в своей папке: `Название.jsx` + `Название.module.css`.

## Компоненты

| Компонент | Props | Локальное состояние (`useState`) |
|---|---|---|
| `LikeButton` | `initialLikes` | `likes` — число лайков, `isLiked` — поставлен ли лайк |
| `CommentInput` | `title`, `placeholder`, `onSubmit` | `text` — текст комментария |
| `ArticleCard` | `title`, `description`, `imageUrl`, `category`, `author`, `authorAvatar`, `date`, `readTime`, `likes`, `onCommentClick` | нет, данные только через props |
| `Button` | `children`, `variant`, `icon`, `onClick`, `disabled`, `type` | нет |
| `Avatar` | `src`, `name`, `size` | нет |
| `App` | — | `comments` — комментарии по id статьи, `openFormId` — у какой статьи открыта форма |

Комментарии хранятся только в памяти браузера и пропадают после перезагрузки страницы.
