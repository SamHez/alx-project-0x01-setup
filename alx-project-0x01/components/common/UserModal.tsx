import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: { lat: "", lng: "" }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setUser((prev) => ({
                ...prev,
                [parent]: {
                    ...(prev[parent as keyof UserData] as object),
                    [child]: value,
                },
            }));
        } else {
            setUser((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user as any);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
            <div className="bg-white rounded-xl p-8 shadow-2xl w-full max-w-2xl my-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Add New User</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Leanne Graham"
                            required
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-gray-700 font-medium mb-1">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Bret"
                            required
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="sincere@april.biz"
                            required
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-gray-700 font-medium mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="1-770-736-8031"
                        />
                    </div>

                    <div className="col-span-2 pt-4 border-t mt-2">
                        <h3 className="text-lg font-semibold mb-2 text-gray-700">Address</h3>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Street</label>
                        <input
                            type="text"
                            name="address.street"
                            value={user.address.street}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">City</label>
                        <input
                            type="text"
                            name="address.city"
                            value={user.address.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="col-span-2 pt-4 border-t mt-2">
                        <h3 className="text-lg font-semibold mb-2 text-gray-700">Company</h3>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700 font-medium mb-1">Company Name</label>
                        <input
                            type="text"
                            name="company.name"
                            value={user.company.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="col-span-2 flex justify-end space-x-4 mt-6 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
