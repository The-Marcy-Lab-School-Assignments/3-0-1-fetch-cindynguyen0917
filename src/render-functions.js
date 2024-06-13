export const setupPageBasics = (parentEl) => {
  parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

  const statusDiv = parentEl.querySelector('#status');
  const usersUl = parentEl.querySelector('#users-list');
  const postsUl = parentEl.querySelector('#posts-list');
  const newUserForm = parentEl.querySelector('#new-user-form');
  const newUserDiv = parentEl.querySelector('#new-user');

  return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  const h2 = document.createElement('h2')
  const p = document.createElement('p')

  h2.id = "status-heading"
  p.id = "status-code"

  h2.textContent = `Info on - ${statusInfoObj.url}`
  if (statusInfoObj.ok) {
    p.textContent = `Status code: ${statusInfoObj.status}, OK!`
  } else {
    p.textContent = `Status code: ${statusInfoObj.status}, FAIL!`
  }
  statusDiv.append(h2, p)
}

export const renderUsers = (usersUI, users) => {
  usersUI.textContent = ''
  users.forEach((user) => {
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.classList.add('user-card')
    button.setAttribute('data-user-id', user.id)
    button.textContent = `Load ${user.username}'s posts`
    li.append(button)
    usersUI.append(li)

  })
};

export const renderPosts = (postsUI, posts) => {
  postsUI.textContent = ''
  posts.forEach((post) => {
    const li = document.createElement('li')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    h2.textContent = post.title
    p.textContent = post.body
    li.append(h2, p)
    postsUI.append(li)

  })
}

export const renderNewUser = (newUserDiv, newUserInfo) => {
  newUserDiv.textContent = ''
  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  h2.textContent = newUserInfo.username
  p.textContent = newUserInfo.email
  newUserDiv.append(h2, p)
}