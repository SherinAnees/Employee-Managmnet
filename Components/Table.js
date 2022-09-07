import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import { getEmployee } from "../library/helper";
import { toggleChangeAction, updateAction } from "../redux/reducer";

export default function Table() {
  //datafetched from the backend and resolved
  //getEmployee().then((res) => console.log(res));
  //using react query

  const { isLoading, isError, data, error } = useQuery("users", getEmployee);
  if (isLoading) return <div>Employee is Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

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
          <Tr {...obj} key={obj._id} />
        ))}
      </tbody>
    </table>
  );
}
function Tr({ _id, name, avatar, email, salary, date, status }) {
  const isOpen = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (isOpen) {
      dispatch(updateAction(_id));
    }
  };
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={avatar || "#"}
          alt="Profile"
        />
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
          <span
            className={`${
              status == "Active" ? "bg-green-500" : "bg-rose-500"
            } text-white px-5 py-1 rounded-full`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-center gap-5 items-center">
        <button className="cursor">
          <FaUserEdit
            onClick={handleUpdate}
            size={25}
            color={"rgb(34,197,94)"}
          />
        </button>
        <button className="cursor">
          <MdDelete size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
}
