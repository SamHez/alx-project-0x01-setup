import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
    return (
        <div className="max-w-md mx-auto my-6 bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-24 flex items-end px-6 pb-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg -mb-8 overflow-hidden">
                    <span className="text-2xl font-bold text-blue-600">{name.charAt(0)}</span>
                </div>
            </div>
            <div className="pt-10 px-6 pb-6 mt-2">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors uppercase tracking-wide">{name}</h2>
                <p className="text-sm font-medium text-gray-500 lowercase italic">@{username}</p>

                <div className="mt-4 space-y-3">
                    <div className="flex items-center text-gray-600">
                        <span className="mr-2">📧</span>
                        <span className="text-sm">{email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-2">📞</span>
                        <span className="text-sm">{phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-2">🌐</span>
                        <span className="text-sm hover:text-blue-500 cursor-pointer">{website}</span>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">Company</p>
                    <p className="text-sm text-gray-600 font-medium">{company.name}</p>
                    <p className="text-xs text-gray-500 mt-1">"{company.catchPhrase}"</p>
                </div>

                <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-800">Address</p>
                    <p className="text-sm text-gray-600">{address.street}, {address.suite}</p>
                    <p className="text-sm text-gray-600">{address.city}, {address.zipcode}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
