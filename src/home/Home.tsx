import useFetch from '../useFetch'
import BlogList from './BlogList'
import Blog from '../../data/models/Blog'
import './Home.css'

function Home() {
  const {data, isPending, error} = useFetch<Blog[]>('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {(!isPending && !error) && <BlogList blogs={data} title="All blogs" />}
    </div>
  );
}

export default Home;
