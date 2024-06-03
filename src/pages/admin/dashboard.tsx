import Orders from '@/components/Orders';
import Wallets from '@/components/Wallets';
import { useState } from 'react';


const AdminDashboard = () => {
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [section, setSection] = useState<'orders' | 'wallets'>('orders');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password === 'ghayas') {
            setIsAuthenticated(true);
            setError(null);
        } else {
            setError('Invalid password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-sm animate-fade-in">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:mx-auto lg:w-11/12 xl:w-10/12 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => setSection('orders')}
                            className={`px-4 py-2 mr-2 font-bold rounded ${section === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            Orders
                        </button>
                        <button
                            onClick={() => setSection('wallets')}
                            className={`px-4 py-2 ml-2 font-bold rounded ${section === 'wallets' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            Wallets
                        </button>
                    </div>
                    {section === 'orders' && <Orders password={password} />}
                    {section === 'wallets' && <Wallets password={password} />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
