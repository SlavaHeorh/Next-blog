import Layout from "../../components/Layout";
import {IPost} from "../../types";

interface IProps {
    post: IPost
}

const SinglePost = ({post}: IProps) => {
    if (!post)
        return <p>"Post Doesn't exist"</p>

    return (
        <Layout title={post.title} description={post.body}>
            <h1 className="post-header">{post.title}</h1>
            <p className="post-text">
                {post.body}
            </p>
        </Layout>
    )
}

export const getServerSideProps = async ({query}) => {

    const data = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post: IPost = await data.json()

    return {
        props: {post},
    }
}

export default SinglePost;