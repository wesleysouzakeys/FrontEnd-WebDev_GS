import { } from 'react';
import { useRef } from 'react';
import './Login.scss'

function Login() {
    /*hook useref ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente e também permite acesso ao DOM */
    const user = useRef();
    const password = useRef();

    /*função que verifica se o usuario e senha são validos e grava na sessão */
    // const handleSubmit = () => {
    //     if (user.current.value === 'admin' && password.current.value === '12345') {
    //         let token =
    //             Math.random().toString(16).substring(2) +
    //             Math.random().toString(16).substring(2);
    //         sessionStorage.setItem('userData', 'admin');
    //         sessionStorage.setItem('senhaData', token);
    //     } else {
    //         alert('usuário e senha inválidos !!!');
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = user.current.value;
        const pwd = password.current.value;

        try {
            const response = await fetch(`http://localhost:5000/usuarios/`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                const userFound = data.find(u => u.email == email && u.senha == pwd);

                if (userFound) {
                    sessionStorage.setItem('email', userFound.email)
                    sessionStorage.setItem('nome', userFound.nome)
                    window.location = '/home';
                } else {
                    alert('Email ou senha incorretos')
                }
            } else {
                console.log('Error:', response.statusText);
            }
            
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">Bem vindo de volta!</h2>
                        <p className="description description-primary">Estamos muito felizes em te-lo de volta</p>
                        <p className="description description-primary">Aproveite todos os conteúdos oferecidos por nós.</p>
                    </div>
                    <div className="second-column">
                        <h2 className="title title-second">Login</h2>
                        <p className="description description-second">Use sua credencial para se logar:</p>
                        <form onSubmit={handleSubmit} className="form">
                            <label className="label-input">
                                <i className="far fa-user icon-modify"></i>
                                <input type="text" placeholder='Email' ref={user} />
                            </label>

                            <label className="label-input">
                                <i className="fas fa-lock icon-modify"></i>
                                <input type="password" placeholder='Senha' ref={password} />
                            </label>

                            <button className="btn btn-second">Logar</button>
                        </form>
                    </div>
                </div>
                <div className="content second-content">
                </div>
            </div>
        </>
    )
}

export default Login
