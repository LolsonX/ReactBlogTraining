import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate();

  function handleSubmit(e) {
    setIsPending(true);
    e.preventDefault();
    const blog = {title, body, author};

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('Blog added');
      setIsPending(false);
      navigate("/");
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Create Blog</button>}
        {isPending && <button disabled>Creating Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
