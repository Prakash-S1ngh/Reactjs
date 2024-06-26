import { useContext } from "react";
import { AppContext } from "./AppContext";
import Spin from "./Spin";
import {NavLink} from 'react-router-dom'
function Blog() {
    const { posts, loading } = useContext(AppContext);

    return (
        <div>
            {loading ? (
                <Spin />
            ) : 
            
            (
                posts.map(({ id, title, author, date, category, tags, content }) => (
                    <div className="card" key={id}>
                        <div className="b-head">
                            {title}
                        </div>
                        <div className="b-sub">{`by ${author} on ${category}`}</div>
                        <div className="date">{`Posted on ${date}`}</div>
                        <div className="content">{content}</div>
                        <div className="special-text">
                        {tags.map((ele) => (
                                 <NavLink key={ele} to={`/tags/${ele.replaceAll(" ","-")}`}>
                                <span key={ele}>{`#${ele}`}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Blog;
