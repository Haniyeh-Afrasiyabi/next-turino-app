export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-60">
      <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      <span className="mr-4 text-gray-600">در حال بارگذاری اطلاعات ...</span>
    </div>
  );
}
