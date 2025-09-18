/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { ShoppingCart } from "lucide-react";

interface RazorpayButtonProps {
  amount: number; // Amount in INR (e.g., 900 for ₹9.00)
  productName: string;
  onPaymentSuccess?: (response: any) => void;
  onPaymentFailure?: (response: any) => void;
}

const RazorpayButton: FC<RazorpayButtonProps> = ({
  amount,
  productName,
  onPaymentSuccess,
  onPaymentFailure,
}) => {
  const handlePayment = () => {
    const options: any = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Your Razorpay Key in .env
      amount: amount * 100, // Convert to paise
      currency: "INR",
      name: "Your Company/Website",
      description: productName,
      handler: (response: any) => {
        if (onPaymentSuccess) onPaymentSuccess(response);
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      theme: { color: "#2563EB" }, // Tailwind primary color
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.on("payment.failed", (response: any) => {
      if (onPaymentFailure) onPaymentFailure(response);
      alert("Payment Failed! Reason: " + response.error.description);
    });

    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 text-base rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      Get Instant Access - ₹{amount}
    </button>
  );
};

export default RazorpayButton;
