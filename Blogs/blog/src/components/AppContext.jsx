import { useState, createContext } from "react";
import Url from "./Url";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [pages, setPages] = useState();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPage, setTotal] = useState(null);

    async function fetching(page = 1, tag = null, category = null) {
        setLoading(true);
        let url = `${Url}?page=${page}`;
        if (tag) {
            url += `&tag=${tag}`;
        } else if (category) {
            url += `&category=${category}`;
        }
        try {
            const data = await fetch(url);
            const obj = await data.json();
            setPages(obj.page);
            setPosts(obj.posts);
            setTotal(obj.totalPages);
            setLoading(false);
        } catch {
            alert('An error occurred');
            setPages(1);
            setLoading(false);
        }
    }

    function clickHandler(page, location) {
        if (location.pathname.includes('tags')) {
            const tags = location.pathname.split('/').at(-1).replaceAll("-", " ");
            fetching(Number(page), tags);
        } else if (location.pathname.includes('category')) {
            const category = location.pathname.split('/').at(-1).replaceAll("-", " ");
            fetching(Number(page), null, category);
        } else {
            fetching(Number(page));
        }
    }

    const value = {
        pages, setPages,
        posts, setPosts,
        loading, setLoading,
        totalPage, setTotal,
        fetching, clickHandler
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
