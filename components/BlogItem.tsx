import Link from "next/link";


const BlogItem = ({title, description, id}) => {
    return (
        <div className='blog-item'>
            <h5>{title}</h5>
            <p>
                {description}
            </p>
            <div className='blog-item__link-wrapper'>
                <Link href='/blog/[id]' as={`/blog/${id}`} className='blog-item__link'>
                    Read
                </Link>
            </div>
        </div>
    )
}

export default BlogItem;