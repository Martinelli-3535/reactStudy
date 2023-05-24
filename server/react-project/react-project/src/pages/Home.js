import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>인천대학교</h1>
            <button>
                <Link to="/">로그아웃</Link>
            </button>
            <ul>
                <li>
                    <Link to="/subjects/webProgramming">웹프로그래밍</Link>
                </li>
                <li>
                    <Link to="/subjects/database">데이터베이스</Link>
                </li>
                <li>
                    <Link to="/subjects/operatingSystem">운영체제</Link>
                </li>
            </ul>
        </div>
    )
};

export default Home;