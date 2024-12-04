// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { clearNotification } from "../store/cartSlice";

// const Toast = () => {
//   const notification = useSelector((state) => state.cart.notification);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (notification) {
//       const timer = setTimeout(() => {
//         dispatch(clearNotification());
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [notification, dispatch]);

//   return (
//     <>
//       {notification && (
//         <div
//           className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50"
//           style={{
//             background: "linear-gradient(135deg, #66bb6a, #43a047)",
//           }}
//         >
//           {notification}
//         </div>
//       )}
//     </>
//   );
// };

// export default Toast;
