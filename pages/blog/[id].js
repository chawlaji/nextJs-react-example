import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]
  if (!post) return (<>
    <h1>Blog post</h1>
    <p>Post id: {router.query.id}</p>
  </>)
  
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}