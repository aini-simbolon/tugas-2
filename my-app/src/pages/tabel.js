

export default function Tabel() {
  return (
  
    <div>

          <div className="parent-nav ">
            <div className="nav-menu" style={{margin: "0"}}>  
                <div className="nav-logo">
                    <a href="tugas.html">Aini</a> 
                 </div>
                 <div className="nav-menu-child-1 ">
                    <a href="tugas.html">Home</a>
                 </div>
                 <div className="nav-menu-child-2 ">
                    <a href="tugas.html">Contact List</a>
                 </div>
                 <div className="nav-menu-child-3">
                    <a href="tugas.html">Contact Me</a>
                 </div>
            </div>
         </div>

      <div>
  <h2 className="text-center text-xl font-bold my-4">Contact List</h2>
  <button className="bg-blue-500 rounded-lg px-8 text-white">Add</button>
  <table className="text-center w-full  mt-4  border border-[black]">
    <thead>
      <tr>
        <th className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2">NO</th>
        <th className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2">NAME</th>
        <th className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2">EMAIL</th>
        <th className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2">MESSAGE</th>
        <th className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2">SEND AT</th>
        <th className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2">ACTION</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2 border-b border-[black] px-4 py-2">
          <button className="px-4 py-1 bg-pink-400 text-white rounded-lg">Edit</button>
          <button className="ml-2 px-4 py-1 bg-pink-600 text-white rounded-lg">Delete</button>
        </td>
      </tr>
      
      <tr>
        <td className="border-r border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2"></td>
        <td className="border-r border-[black] px-4 py-2">
          <button className="px-4 py-1 bg-pink-400 text-white rounded-lg">Edit</button>
          <button className="ml-2 px-4 py-1 bg-pink-600 text-white rounded-lg">Delete</button>
        </td>
      </tr>
    </tbody>

  </table>
</div>

 </div>
 )};
