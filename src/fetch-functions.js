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
    return fetch('https://jsonplaceholder.typicode.com/users/{userId}/posts').then((response) => {
        // console.log(response.ok)
        console.log(response.url)
        return response.json().then((posts) => {
            // console.log(posts)
            const userPosts = posts.filter((post) => post.userId === userId)
            return userPosts
            // for (const person of posts) {
            //     if (person[id] === userId) {
            //         return person.posts
            //     }
            // }
        })
    })
}

export const createNewUser = () => {
}
