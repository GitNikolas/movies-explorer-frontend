import { Link, useLocation } from 'react-router-dom';
import lanlogo from '../../images/text__COLOR_landing-logo.svg'

function Main() {

  return (
    <main
    className="main"
    >
      <section className="hero">
        <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="hero__landing-logo" alt="Логотип страницы" src={lanlogo}/>
      </section>

      <section
      className="about"
      >
        <h2 className="about__title">О проекте</h2>
        <article className="about__table">
          <h3 className="about__table-title">Дипломный проект включал 5 этапов</h3>
          <h3 className="about__table-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__table-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="about__table-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>

        <div className="about__illustrarion">
        <p className="about__illustrarion-title about__illustrarion-title_type_1week">1 неделя</p>
        <p className="about__illustrarion-title about__illustrarion-title_type_4week">4 недели</p>
        <p className="about__illustrarion-subtitle">Back-end</p>
        <p className="about__illustrarion-subtitle">Front-end</p>
        </div>
      </section>

      <section
      className="tech"
      >
        <h2 className="tech__title">Технологии</h2>
        <p className="tech__subtitle">7 технологий</p>
        <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <ul className="tech__list list-style">
          <li className="tech__list-item">HTML</li>
          <li className="tech__list-item">CSS</li>
          <li className="tech__list-item">JS</li>
          <li className="tech__list-item">React</li>
          <li className="tech__list-item">Git</li>
          <li className="tech__list-item">Express.js</li>
          <li className="tech__list-item">mongoDB</li>
        </ul>


      </section>



    </main>

  );
}

export default Main;
