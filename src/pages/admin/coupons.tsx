import { useEffect, useState } from 'react';
import axios from 'axios';

interface Coupon {
    id: string;
    code: string;
    discount: number;
}

const AdminCoupons = () => {
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
    const [couponCode, setCouponCode] = useState<string>('');
    const [couponDiscount, setCouponDiscount] = useState<number>(0);
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await axios.get('/api/coupons');
                setCoupons(response.data);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching coupons');
            } finally {
                setLoading(false);
            }
        };

        fetchCoupons();
    }, []);

    const handleSelectCoupon = (coupon: Coupon) => {
        setSelectedCoupon(coupon);
        setCouponCode(coupon.code);
        setCouponDiscount(coupon.discount);
    };

    const handleAddOrUpdateCoupon = async () => {
        try {
            const action = selectedCoupon ? 'update' : 'add';
            const id = selectedCoupon ? selectedCoupon.id : undefined;
            const response = await axios.post('/api/coupons', {
                password,
                action,
                id,
                code: couponCode,
                discount: couponDiscount,
            });

            if (action === 'add') {
                setCoupons([...coupons, response.data.coupon]);
            } else {
                setCoupons(coupons.map(c => (c.id === id ? response.data.coupon : c)));
            }

            setCouponCode('');
            setCouponDiscount(0);
            setSelectedCoupon(null);
            setError(null);
        } catch (err: any) {
            setError(err.response?.data?.error || 'An error occurred while adding or updating the coupon');
        }
    };

    const handleDeleteCoupon = async (id: string) => {
        try {
            await axios.post('/api/coupons', {
                password,
                action: 'delete',
                id,
            });
            setCoupons(coupons.filter(coupon => coupon.id !== id));
            setError(null);
        } catch (err: any) {
            setError(err.response?.data?.error || 'An error occurred while deleting the coupon');
        }
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/login', { password });
            if (response.status === 200) {
                setIsAuthenticated(true);
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
                    <h1 className="text-2xl font-bold mb-6 text-center">Manage Coupons</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Coupon Code</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Discount</th>
                                    <th className="py-2 px-4 border-b whitespace-nowrap min-w-[150px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coupons.map(coupon => (
                                    <tr key={coupon.id} className="animate-fade-in">
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{coupon.code}</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">{coupon.discount}%</td>
                                        <td className="py-2 px-4 border-b whitespace-nowrap">
                                            <button
                                                onClick={() => handleSelectCoupon(coupon)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteCoupon(coupon.id)}
                                                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {!selectedCoupon && (
                        <div className="mt-6">
                            <h2 className="text-xl font-bold mb-4">Add New Coupon</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newCouponCode">
                                    Coupon Code
                                </label>
                                <input
                                    id="newCouponCode"
                                    type="text"
                                    value={couponCode}
                                    onChange={e => setCouponCode(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newCouponDiscount">
                                    Discount (%)
                                </label>
                                <input
                                    id="newCouponDiscount"
                                    type="number"
                                    value={couponDiscount === 0 ? "" : couponDiscount }
                                    onChange={e => setCouponDiscount(Number(e.target.value))}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                onClick={handleAddOrUpdateCoupon}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Add Coupon
                            </button>
                        </div>
                    )}
                    {selectedCoupon && (
                        <div className="mt-6">
                            <h2 className="text-xl font-bold mb-4">Edit Coupon</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editCouponCode">
                                    Coupon Code
                                </label>
                                <input
                                    id="editCouponCode"
                                    type="text"
                                    value={couponCode}
                                    onChange={e => setCouponCode(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editCouponDiscount">
                                    Discount (%)
                                </label>
                                <input
                                    id="editCouponDiscount"
                                    type="number"
                                    value={couponDiscount}
                                    onChange={e => setCouponDiscount(Number(e.target.value))}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                onClick={handleAddOrUpdateCoupon}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Update Coupon
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminCoupons;
