import useDocumentTitle from "@/hooks/useDocumentTitle";

function Contact() {
  useDocumentTitle('Cart');

  return (
    <div>
      <h1 className="text-emerald-500 flex justify-center mb-16">Cart</h1>
      <div className="border-b border-gray-500 flex justify-around items-center mb-20">
        <span>Product</span>
        <span>Price</span>
        <span>Quantilty</span>
        <span>Subtotal</span>
      </div>
    </div>
  );
}

export default Contact;
