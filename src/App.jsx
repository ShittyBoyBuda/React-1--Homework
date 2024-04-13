import './App.css'
import Image from './components/Image'
import Text from './components/Text'
import ImagePhoto from './components/1.jpg'
import HtmlImg from './components/html.png'
import CssImg from './components/css.png'
import JsImg from './components/js.png'
import NodejsImg from './components/nodejs.png'
import TypeSImg from './components/typescript.png'
import PoSQLImg from './components/posql.png'
import ReactImg from './components/react.png'
import VueImg from './components/vue.png'
import AngularImg from './components/angular.png'
import MongodbImg from './components/mongodb.png'
import RedisImg from './components/redis.png'
import DockerImg from './components/docker.png'
import UnitTestImg from './components/unittest.png'
import PhpImage from './components/php.png'

function App() {
  return (
    <>
      <div className='main_card'>
        <Image
          className='main_img'
          src={ImagePhoto}
          alt='Main Image'/>
          <Text
            className='main_text'
            text={`Меня зовут\nГрибанов Никита Евгеньевич.\n\nЗанимаюсь веб-программированием\n\nНиже написаны мои компетенции`}/>
      </div>
      <p className='skills_text'>Знаю:</p>
      <div className='skills_row'>
        <div className='skill_card'>
          <Image
            className='main_img'
            src={HtmlImg}
            alt = 'Html Image'/>
          <Text
            className='main_text'
            text='Знаю Html'/>
        </div>
        <div className='skill_card'>
          <Image
            className='main_img'
            src={CssImg}
            alt = 'Css Image'/>
          <Text
            className='main_text'
            text='Знаю Css'/>
        </div>
        <div className='skill_card'>
          <Image
            className='main_img'
            src={JsImg}
            alt = 'Js Image'/>
          <Text
            className='main_text'
            text='Знаю JavaScript'/>
        </div>
        <div className='skill_card'>
          <Image
            className='main_img'
            src={PhpImage}
            alt = 'Js Image'/>
          <Text
            className='main_text'
            text='Знаю PHP(чуть-чуть)'/>
        </div>
      </div>
      <p className='skills_text'>Хочу знать:</p>
      <div className='skills_row'>
        <div className='need_card'>
          <Image
            className='main_img'
            src={NodejsImg}
            alt='NodeJs Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить NodeJs'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={TypeSImg}
            alt='TypeScript Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить TypeScript'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={PoSQLImg}
            alt='PostgreSQL Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить PostgreSQL'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={ReactImg}
            alt='React Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить React'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={VueImg}
            alt='Vue.js Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить Vue.js'/>
        </div>
      </div>
      <div className='skills_row'>
        <div className='need_card'>
          <Image
            className='main_img'
            src={AngularImg}
            alt='Angular Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить Angular'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={MongodbImg}
            alt='MongoDB Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить MongoDB'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={RedisImg}
            alt='Redis Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить Redis'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={DockerImg}
            alt='Docker Image'/>
          <Text
            className='main_text'
            text='Хотел бы выучить Docker'/>
        </div>
        <div className='need_card'>
          <Image
            className='main_img'
            src={UnitTestImg}
            alt='Unit Test Image'/>
          <Text
            className='main_text'
            text='Хотел бы научиться писать unit тесты'/>
        </div>
      </div>
    </>
  )
}

export default App
