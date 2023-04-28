import {Inter} from 'next/font/google'
import Layout from "../components/Layout";
import BlogItem from "../components/BlogItem";
import {IPost} from "../types";

const inter = Inter({subsets: ['latin']})



interface IProps {
 posts: IPost[]
}

export default function Home({posts}: IProps) {
    return (
        <Layout title='Main Page'>
            <h1>Interesting blog</h1>

            <div className="posts">
                {posts.map(post => (
                    <BlogItem
                        key={post.id}
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
    const posts: IPost[] = await data.json()

    return {
        props: {posts},
    }
}
