import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {

  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv);
  checkResponseStatus().then((statusInfo) => renderStatus(statusDiv, statusInfo))
    .then(() => getUsers().then((users) => renderUsers(usersUl, users)))
    .then(() => usersUl.addEventListener('click', async (event) => {
      const userId = event.target.dataset.userId
      getUserPosts(userId).then((posts) => renderPosts(postsUl, posts))
    }))

  // getUsers().then((users) => renderUsers(usersUl, users));

  // usersUl.addEventListener('click', async (event) => {
  //   const userId = event.target.dataset.userId
  //   getUserPosts(userId).then((posts) => renderPosts(postsUl, posts))
  // })

  newUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(newUserForm);
    const newUserData = {
      username: formData.get('username'),
      email: formData.get('email')
    }
    createNewUser(newUserData).then((newUser) => renderNewUser(newUserDiv, newUser))
    newUserForm.reset()

  })
}