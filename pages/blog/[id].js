// import { useRouter } from 'next/router'
import posts from '../../posts.json'

/* export default () => {
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
} */
const Post = props => {
// 2 // console.log('main content');
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  )
}

Post.getInitialProps = ({ query, req, res, err,pathname,asPath }) => {
// 1 // console.log('intitailprops' +query +'--req--'+ req + '--res--'+ res + '--err--' + err +'---------'+ pathname +'---------'+ asPath);
  return {
    post: posts[query.id]
  }
}

export default Post
