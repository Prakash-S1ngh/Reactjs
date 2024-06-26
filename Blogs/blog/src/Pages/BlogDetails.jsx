import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function BlogDetails(){
    const { posts } = useContext(AppContext);
    let location = useLocation();
    let tagname = location.pathname.split('/').at(-1).replaceAll("-", " ");
    const navigation = useNavigate()




    return(<div className="TagBlog">
    <div className="header">
      <button onClick={()=>{
          navigation(-1)
      }}>Back</button>
      <span>{`Blogs on ${tagname}`}</span>
    </div>
    <div>
      {posts.map(({ id, title, author, date, category, tags, content }) => (
        <div className="card" key={id}>
          <div className="b-head">
            {title}
          </div>
          <div className="b-sub">{`by ${author}`}</div>
          <NavLink to={`/category/${category.replaceAll("-", " ")}`}>
          <span className="b-sub">{`${category}`}</span>
          </NavLink>

          <div className="date">{`Posted on ${date}`}</div>
          <div className="content">{content}</div>
          <div className="special-text">
            {tags.map((ele) => (
              <NavLink key={ele} to={`/tags/${ele.replaceAll("-", " ")}`}>
                <span>{`#${ele}`}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer/>
  </div>)
}

export default BlogDetails;