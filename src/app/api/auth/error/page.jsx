import Image from "next/image";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className=" h-[50vh] flex justify-center items-center flex-col p-20 rounded-4xl gap-5  shadow-gray-200  shadow-4xl border ">
        <h1 className=" text-8xl font-extrabold text-[#1E3A8A]">403</h1>
        <h1 className="text-2xl font-semibold text-red-600">
          Access Denied 🚫
        </h1>
        <p className="mt-2 text-black-600 font-bold">
          You do not have permission to access this application.
        </p>
      </div>
    </div>
  );
}
