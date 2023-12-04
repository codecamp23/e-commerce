import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate("");

    const goToAdminPanel = (event) => {
        event.preventDefault();
        window.location.href = "/admin";
    }
    return (
        <div className='mt-5'>
            <form action="" onSubmit={goToAdminPanel} className='text-center'>
                <h1>Home</h1> <br /><button type={"submit"} className=' btn btn-primary'>Admin</button>
                <br /><Link to="/login" className="btn btn-info mt-3">Login</Link>
            </form>
        </div>
    );
}

export default Home;
