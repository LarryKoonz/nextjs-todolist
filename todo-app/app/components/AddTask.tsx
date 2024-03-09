import { GoPlus } from "react-icons/go";
const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task
        <GoPlus size={18} />
      </button>
    </div>
  );
};

export default AddTask;
