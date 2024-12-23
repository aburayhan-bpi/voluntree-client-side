export const fetchSinglePostData = async ({ params }) => {
    const response = await fetch(`http://localhost:5000/post-details/${params.id}`)
    if (!response.ok) {
        throw new Error('Failed to fetch posts data: data pacche na...')
    }
    return response.json()
}