import { useNavigate } from "react-router-dom";

const BackButton = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 my-6 transition duration-300 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 group-hover:-translate-x-1
  transition duration-300
  "
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span>{text}</span>
    </button>
  );
};
export default BackButton;
