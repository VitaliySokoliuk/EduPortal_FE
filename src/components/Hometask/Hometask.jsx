import './Hometask.scss';

export const Hometask = (props) => {
    return (
        <>
            <div className="ml-5 mr-5">
                <div className="card mt-4">
                    <div className="card__container">
                        <div className="card__content">
                            <div className="card__top">
                                <h2 className="card__title">Додаткове завдання {props.taskNum}</h2>
                                <p className="card__date">{props.cDate}</p>
                            </div>
                            <p className="card__description">{props.task_content}</p>
                            <div className="card__tags tags">
                                <div className="tags__tag"><a class="link" href='#'>Додати відповідь</a></div>
                                <div className="tags__tag"><a class="link" href='#'>Відповіді студентів</a></div>
                                <div className="tags__tag"><a class="link" href='#'>Редагувати завданя</a></div>
                                <div className="tags__tag"><a class="link" href='#'>Статистика</a></div>
                            </div>
                        </div>
                        <div>
                            <div className="tags__tag">Максимальна оцінка - {props.max_mark}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}