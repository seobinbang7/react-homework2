import useDocumentTitle from "@/hooks/useDocumentTitle";


function Products() {
  
  useDocumentTitle('Payment');

  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-emerald-500">Payment</h1>
      <div className="w-100 border-b mb-4"></div>
      <h2 className="font-bold mb-4">주문자 정보</h2>
      <div className="flex mb-4">
        <span className="mr-32">이메일</span>
        <input type="email" className="w-64 h-12 border mr-4 rounded-lg"></input><span>@</span><input className="w-64 h-12 border ml-4 rounded-lg"></input>
      </div>
      <div className="w-100 border-b mb-4"></div>
      <h2 className="font-bold mb-4">배송지 정보</h2>
      <div className="flex mb-4">
        <span className="mr-24">받으신 분 *</span>
        <input type="text" className="w-[35rem] h-12 border rounded-lg"></input>
      </div>
      <div className="flex mb-4">
        <span className="mr-[6.4rem]">일반전화 *</span>
        <div className="flex justrify-center items-center">
          <input type="tel" className="w-32 h-12 border rounded-lg"></input>
          <span className="ml-4 mr-4">-</span>
          <input type="tel" className="w-32 h-12 border rounded-lg"></input>
          <span className="ml-4 mr-4">-</span>
          <input type="tel" className="w-32 h-12 border rounded-lg"></input>
        </div>
      </div>
      <div className="flex mb-4">
        <span className="mr-[6.4rem]">배송메시지</span>
        <input type="text" className="w-[35rem] h-80 border rounded-lg"></input>
      </div>
      <div className="w-100 border-b mb-4"></div>
      <h2 className="font-bold mb-4">결제수단</h2>
      <div>
        <span className="mr-[7.20rem]">결제방식</span>
        <button className="w-[10rem] h-12 border rounded-lg bg-color-yellow">카카오페이 결제</button>
      </div>
    </div>
  );
}

export default Products;
