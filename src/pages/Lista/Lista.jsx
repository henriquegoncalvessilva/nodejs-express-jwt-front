import { PropTypes } from "prop-types";

function Lista({ lista, hiddenList }) {
    // Verifica se lista está vazia ou se não foi carregada ainda

    return (
        <div className="max-w-fit mx-auto mt-10 bg-white p-8 border-gray-300 rounded-md border shadow-lg truncate">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 uppercase">
                Users list
            </h2>

            {hiddenList && lista.length === 0 ? (
                <p className="text-center text-gray-500 uppercase">
                    The list is empty.
                </p>
            ) : (
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                ID
                            </th>
                            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                NAME
                            </th>
                            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                                EMAIL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((user) => (
                            <tr key={user.id}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 truncate">
                                    {user.id}
                                </td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 truncate">
                                    {user.name}
                                </td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 truncate w-8">
                                    {user.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

Lista.propTypes = {
    lista: PropTypes.array.isRequired, // Verifica se "lista" é realmente um array
    hiddenList:PropTypes.bool.isRequired
};

export default Lista;
