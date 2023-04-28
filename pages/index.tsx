import {Inter} from 'next/font/google'
import Layout from "../components/Layout";
import BlogItem from "../components/BlogItem";

const inter = Inter({subsets: ['latin']})

export default function Home({posts}) {
    return (
        <Layout title='Main Page'>
            <h1>Interesting blog</h1>

            <div className="posts">
                {posts.map(post => (
                    <BlogItem
                        title={post.title}
                        description={post.body}
                        id={post.id}/>
                ))}
            </div>
        </Layout>
    )
}

export const getServerSideProps = async () => {

    const data = await fetch(`${process.env.API_URL}/posts`)
    const posts = await data.json()

    return {
        props: {posts},
    }
}
