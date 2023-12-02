import './CourseCard.scss';
import coding from './../../assets/images/coding.png';

export const CourseCard1 = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__content">
          <div className="card__top">
            <h1 className="card__title">Програмування для початківців</h1>
            <p className="card__author">Antoni Gaudi</p>
            <p className="card__date">Mon, Oct 16th 2023</p>
          </div>
          <p className="card__description">
            Якщо входите в ІТ, то програмування — це ж база! З чого почати? Можна з цього курсу — пізнайте логіку програмування і його базові поняття. Прослухайте, що таке алгоритм, яка різниця між мовами C, C++, Java, Python і як розробити вебсторінку.
            Потім навчіться читати і писати код, зрозумійте рядковий тип даних, простий цикл та структуру даних. Визначайте помилки в коді та виправляйте їх.
          </p>
          <div className="card__tags tags">
            <div className="tags__tag">79 читачів</div>
            <div className="tags__tag">8 статей</div>
            <div className="tags__tag">Рейтинг 4.9</div>
          </div>
        </div>
        <div className="card__image-container">
          <img
            src={coding}
            alt="Card"
            className="card__image"
          />
        </div>
      </div>
    </div>
  )
}