import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-pink-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">SheAlert</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/contacts" className="hover:underline">Contacts</Link>
      </nav>
    </header>
  );
}
