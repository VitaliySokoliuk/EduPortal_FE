import React from 'react';

import mainLogo from './../../assets/icons/logo.png';
import './Home.scss';
import './../../utils/normilize.scss';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Header } from '../../components/Header/Header';
import contentLogo1 from './../../assets/images/coding.png';
import contentLogo2 from './../../assets/images/bootstrap.png';

const cards = [
  {
    title: 'Програмування для початківців',
    author: 'Antoni Gaudi',
    cDate: 'Mon, Oct 16th 2023',
    description: 'Якщо входите в ІТ, то програмування — це ж база! З чого почати? Можна з цього курсу — пізнайте логіку програмування і його базові поняття. Прослухайте, що таке алгоритм, яка різниця між мовами C, C++, Java, Python і як розробити вебсторінку.Потім навчіться читати і писати код, зрозумійте рядковий тип даних, простий цикл та структуру даних. Визначайте помилки в коді та виправляйте їх.',
    readersNum: 79,
    articleNum: 8,
    rating: 4.9,
    imgLogo: contentLogo1
  },
  {
    title: 'Що таке Bootstrap і з чим його їдять?',
    author: 'Antoni Gaudi',
    cDate: 'Fri, Oct 27th 2023',
    description: 'Кожному веб-розробнику рано чи пізно доводиться шукати кошти для спрощення і прискорення розробки сайтів. Найчастіше для цього використовуються різні фреймворки. Bootstrap є одним з найпопулярніших і затребуваних платформ. Тому коротко розглянемо питання “Bootstrap – що це?',
    readersNum: 34,
    articleNum: 15,
    rating: 4.8,
    imgLogo: contentLogo2
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <div className="home__container">
          <div className="home__top">
            <img
              src={mainLogo}
              alt="Logo"
              className="home__image"
            />
            <p className="home__intro">
              Сподіваюся, ви знайдете EduPortal корисним для себе, незалежно від того, чи ви студент, який потребує підвищення мотивації та знань, чи ви викладач, який хоче надихати та змінювати життя інших людей.
            </p>
          </div>
          <div className="home__popular-courses popular-courses">
            <p className="popular-courses__text">Найпопулярніші курси</p>
            <div className="popular-courses__cards">
              {
                cards.map((item, index) => (
                  <CourseCard
                    key={index}
                    title={item.title}
                    author={item.author}
                    cDate={item.cDate}
                    description={item.description}
                    readersNum={item.readersNum}
                    articleNum={item.articleNum}
                    rating={item.rating}
                    imgLogo={item.imgLogo}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}