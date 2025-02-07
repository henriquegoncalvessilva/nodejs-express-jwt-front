import React, { Suspense, useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
const Lista = React.lazy(() => import("./Lista"));

function ListarUsuarios() {
    const [allUsers, setallUsers] = useState([]);
    const [hiddenList, setHiddenList] = useState(true);
    const navigate = useNavigate();

    async function getList() {
        try {
            const {
                data: { users },
            } = await api.get("/listar", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            setallUsers(users);
        } catch (error) {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/");
            }
            navigate("/");
            console.log(error);
        }
    }

    useEffect(() => {
        getList();
    }, []);

    useEffect(() => {
        if (!allUsers) {
            setHiddenList(true);
        }
        else{
            setHiddenList(false)
        }
        
    }, [allUsers]);

    return (
        <>
            <Suspense
                fallback={
                    <div className="flex justify-center items-center h-screen text-4xl">
                        <h1>Loading...</h1>
                    </div>
                }
            >
                <Lista lista={allUsers} show={hiddenList}></Lista>
            </Suspense>
        </>
    );
}

export default ListarUsuarios;
