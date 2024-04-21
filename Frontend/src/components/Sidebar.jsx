import  {  } from "react";
import { Link } from "react-router-dom";



const Sidebar = () => {
 // const [teachers, setTeachers] = useState("false");

  const sideMenus = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/users" },
    { name: "Teachers", href: "#" },
    { name: "student", href: "/student" },
    { name: "courses", href: "#" },
    { name: "Attendance" , href:'#'}
  ];
  return (
    <div className="flex flex-col h-screen bg-sidebarColor w-72  text-black">
      <div className="flex flex-col items-center justify-center h-28">
        <Link to="/home" >
          <img
            src="../../public/images/logo.png"
            
            className="w-10 rounded-md"
          />
        </Link>
        <p className="font-bold text-xl"><i className="text-yellow-50 text-2xl font-mono">G</i>ANJ</p>
      </div>
      <div className="flex-1">
      
        {/* <Link to="/dashboard/teachers">Teachers</Link> */}
        <div className="flex flex-col text-lg ">
          {sideMenus.map((item) => (
            <Link to={item.href} key={item.name} className="hover:bg-orange-300 pl-3 text-md font-semibold p-1">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div>bottom</div>
    </div>
  );
};

export default Sidebar;
