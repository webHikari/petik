import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
