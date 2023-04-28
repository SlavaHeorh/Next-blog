import Layout from "../../components/Layout";

const SinglePost = ({post}) => {
    if (!post)
        return <p>"Post Doesn't exist"</p>

    return (
        <Layout title={post.title} description={post.body}>
            <h1>{post.title}</h1>
            <p>
                {post.body}
            </p>
        </Layout>
    )
}

export const getServerSideProps = async ({query}) => {

    const data = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post = await data.json()

    return {
        props: {post},
    }
}

export default SinglePost;