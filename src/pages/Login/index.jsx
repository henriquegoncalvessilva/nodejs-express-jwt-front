import { useRef } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const { data: token } = await api.post("/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            localStorage.setItem("token", token);
            navigate("/listar-usuarios");
            console.log(
                `Usuário: ${emailRef.current.value}, foi logado com sucesso.`
            );
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        ref={emailRef}
                        placeholder="Email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />

                    <input
                        ref={passwordRef}
                        placeholder="Password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline">
                        Log In
                    </button>
                </form>
                <Link
                    to="/cadastro"
                    className="text-blue-700 hover:underline text-center block mt-4"
                >
                    Don&apos;t have an account? Click here to sign up!
                </Link>
            </div>
        </>
    );
}

export default Login;
