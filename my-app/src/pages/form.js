export default function Form() {
    return (
   <div>
   <div className="parent-nav">
        <div className="nav-menu" style={{margin:"0"}}>
            <div className="nav-logo">
                <a href="tugas.html">Aini</a> 
             </div>
             <div className="nav-menu-child-1">
                <a href="tugas.html">Home</a>
             </div>
             <div className="nav-menu-child-2">
                <a href="tugas.html">Contact List</a>
             </div>
             <div className="nav-menu-child-3">
                <a href="tugas.html">Contact Me</a>
             </div>
        </div>
     </div>


   <div className="text-center">
   <form>
     <strong><h1>Contact Me</h1></strong>
     
     <div>
       <input className="bg-pink-500 py-4 px-36 rounded-xl mb-1 mt-8"
         type="text"
         placeholder="Full Name"
       />
     </div>
     
     <div> 
       <input className="bg-pink-500 py-4 px-36 mb-1 rounded-xl"
         type="text"
         placeholder="Email"
       />
     </div>
     
     <div> 
       <textarea className="bg-pink-500 py-16 px-[150px] rounded-xl" placeholder="Message"></textarea>
     </div>
     
     <div> 
       <button className="bg-pink-500 py-4 px-[210px] rounded-xl">SEND</button>
     </div>
   </form>
 </div>
 </div>
     )};
