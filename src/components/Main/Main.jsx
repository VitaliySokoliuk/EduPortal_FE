import logo from './../../assets/icons/logo.png';
import './Main.scss';
import './../../utils/normilize.scss';
import { CourseCard1 } from '../CourseCard/CourseCard1';
import { CourseCard2 } from '../CourseCard/CourseCard2';

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
            <CourseCard1 />
            <CourseCard2 />
          </div>
        </div>
      </div>
    </main>
  )
}