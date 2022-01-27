import React from 'react';
import Row from '../row';
import ItemList from '../item-list';
import Description from '../description';
import './pages.css';

export const PlanetsPage = ({id}) => {
  return <Row 
  left={ <ItemList serviceMethod={'getAllPlanets'} onChangeMethod={'getPlanet'} /> } 
  right={ <Description serviceMethod={'getPlanet'} id={id}/> }
  />;
};

export const PeoplePage = () => {
  return <Row 
  left={ <ItemList serviceMethod={'getAllPeople'} onChangeMethod={'getPerson'}/> } 
  right={ <Description serviceMethod={'getPerson'} /> }
  />;
};

export const StarshipsPage = () => {
  return <Row 
  left={ <ItemList serviceMethod={'getAllStarships'} onChangeMethod={'getStarship'}/> } 
  right={ <Description serviceMethod={'getStarship'} /> }
  />;
};

export const Intro = () => {
  return (
    <div className='intro'>
      <p>
        My Swapi - это самостоятельная работа для закрепления навыков работы с библиотеками React, Redux и Router. Приложение использует базу данных <a href='https://swapi.dev/'>swapi</a>. 
      </p>

      <p>
        Несмотря на внешнюю схожесть с приложением из <a href='https://www.udemy.com/course/pro-react-redux/'>курса</a> Юрия Буры "React + Redux", настоящее приложение и все его компоненты написаны с нуля. Единственный документ, который я заимствовал из курса - сервис, который делает Fetch-запросы (потому что он хорош).
      </p>

      <p>
        Старался использовать некоторые паттерны React (например, компоненты высшего порядка), а также разделять логику отрисовки и обработки данных: компоненты List и Description универсальны.
      </p>

      <p>
      Наиболее сложным было понять, как организовывать приложение и подружить между собой React и Redux.
      <br/>Так, одна из проблем, с которыми я столкнулся на старте - когда и где делать сетевые запросы, а второй затуп произошёл с использованием функционала mapDispatchToProps. Но в итоге всё получилось.
      </p>

      <p>
        У приложения есть несколько известных проблем, которые я пока не исправил. Тем не менее, главная задача - понять, как работают React и Redux вместе, выполнена. Ну, я надеюсь)
      </p>

      <p>
        Git приложения <a href='https://github.com/Join-Red-Army/my-swapi'>здесь</a>.
      </p>

      <p>
        <span className='highlight'>Мои другие приложения</span>, которые "не из курсов":
        <ul>
          <li>
            "Русское поле эксперимемов" - <a href='https://russianmemefield.ru/'>здесь</a> (html, css, JS).
          </li>
          <li>
            "Саймон" - <a href='https://play-with-simon.ru/'>здесь</a> (React).
          </li>
        </ul>
      </p>

    </div>
  )
}