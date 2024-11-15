import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Toast = () => {
  const { notification } = useContext(CartContext);
  return (
    <>
      {notification && (
        <div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50"
          style={{
            background: "linear-gradient(135deg, #66bb6a, #43a047)",
          }}
        >
          {notification}
        </div>
      )}
    </>
  );
};
export default Toast;
