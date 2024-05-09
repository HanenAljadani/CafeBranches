
import branches from "./data.json";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center  bg-white">
     <h2 className="px-8 py-12 font-bold text-xl"> Cafe Branches</h2>
     <div className="flex justify-center items-center ">
    <table > 
    <thead>
    <tr >
        <th className="pr-24">
          ID 
        </th>
        <th>
          Location 
        </th>
        <th>
          Manager 
        </th>
        <th >
          Number Of Employees 
        </th>
</tr> 
</thead>
<tbody >
      {
       branches && branches.map(branch => {
          return(
             <tr className="rounded-lg  bg-slate-200 ">
             <td className="pr-24"> {branch.branchID}</td> 
             <td >  {branch.location}</td> 
             <td  className="pl-12">  {branch.branchManager}</td> 
             <td > {branch.numberOfEmployees}</td>
             </tr>
          )
        })
      }</tbody> </table>
   
     </div>
    </main>
  );
}
