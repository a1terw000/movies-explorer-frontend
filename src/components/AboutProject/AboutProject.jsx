import './AboutProject.css'

export default function AboutProject() {
    return (
        <div className='page__unique'>
            <section className='aboutProject'>
                <h2 className='aboutProject__title'>О проекте</h2>
                <ul className='aboutProject__list' >
                    <li className='aboutProject__item aboutProject__item_type_title'>Дипломный проект включал 5 этапов</li>
                    <li className='aboutProject__item'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
                    <li className='aboutProject__item aboutProject__item_type_title2'>На выполнение диплома&nbsp;ушло&nbsp;5 недель</li>
                    <li className='aboutProject__item aboutProject__item2'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
                </ul>
                <div className='aboutProject__time'>
                    <p className='aboutProject__duration aboutProject__duration_type_back-end'>1 неделя</p>
                    <p className='aboutProject__duration'>4 недели</p>
                    <span className='aboutProject__text'>Back-end</span>
                    <span className='aboutProject__text'>Front-end</span>
                </div>
            </section>
        </div>
    )
}