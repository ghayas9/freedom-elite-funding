import { useEffect, useState } from 'react';
import axios from 'axios';

interface Order {
    id: string;
    price: number;
    walletId: string;
    wallet: any;
    email: string;
    [key: string]: any;
}

const Orders = ({ password }: { password: string }) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.post('/api/admin/orders', { password });
                setOrders(response.data.slice(0, 5));
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [password]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Please login again</div>;
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Latest Orders</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b whitespace-nowrap">Order ID</th>
                            <th className="py-2 px-4 border-b whitespace-nowrap">Price</th>
                            <th className="py-2 px-4 border-b whitespace-nowrap">Wallet ID</th>
                            <th className="py-2 px-4 border-b whitespace-nowrap">Email</th>
                            <th className="py-2 px-4 border-b whitespace-nowrap">Payment Method</th>
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
            <button
                onClick={() => setOrders([...orders])} // Load more logic here
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Show More
            </button>
        </div>
    );
};

export default Orders;
