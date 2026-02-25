import "./App.css";
import {
    HashRouter,
    NavLink,
    Routes,
    Route,
    useNavigate,
    useLocation,
    useParams,
    Outlet,
} from "react-router-dom";
// import Login from "./pages";
// import Register from "./pages";
// import Todo from "./pages";

const LogOutBtn = () => {
    const navigator = useNavigate();
    return (
        <button
            type="button"
            onClick={() => {
                navigator("/login", {
                    replace: true,
                    state: {
                        message: "你被登出囉~",
                    },
                });
            }}
        >
            logout
        </button>
    );
};

const Todo = () => {
    return (
        <>
            <p>這是 Todo 頁面</p>
            <LogOutBtn />
        </>
    );
};
const Login = () => {
    const { state } = useLocation();
    return (
        <>
            <p>這是登入頁面</p>
            {state ? <p>{state.message}</p> : ""}
        </>
    );
};
const Register = () => {
    return <p>這是註冊頁面</p>;
};

const PostDetail = () => {
    const params = useParams();
    console.log("params", params);
    // return <p>這是 Post Detail: Id是</p>;
    return <p>這是 Post Detail: Id是 {params.id}</p>;
};

const Posts = () => {
    return (
        <>
            <p>這是 Posts 頁面</p>
            <Outlet />
        </>
    );
};

function App() {
    return (
        <div className="container">
            <HashRouter>
                <div className="nav-link">
                    <NavLink to="/">
                        <p>回到首頁</p>
                    </NavLink>
                    <NavLink to="/register">
                        <p>註冊頁面</p>
                    </NavLink>
                    <NavLink to="/login">
                        <p>登入頁面</p>
                    </NavLink>
                    <NavLink to="/todo">
                        <p>Todo 頁面</p>
                    </NavLink>
                    <NavLink to="/posts">
                        <p>Posts 頁面</p>
                    </NavLink>
                    <NavLink to="/posts/123">
                        <p>Posts 詳細頁面123</p>
                    </NavLink>
                    <NavLink to="/posts/456">
                        <p>Posts 詳細頁面456</p>
                    </NavLink>
                </div>
                {/* Routes, Route 練習區 */}
                <Routes>
                    <Route path="/" element={<h1>首頁</h1>}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="todo" element={<Todo />}></Route>
                    <Route path="posts" element={<Posts />}>
                        <Route index element={<p>Posts 首頁</p>}></Route>
                        <Route path=":id" element={<PostDetail />}></Route>
                    </Route>
                    <Route path="*" element={<h1>404</h1>}></Route>
                </Routes>
                {/* 練習區 */}
            </HashRouter>
        </div>
    );
}

export default App;
