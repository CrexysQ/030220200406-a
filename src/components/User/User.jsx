import React, { useState, useEffect } from 'react';
import './User.scss';

import userImage from '../../assets/images/user-image.png';
import ServicesChart from '../ServicesChart/ServicesChart';
import Comment from '../Comment/Comment'
import CommentsService from '../../shared/comments.service';

const User = () => {
  const userName = 'Вероника Ростова';
  const position = 'Менеджер по продажам';
  const description = 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны';

  const [commentsArray, setComments] = useState();
  useEffect(() => {
    const commentsArray = CommentsService.getComments();
    setComments(commentsArray);
  }, [])

  const renderComments = () => {
    return commentsArray.map((item, index) => {
      return (
        <Comment name={item.userName} date={item.date} text={item.text} key={index} />
      )
    })
  }

  const renderStaticComments = () => {
    const staticComments = [
      {
        id: 1,
        userName: 'Самуил',
        date: '13 октября 2011',
        text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! '
      },
      {
        id: 2,
        userName: 'Лилия Семёновна',
        date: '14 октября 2011',
        text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
      },
      {
        id: 3,
        userName: 'Лилия Семёновна',
        date: '14 октября 2011',
        text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
      }]

    if (typeof commentsArray === undefined || commentsArray === null) {     
      localStorage.setItem('comments', JSON.stringify(staticComments))
    }
    setComments(staticComments);

    return staticComments.map((item, index) => {
      return (
        <Comment name={item.userName} date={item.date} text={item.text} key={index} />
      )
    })
  }

  const keyUpHandle = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      createNewPost();
    }
  }

  const createNewPost = () => {
    const textArea = document.querySelector('#textArea');
    if (textArea.value.trim() === '') {
      alert('Напишите что-то перед отправкой');
    } else {
      CommentsService.setNewComments(textArea.value);
      setComments(CommentsService.getComments());
      textArea.value = '';
    }
  }

  return (
    <>
      <div className='custom-container'>
        <section>
          <div className='userInfo'>
            <div className="left-side">
              <div className="user-image">
                <img src={userImage} alt={'UserImage'} />
              </div>
            </div>

            <div className='right-side'>
              <h4 className="user-name"> {userName} </h4>
              <span className='user-position'> {position} </span>

              <div className="user-profile-description">
                <p> {description} </p>
              </div>

              <div className='services'>
                <h5 className="title"> Услуги </h5>

                <div className="chart-list">
                  <ServicesChart name="Ручное бронирование" num="11" width="80" />
                  <ServicesChart name="Пакетные туры" num="3" width="15" />
                  <ServicesChart name="Отели" num="1" width="10" />
                </div>

                <div className="total">
                  <span> Всего </span>
                  <span> 15 </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='comments'>
          <div className="comments-header">
            <div className='header-text'>
              <span className='section-title'>Последние отзывы</span>
              <a href="##" className='all-comments-link'>Все отзывы</a>
            </div>

            <div className="header-actions">
              <span className='likes-count'> 131 </span>

              <span className='comments-count'> 14 </span>
            </div>
          </div>
          <div className="comments-list">
            {
              commentsArray ?
                renderComments()
                : renderStaticComments()
            }
          </div>
        </section>
      </div>

      <section className='textarea'>
        <textarea className='comment-input' name='textarea' id="textArea" onKeyUp={keyUpHandle}></textarea>
        <button className="send-button" onClick={createNewPost}>Написать консультатну</button>
      </section>
    </>
  )
}

export default User;