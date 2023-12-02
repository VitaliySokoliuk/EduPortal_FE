import logo from './../../assets/icons/logo.png';
import './Main.scss';
import './../../utils/normilize.scss';
import { CourseCard } from '../CourseCard/CourseCard';
import coding from './../../assets/images/coding.png';
const cards = [
  {
    title: 'Програмування для початківців',
    author: 'Antoni Gaudi',
    cDate: 'Mon, Oct 16th 2023',
    description: 'Якщо входите в ІТ, то програмування — це ж база! З чого почати? Можна з цього курсу — пізнайте логіку програмування і його базові поняття. Прослухайте, що таке алгоритм, яка різниця між мовами C, C++, Java, Python і як розробити вебсторінку.Потім навчіться читати і писати код, зрозумійте рядковий тип даних, простий цикл та структуру даних. Визначайте помилки в коді та виправляйте їх.',
    readersNum: 79,
    articleNum: 8,
    rating: 4.9,
    imgLogo: coding
  },
  {
    title: 'Програмування для початківців22222222222',
    author: 'Antoni Gaudi',
    cDate: 'Mon, Oct 16th 2023',
    description: 'Якщо входите в ІТ, то програмування — це ж база! З чого почати? Можна з цього курсу — пізнайте логіку програмування і його базові поняття. Прослухайте, що таке алгоритм, яка різниця між мовами C, C++, Java, Python і як розробити вебсторінку.Потім навчіться читати і писати код, зрозумійте рядковий тип даних, простий цикл та структуру даних. Визначайте помилки в коді та виправляйте їх.',
    readersNum: 79,
    articleNum: 8,
    rating: 4.9,
    imgLogo: coding
  }
]

export const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__top">
          <img
            src={logo}
            alt="Logo"
            className="main__image"
          />
          <p className="main__intro">
            Сподіваюся, ви знайдете EduPortal корисним для себе, незалежно від того, чи ви студент, який потребує підвищення мотивації та знань, чи ви викладач, який хоче надихати та змінювати життя інших людей.
          </p>
        </div>
        <div className="main__popular-courses popular-courses">
          <p className="popular-courses__text">Найпопулярніші курси</p>
          <div className="popular-courses__cards">
            {
              cards.map((item, index) => (
                <CourseCard 
                key = {index}
                title = {item.title}
                author = {item.author}
                cDate = {item.cDate}
                description = {item.description}
                readersNum = {item.readersNum}
                articleNum = {item.articleNum}
                rating = {item.rating}
                imgLogo = {item.imgLogo}
                />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}