import './CourseCard.scss';
import bootstrap from './../../assets/images/bootstrap.png';

export const CourseCard2 = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__content">
          <div className="card__top">
            <h1 className="card__title">Що таке Bootstrap і з чим його їдять?</h1>
            <p className="card__author">Antoni Gaudi</p>
            <p className="card__date">Fri, Oct 27th 2023</p>
          </div>
          <p className="card__description">
            Кожному веб-розробнику рано чи пізно доводиться шукати кошти для спрощення і прискорення розробки сайтів. Найчастіше для цього використовуються різні фреймворки. Bootstrap є одним з найпопулярніших і затребуваних платформ. Тому коротко розглянемо питання “Bootstrap – що це?”
          </p>
          <div className="card__tags tags">
            <div className="tags__tag">34 читачі</div>
            <div className="tags__tag">15 статей</div>
            <div className="tags__tag">Рейтинг 4.8</div>
          </div>
        </div>
        <div className="card__image-container">
          <img
            src={bootstrap}
            alt="Card"
            className="card__image"
          />
        </div>
      </div>
    </div>
  )
}