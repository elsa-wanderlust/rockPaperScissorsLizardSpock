export default function Layout({ children }) {
  return (
    <div className="bg-green-200 h-screen w-screen justify-center items-center flex">
      {/* display the child prop */}
      {children}
    </div>
  );
}
