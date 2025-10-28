// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Product Shop',
  description: 'Static product listing example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl font-bold">Product Shop</h1>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2025 Product Shop. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
