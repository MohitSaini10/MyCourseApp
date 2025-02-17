import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51Ql5PKIRUPg9JkklWVbXJJOZ2drGXHf5Dke5VDKU3kj1wDrwzU4u0dU4vQVK6ddivRJbhHtB5AJEVGZKvyBJ6CBq00pBZb5W4u");


createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
