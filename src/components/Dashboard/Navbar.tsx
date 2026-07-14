import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import CategorySelect from "./CategorySelect";

export default function Navbar() {
  return (
    <header className="bg-white shadow">

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          to="/dashboard"
          className="text-2xl font-bold text-blue-600"
        >
          TravelArticle
        </Link>

       <SearchBar />

      <CategorySelect />

      <UserMenu />

      </div>

    </header>
  );
}