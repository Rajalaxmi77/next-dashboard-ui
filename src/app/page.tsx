import Link from "next/link";

const Homepage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">


      <div>
        <h1 className="text-4xl font-bold mb-4">Student Management System</h1>
        <p className="mb-6 text-lg">
          Manage students, classes, and records efficiently.
        </p>
        
      <Link 
          href="/dashboard/admin"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-lg font-semibold transition"
        >
          Go to Admin Dashboard
        </Link>
      {/* <Link
          href="/dashboard/teacher"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-lg font-semibold transition"
        >
          Go to Teacher Dashboard
        </Link>
        <Link
          href="/dashboard/student"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-lg font-semibold transition"
        >
          Go to Student Dashboard
        </Link> */}
        </div>
    </div>
  );
};

export default Homepage;
