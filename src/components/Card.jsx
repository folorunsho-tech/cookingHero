import { AiOutlineShareAlt } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ title, img, id }) => {
  return (
    <div className="bg-white shadow-md rounded-xl sm:mb-6  w-60 relative grid">
      <MdFavoriteBorder className="text-xl absolute right-3 top-3 text-blue-700 cursor-pointer" />
      <img
        className="rounded-t-xl object-cover w-full h-48"
        src={img}
        alt={title}
      />
      <div className="py-4 px-3 space-y-3 cursor-pointer">
        <h2 className="text-md font-semibold text-left">{title}</h2>
      </div>

      <div className="flex justify-between items-center px-3 py-4 self-end">
        <button className="bg-red-600 p-1 px-3 text-sm text-white rounded-full transition duration-300 ease-in hover:bg-blue-900">
          <Link to={`/recipe/${id}`}>View Recipe</Link>
        </button>
        <button className="flex items-center gap-2 text-blue-900 transition duration-300 ease-in hover:text-blue-600">
          <AiOutlineShareAlt className="font-bold" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Card;
