class CommentsService {
  getComments = () => {
    const commentsArray = JSON.parse(localStorage.getItem('comments'));
    if (commentsArray == null) {
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
        localStorage.setItem('comments', JSON.stringify(staticComments));
    }

    return commentsArray;
  }

  setNewComments = (newCommentText) => {
    let commentsArray = JSON.parse(localStorage.getItem('comments'));

    if (commentsArray == null) {
      commentsArray = []
    }

    const date = new Date();
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const newComment = {
      id: commentsArray.length + 1,
      userName: 'Вероника Ростова',
      date: date.toLocaleString('ru', options),
      text: newCommentText
    }

    commentsArray.push(newComment);

    localStorage.setItem('comments', JSON.stringify(commentsArray));
  }
}

export default new CommentsService();