class CommentsService {
  getComments = () => {
    const commentsArray = JSON.parse(localStorage.getItem('comments'));
    return commentsArray;
  }

  setNewComments = (newCommentText) => {
    let commentsArray = JSON.parse(localStorage.getItem('comments'));

    if (commentsArray === null) {
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