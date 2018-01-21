module.exports = () => {
    const data = { posts: [] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
        data.posts.push({
            id: i,
            title: `title${i}`,
            views: i * 10,
            author: `author${i}`
        })
    }
    return data
};