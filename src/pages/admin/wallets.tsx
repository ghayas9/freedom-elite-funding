import { useEffect, useState } from 'react';
import axios from 'axios';

interface Wallet {
    id: string;
    desc: string;
    image: string;
    name: string;
    wallet: string;
    icon: string;
    method: string;
}

const AdminWallets = () => {
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
    const [newWalletAddress, setNewWalletAddress] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const response = await axios.get('/api/wallets');
                setWallets(response.data);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching wallets');
            } finally {
                setLoading(false);
            }
        };

        fetchWallets();
    }, []);

    const handleSelectWallet = (wallet: Wallet) => {
        setSelectedWallet(wallet);
        setNewWalletAddress(wallet.wallet);
    };

    const handleUpdateWallet = async () => {
        if (selectedWallet) {
            try {
                await axios.post('/api/wallets', {
                    password,
                    id: selectedWallet.id,
                    wallet: newWalletAddress,
                });
                setWallets(wallets.map(w => (w.id === selectedWallet.id ? { ...w, wallet: newWalletAddress } : w)));
                setSelectedWallet(null);
                setNewWalletAddress('');
                setError(null);
            } catch (err: any) {
                setError(err.response?.data?.error || 'An error occurred while updating the wallet');
            }
        }
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAuthenticated(true);
        setError(null);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:mx-auto lg:w-11/12 xl:w-10/12 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-2xl font-bold mb-6 text-center">Manage Wallets</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Wallet Name</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[250px]">Wallet Address</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wallets.map(wallet => (
                                    <tr key={wallet.id} className="animate-fade-in">
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{wallet.name}</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{wallet.wallet}</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">
                                            <button
                                                onClick={() => handleSelectWallet(wallet)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {selectedWallet && (
                        <div className="mt-6">
                            <h2 className="text-xl font-bold mb-4">Edit Wallet</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newWalletAddress">
                                    New Wallet Address
                                </label>
                                <input
                                    id="newWalletAddress"
                                    type="text"
                                    value={newWalletAddress}
                                    onChange={e => setNewWalletAddress(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                onClick={handleUpdateWallet}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Update Wallet
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminWallets;
