import React from 'react';
import './CourseContent.scss';
import { Header } from '../../components/Header/Header';
import contentLogo1 from './../../assets/images/coding.png';

const card = {
    title: 'Програмування для початківців',
    cDate: 'Mon, Oct 16th 2023',
    description: 'Якщо входите в ІТ, то програмування — це ж база! З чого почати? Можна з цього курсу — пізнайте логіку програмування і його базові поняття. Прослухайте, що таке алгоритм, яка різниця між мовами C, C++, Java, Python і як розробити вебсторінку.Потім навчіться читати і писати код, зрозумійте рядковий тип даних, простий цикл та структуру даних. Визначайте помилки в коді та виправляйте їх.',
    imgLogo: contentLogo1
}


export default function Cabinet() {
    return (
        <>
            <Header />
            <div className="ml-5 mr-5">
                <div className="card mt-4">
                    <div className="card__container">
                        <div>
                            <div className="card__top">
                                <h1 className="card__title">{card.title}</h1>
                                <p className="card__date">{card.cDate}</p>
                            </div>
                            <p className="card__description">{card.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper mt-3">
                <h2>Статті в курсі</h2>
                <ul class="ul_class">
                    <li class="li_class"><a class="nav__link" href='/article/1'><span class = "span_num">1</span> Огляд мов, технологій та напрямів програмування</a></li>
                    <li class="li_class"><a class="nav__link" href='/article/2'><span class = "span_num">2</span> Системи чистення, базові оператори та конструкції </a></li>
                    <li class="li_class"><a class="nav__link" href='/article/3'><span class = "span_num">3</span> Цикли, масиви, функції</a></li>
                    <li class="li_class"><a class="nav__link" href='/article/4'><span class = "span_num">4</span> Алгоритми та робота з різними типами даних</a></li>
                    <li class="li_class"><a class="nav__link" href='/article/5'><span class = "span_num">5</span> Принципи ООП з Java</a></li>
                    <li class="li_class"><a class="nav__link" href='/article/6'><span class = "span_num">6</span> Функціональний та прототипний стиль у програмуванні</a></li>
                    <li class="li_class"><a class="nav__link" href='/article/7'><span class = "span_num">7</span> Робота з базами даних, проектування таблиць та зв'язків між ними</a></li>
                    <li class="li_class"><a class="nav__link" href='/article/8'><span class = "span_num">8</span> Знайомство з GIT</a></li>
                </ul>
            </div>
        </>
    )
}