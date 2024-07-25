import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiLock } from 'react-icons/fi';

interface Order {
    id: string;
    price: number;
    walletId: string;
    wallet: any;
    email: string;
    [key: string]: any;
}

const AdminOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const fetchOrders = async (password: string) => {
        try {
            setLoading(true);
            const response = await axios.post('/api/admin/orders', { password });
            setOrders(response.data);
            setIsAuthenticated(true);
        } catch (err: any) {
            setError(err.response?.data?.error || 'An error occurred while fetching orders');
        } finally {
            setLoading(false);
        }
    };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     fetchOrders(password);
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/login', { password });
            if (response.status === 200) {
                setIsAuthenticated(true);
                fetchOrders(password);
                setError(null);
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Invalid password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-sm animate-fade-in">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 relative">
                            <FiLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3  sm:mx-auto lg:w-11/12 xl:w-10/12 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-2xl font-bold mb-6 text-center">All Orders</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Order ID</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[100px]">Price</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Wallet ID</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[200px]">Email</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Payment Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="animate-fade-in">
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{order.id}</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">${order.price}</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{order.walletId}</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{order.email}</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{order.wallet.method}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;
