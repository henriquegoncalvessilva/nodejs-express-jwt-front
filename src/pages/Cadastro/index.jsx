import { useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Cadastro() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(nameRef);

        try {
            await api.post("/cadastro", {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            alert("Account created successfully");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Registration
                </h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        ref={nameRef}
                        placeholder="Name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
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
                        Sign Up
                    </button>
                </form>
                <Link
                    to="/"
                    className="text-blue-700 hover:underline text-center block mt-4"
                >
                    Already have an account? Click here to log in!
                </Link>
            </div>
        </>
    );
}

export default Cadastro;
