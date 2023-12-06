import React, { useState } from 'react';
import './CreateArticle.scss';
import { Header } from '../../components/Header/Header';
import { CKEditor } from 'ckeditor4-react';


export default function CreateArticle() {
    return (
        <>
            <Header />
            <div class="container rounded mt-5">
                <form class="form_container" action="/cabinet/createArticle" enctype="multipart/form-data" method="post">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex flex-row align-items-center">
                                <h4>Створити статтю</h4>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label>Назва</label>
                                <input required type="text" maxlength="60" class="form-control" name="title" />
                            </div>
                            <div class="col-md-6">
                                <label>Логотип</label> <br />
                                <input type="file" name="logo" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label>Напрям</label>
                                <input required type="text" maxlength="30" class="form-control" name="chapter" />
                            </div>
                            <div class="col-md-6">
                                <label>Розділ</label>
                                <select class="form-control" name="topic">
                                    <option value="Value">back end</option>
                                    <option value="Value">fron end</option>
                                    <option value="Value">dev ops</option>
                                    <option value="Value">testing</option>
                                    <option value="Value">game dev</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <label>Опис</label>
                                <textarea required class="form-control" name="description" maxlength="200" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <label>Наповнення</label>
                                <CKEditor />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label>Доступність</label> <br />
                                <input type="radio" name="paid" value="false" checked /> Безкоштовна стаття <br />
                                <input type="radio" name="paid" value="true" /> Платна стаття
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-3">
                                <label>Ціна</label>
                                <input type="number" class="form-control" step="0.1" name="price" min="0" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label>Додаткове завдання</label>
                                <textarea class="form-control" minlength="10" maxlength="255" name="hometask" cols="30" rows="5"></textarea>
                            </div>
                            <div class="col-md-3">
                                <br />
                                <input type="checkbox" name="give_answers" value="true" /> Дозволити надавати відповіді
                            </div>
                            <div class="col-md-3">
                                <label>Максимальна оцінка</label> <br />
                                <input min="0" class="form-control" type="number" name="max_point" />
                            </div>
                        </div>
                        <div class="mt-5 text-right">
                            <a href="/cabinet" class="btn btn-dark mr-3">Скасувати</a>
                            <button class="btn btn-dark" type="submit">Створити статтю</button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}