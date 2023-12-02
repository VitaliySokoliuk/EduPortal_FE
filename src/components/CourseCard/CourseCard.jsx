import './CourseCard.scss';

export const CourseCard = (props) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__content">
          <div className="card__top">
            <h1 className="card__title">{props.title}</h1>
            <p className="card__author">{props.author}</p>
            <p className="card__date">{props.cDate}</p>
          </div>
          <p className="card__description">{props.description}</p>
          <div className="card__tags tags">
            <div className="tags__tag">{props.readersNum} читачів</div>
            <div className="tags__tag">{props.articleNum} статей</div>
            <div className="tags__tag">Рейтинг {props.rating}</div>
          </div>
        </div>
        <div className="card__image-container">
          <img
            src={props.imgLogo}
            alt="Card"
            className="card__image"
          />
        </div>
      </div>
    </div>
  )
}