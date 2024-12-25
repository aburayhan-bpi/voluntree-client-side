export const fetchPostsData = async () => {
    const response = await fetch('https://voluntree-server-side.vercel.app/posts')
    if (!response.ok) {
        throw new Error('Failed to fetch posts data')
    }
    return response.json()
}