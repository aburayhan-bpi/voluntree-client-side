export const singlePostToUpdate = async ({ params }) => {
    const response = await fetch(`http://localhost:5000/post/${params.id}`)
    if (!response.ok) {
        throw new Error('Failed to fetch posts data: data pacche na...')
    }
    return response.json();
}