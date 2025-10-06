import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">CineSeek</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/movies" className="hover:text-blue-400">Movies</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
