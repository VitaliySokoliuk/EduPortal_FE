import React from 'react';
import './Cabinet.scss';
import { Header } from '../../components/Header/Header';
import { CourseCard } from '../../components/CourseCard/CourseCard';
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
const user = {
  firstName: 'Antoni',
  lastName: 'Gaudi',
  email: 'antoni_g@gmail.com',
  numOfCourses: 2,
  numOfArticles: 23,
}

export default function Cabinet() {
  return (
    <>
      <Header />
      <div class="row py-5 px-4">
        <div class="col-md-8 mx-auto">
          <div class="underPhoto shadow rounded overflow-hidden pb-4">
            <div class="px-5 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-4">
                  <div class="img_container">
                    <img alt="..." class="rounded mb-2 img-thumbnail"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Antoni_Gaudi_1878.jpg/800px-Antoni_Gaudi_1878.jpg" />
                  </div>
                  <a href="/cabinet/updateUser" class="btn btn-outline-light btn-block p-2 mt-1 font-weight-bold btn_outline">Редагувати профіль</a>
                </div>
                <div class="media-body mb-5">
                  <h3 class="mt-0 mb-0">{user.firstName} {user.lastName}</h3>
                  <p class="mb-4">{user.email}</p>
                </div>
              </div>
            </div>
            <div class="p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item ">
                  <h4 class="font-weight-bold mb-0 d-block">{user.numOfCourses}</h4><span class="font-weight-bold mb-0 d-block">Курсів</span>
                </li>
                <li class="list-inline-item">
                  <h4 class="font-weight-bold mb-0 d-block">{user.numOfArticles}</h4><span class="font-weight-bold mb-0 d-block">Статей</span>
                </li>
              </ul>
            </div>
            <div class="d-flex justify-content-between ml-4 mr-4">
              <a href="/cabinet/createCourse" class="btn btn-outline-dark btn-sm btn-block m-2 p-2"><h5>Створити курс</h5></a>
              <a href="/cabinet/createArticle" class="btn btn-outline-dark btn-sm btn-block m-2 p-2"><h5>Створити статтю</h5></a>
              <a href="/cabinet/allAnswers" class="btn btn-outline-dark btn-sm btn-block m-2 p-2"><h5>Всі відповіді</h5></a>
            </div>
          </div>
          <div class="py-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Мої курси</h5>
            </div>
          </div>
        </div>
        <div className="ml-5 mr-5">
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
    </>
  )
}
