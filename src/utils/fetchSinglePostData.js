export const fetchSinglePostData = async ({ params }) => {
    const response = await fetch(`https://voluntree-server-side.vercel.app/post-details/${params.id}`, {
        method: 'GET',
        credentials: 'include',
    })
    if (!response.ok) {
        throw new Error('Failed to fetch posts data: data pacche na...')
    }
    return response.json()
}


