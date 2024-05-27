import Table from "@/components/Table";


export default function Home() {
  return (
    <>
    <div className="pt-[12em]  ">
      <div className="py-[2em] flex  gap-3 items-center justify-center">

      <h1 className="text-[4em] text-black">Leader</h1>
      <h1 className="text-[4em] text-[#2563eb]">Boards</h1>
      </div>
      <Table/>
    </div> 
    </>
  );
}
