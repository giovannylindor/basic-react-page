import './Card.css'

export default function Card() {
    return(
        <>
            <div className="parent-card">
                <h2>Login/Sign-Up</h2>
                <div className='login-info'>
                    <input type="text" placeholder='username'/>
                    <input type="password" placeholder='password'/>
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}