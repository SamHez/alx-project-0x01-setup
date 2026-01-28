import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 px-4">Our Users</h1>
                    <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-full text-white font-semibold transition-colors shadow-md">
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        posts.map((user: UserProps) => (
                            <UserCard key={user.id} {...user} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;
