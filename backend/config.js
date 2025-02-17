import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51Ql5PZIe6PcN2bFly9ToXnYZO4ggSyqy0ORZBxwPDdgfHCOsvWUlLYWQvyKT0atbQIGsSQV82r2YCzOPAnZPUNKv00sisZMbYX";

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};
