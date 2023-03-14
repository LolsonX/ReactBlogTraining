import {Link} from "react-router-dom"

type Blog = {
  title: string,
  id: number,
  body: string,
  author: string
}

type BlogProps = {
  blogs: Blog[]
  title: string
}

const BlogList = ({blogs, title}: BlogProps) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) =>
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title} </h2>
            <p> Written by {blog.author}</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default BlogList
