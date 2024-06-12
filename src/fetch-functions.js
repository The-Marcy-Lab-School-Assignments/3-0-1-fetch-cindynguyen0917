const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        console.log(response.url)
        console.log(response.status)
        console.log(response.ok)
        return { url: response.url, status: response.status, ok: response.ok }
    })
};

export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        console.log(response.body)
        return response.json().then((users) => {
            return users
            // const users = []
            // for (const person of responseData) {
            //     console.log(person)
            //     users.push({ id: person.id, usename: person.username })

            // }
            // console.log(users)
            // return users
        })
    })
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then((response) => {
        // console.log(response.ok)
        console.log(response.url)
        return response.json().then((posts) => {
            const limitedPosts = []
            for (let i = 0; i < maxNumPosts; i++) {
                limitedPosts.push(posts[i])
            }
            // console.log(posts)
            return limitedPosts
            // for (const person of posts) {
            //     if (person[id] === userId) {
            //         return person.posts
            //     }
            // }
        })
    })
}


const url = 'https://jsonplaceholder.typicode.com/users';

export const createNewUser = (newUserData) => {
    const postOptions = {
        method: "POST",                      // The type of HTTP request
        body: JSON.stringify(newUserData),       // The data to be sent to the API
        headers: {
            "Content-Type": "application/json" // The format of the body's data
        }
    }
    return fetch(url, postOptions).then((response) => {
        console.log(response)
        return response.json()
    }).then((userWhoPosted) => {
        console.log(userWhoPosted)
        // delete userWhoPosted.id
        // const newUser = {
        //     username: userWhoPosted.name,
        //     email: userWhoPosted.email,
        // }
        // console.log(newUser)
        // console.log(userWhoPosted)
        return userWhoPosted
    })
}
