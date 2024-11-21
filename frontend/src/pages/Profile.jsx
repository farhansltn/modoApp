import React, { useState } from 'react';

const userData = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1 234 567 890",
  address: "123 Main St, Springfield, USA",
  profilePicture: "https://www.w3schools.com/w3images/avatar2.png", // Example image URL
  orders: [
    { id: 1, date: "2024-11-01", total: "$200" },
    { id: 2, date: "2024-10-15", total: "$350" },
  ]
};

const Profile = () => {
  const [user, setUser] = useState(userData);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark'); // Remove dark mode
    } else {
      document.documentElement.classList.add('dark'); // Add dark mode
    }
  };

  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={user.profilePicture} 
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700"
        />
        <div>
          <h2 className="text-3xl font-semibold">{user.name}</h2>
          <p className="text-lg">{user.email}</p>
          <p className="text-lg">{user.phone}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Address</h3>
        <p>{user.address}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Order History</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {user.orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <button 
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Profile;
