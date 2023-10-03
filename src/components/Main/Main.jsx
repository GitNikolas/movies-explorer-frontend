import { Link, useLocation } from 'react-router-dom';
import promologo from '../../images/text__COLOR_landing-logo.svg'

function Main() {

  return (
    <main
    className="main"
    >
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__landing-logo" alt="Логотип страницы" src={promologo}/>
      </section>

      <section
      className="aboutProject"
      >
        <h2 className="aboutProject__title">О проекте</h2>
        <article className="aboutProject__table">
          <h3 className="aboutProject__table-title">Дипломный проект включал 5 этапов</h3>
          <h3 className="aboutProject__table-title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__table-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="aboutProject__table-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>

        <div className="aboutProject__illustrarion">
        <p className="aboutProject__illustrarion-title aboutProject__illustrarion-title_type_1week">1 неделя</p>
        <p className="aboutProject__illustrarion-title aboutProject__illustrarion-title_type_4week">4 недели</p>
        <p className="aboutProject__illustrarion-subtitle">Back-end</p>
        <p className="aboutProject__illustrarion-subtitle">Front-end</p>
        </div>
      </section>

      <section
      className="techs"
      >
        <h2 className="techs__title">Технологии</h2>
        <p className="techs__subtitle">7 технологий</p>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <ul className="techs__list list-style">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>


      </section>



    </main>

  );
}

export default Main;
