import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import data from "../database/data.json";

export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((obj) => (
          <Tr {...obj} key={obj.id} />
        ))}
      </tbody>
    </table>
  );
}
function Tr({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={avatar || "#"} alt="Profile" />
        <span className="text-center ml-2 font-semibold">{name || ""}</span>
      </td>
      <td className="px-16 py-2">
        <span>{email}</span>
      </td>
      <td className="px-16 py-2">
        <span>AED:{salary}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded-full">
            {status || ""}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-center gap-5 items-center">
        <button className="cursor">
          <FaUserEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button className="cursor">
          <MdDelete size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
}
