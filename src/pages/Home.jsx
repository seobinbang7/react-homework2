import useDocumentTitle from "@/hooks/useDocumentTitle";


function Home() {
  useDocumentTitle('장바구니');

  return (
    <div>
      <h2 className="text-emerald-500">장바구니</h2>
      
    </div>
  );
}

export default Home;