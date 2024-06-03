import { useEffect, useState } from "react";
import axios from "axios";

interface Wallet {
  id: string;
  desc: string;
  image: string;
  name: string;
  wallet: string;
  icon: string;
  method: string;
}

const Wallets = ({ password }: { password: string }) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [newWalletAddress, setNewWalletAddress] = useState<string>("");

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await axios.get("/api/wallets", { password } as any);
        setWallets(response.data);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching wallets");
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, [password]);

  const handleSelectWallet = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    setNewWalletAddress(wallet.wallet);
  };

  const handleUpdateWallet = async () => {
    if (selectedWallet) {
      try {
        await axios.post("/api/wallets", {
          password,
          id: selectedWallet.id,
          wallet: newWalletAddress,
        });
        setWallets(
          wallets.map((w) =>
            w.id === selectedWallet.id ? { ...w, wallet: newWalletAddress } : w
          )
        );
        setSelectedWallet(null);
        setNewWalletAddress("");
        setError(null);
      } catch (err: any) {
        setError(err.message || "An error occurred while updating the wallet");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Wallets</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b whitespace-nowrap">
                Wallet Name
              </th>
              <th className="py-2 px-4 border-b whitespace-nowrap">
                Wallet Address
              </th>
              <th className="py-2 px-4 border-b whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((wallet) => (
              <tr key={wallet.id} className="animate-fade-in">
                <td className="py-2 px-4 border-b whitespace-nowrap">
                  {wallet.name}
                </td>
                <td className="py-2 px-4 border-b whitespace-nowrap">
                  {wallet.wallet}
                </td>
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newWalletAddress"
            >
              New Wallet Address
            </label>
            <input
              id="newWalletAddress"
              type="text"
              value={newWalletAddress}
              onChange={(e) => setNewWalletAddress(e.target.value)}
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
  );
};

export default Wallets;
