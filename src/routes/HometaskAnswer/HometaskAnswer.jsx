import './HometaskAnswer.scss';
import './../../utils/normilize.scss';
import { Header } from '../../components/Header/Header';
import likeEmpty from './../../assets/icons/like-empty.svg';
import likeFilled from './../../assets/icons/like-filled.svg';

export default function HometaskAnswer() {
    return (
        <>
            <Header />
            <div class="container my-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-12">
                        <div class="card">
                            <div class="card-body p-4">
                                <h4 class="text-center mb-4 pb-2">Відповіді студентів</h4>
                                <div class="row">
                                    <div class="col">
                                        <div class="d-flex flex-start">
                                            <a class="me-3" href="#">
                                                <img class="rounded-circle shadow-1-strong me-3 mr-3"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="65"
                                                    height="65" />
                                            </a>
                                            <div class="flex-grow-1 flex-shrink-1">
                                                <div class="d-flex flex-start justify-content-between">
                                                    <div>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <p class="mb-1">
                                                                Maria Smantha <span class="small">- 2 години тому</span>
                                                            </p>
                                                        </div>
                                                        <p class="small mb-0">
                                                            Код завантажений за посиланням https://github.com/RomanMandarinka/HomeWorks/tree/HW_5
                                                        </p>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <a href="#!">
                                                                <span class="small text-muted"> відповісти</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <p class="small mb-0 mr-2">Підтримую</p> <br />
                                                            <p class="small mb-0 mr-1">3</p>
                                                            <img src={likeEmpty} alt="like-empty" className='emoji' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="d-flex mt-4">
                                                    <a class="me-3" href="#">
                                                        <img class="rounded-circle shadow-1-strong mr-3"
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp" alt="avatar"
                                                            width="65" height="65" />
                                                    </a>
                                                    <div class="flex-grow-1 flex-shrink-1">
                                                        <div>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <p class="mb-1">
                                                                    Simona Disa <span class="small">- 3 години тому</span>
                                                                </p>
                                                            </div>
                                                            <p class="small mb-0">
                                                                Вважаю що у класі EncapsulationClass потрібно змінити дефолтний модифікотор доступу на private
                                                            </p>
                                                            <div class="d-flex flex-row align-items-center">
                                                                <a href="#!">
                                                                    <span class="small text-muted"> відповісти</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <p class="small mb-0 mr-2 ml-auto">Підтримую</p> <br />
                                                            <p class="small mb-0 mr-1">5</p>
                                                            <img src={likeEmpty} alt="like-empty" className='emoji' />
                                                        </div>
                                                        <div class='d-flex'>
                                                            <div class="pr-2 align-self-center">
                                                                <div>
                                                                    Пропозиція:
                                                                </div>
                                                            </div>
                                                            <div class="p-2 align-self-center">
                                                                5/10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="d-flex mt-4">
                                                    <a class="me-3" href="#">
                                                        <img class="rounded-circle shadow-1-strong mr-3"
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                                            width="65" height="65" />
                                                    </a>
                                                    <div class="flex-grow-1 flex-shrink-1">
                                                        <div>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <p class="mb-1">
                                                                    John Smith <span class="small">- 4 години тому</span>
                                                                </p>
                                                            </div>
                                                            <p class="small mb-0">
                                                                На мою думку все виконано правильно, але форматування треба виправити і покращити назви класів та змінних
                                                            </p>
                                                            <div class="d-flex flex-row align-items-center">
                                                                <a href="#!">
                                                                    <span class="small text-muted"> відповісти</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <p class="small mb-0 mr-2 ml-auto">Підтримую</p> <br />
                                                            <p class="small mb-0 mr-1">6</p>
                                                            <img src={likeFilled} alt="like-empty" className='emoji' />
                                                        </div>
                                                        <div class='d-flex'>
                                                            <div class="pr-2 align-self-center">
                                                                <div>
                                                                    Пропозиція:
                                                                </div>
                                                                <div>
                                                                    <u>EncapsulationClass.java</u>
                                                                </div>
                                                            </div>
                                                            <div class="p-2 align-self-center">
                                                                8/10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex mt-4">
                                                    <a class="me-3" href="#">
                                                        <img class="rounded-circle shadow-1-strong mr-3"
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(12).webp" alt="avatar"
                                                            width="65" height="65" />
                                                    </a>
                                                    <div class="flex-grow-1 flex-shrink-1">
                                                        <div>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <p class="mb-1">
                                                                    Natalie Smith <span class="small">- 4 години тому</span>
                                                                </p>
                                                            </div>
                                                            <p class="small mb-0">
                                                                Я б змінила класи AbstractinTest і Main наступним чином
                                                            </p>
                                                            <div class="d-flex flex-row align-items-center">
                                                                <a href="#!">
                                                                    <span class="small text-muted"> відповісти</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <p class="small mb-0 mr-2 ml-auto">Підтримую</p> <br />
                                                            <p class="small mb-0 mr-1">4</p>
                                                            <img src={likeEmpty} alt="like-empty" className='emoji' />
                                                        </div>
                                                        <div class='d-flex'>
                                                            <div class="pr-2 align-self-center">
                                                                <div>
                                                                    Пропозиція:
                                                                </div>
                                                                <div>
                                                                    <u>AbstractinTest.java</u>
                                                                    <u class="pl-2">Main.java</u>
                                                                </div>
                                                            </div>
                                                            <div class="p-2 align-self-center">
                                                                7/10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div class="d-flex flex-start mt-3">
                                            <a class="me-3" href="#">
                                                <img class="rounded-circle shadow-1-strong me-3 mr-3"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(29).webp" alt="avatar" width="65"
                                                    height="65" />
                                            </a>
                                            <div class="flex-grow-1 flex-shrink-1">
                                                <div class="d-flex flex-start justify-content-between">
                                                    <div>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <p class="mb-1">
                                                                Maggie McLoan <span class="small">- 3 години тому</span>
                                                            </p>
                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <a href="#!">
                                                                <u>Main.java</u>
                                                                <u class="pl-2">IService.java</u>
                                                                <u class="pl-2">ServiceImpl.java</u>
                                                                <u class="pl-2">RelatedEntity.java</u>
                                                                <br />
                                                                <span class="small text-muted"> відповісти</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <p class="small mb-0 mr-2">Підтримую</p> <br />
                                                            <p class="small mb-0 mr-1">9</p>
                                                            <img src={likeFilled} alt="like-empty" className='emoji' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex mt-4">
                                                    <a class="me-3" href="#">
                                                        <img class="rounded-circle shadow-1-strong mr-3"
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                                            width="65" height="65" />
                                                    </a>
                                                    <div class="flex-grow-1 flex-shrink-1">
                                                        <div>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <p class="mb-1">
                                                                John Smith <span class="small">- 4 години тому</span>
                                                                </p>
                                                            </div>
                                                            <p class="small mb-0">
                                                                Прикріпляю мої припущенняя щодо кращої організації коду
                                                            </p>
                                                            <div class="d-flex flex-row align-items-center">
                                                                <a href="#!">
                                                                    <i class="fas fa-reply fa-xs"></i>
                                                                    <span class="small text-muted"> відповісти</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <div class="d-flex flex-row align-items-center">
                                                            <p class="small mb-0 mr-2 ml-auto">Підтримую</p> <br />
                                                            <p class="small mb-0 mr-1">5</p>
                                                            <img src={likeEmpty} alt="like-empty" className='emoji' />
                                                        </div>
                                                        <div class='d-flex'>
                                                            <div class="pr-2 align-self-center">
                                                                <div>
                                                                    Пропозиція:
                                                                </div>
                                                                <div>
                                                                    <u>Task_5_Main.java</u>
                                                                </div>
                                                            </div>
                                                            <div class="p-2 align-self-center">
                                                                6/10
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}