import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  User,
  LogOut,
  Settings,
  ChevronDown,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function UserMenu() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <div
      className="relative"
      ref={menuRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">

          <User size={18} />

        </div>

        <div className="text-left">

          <p className="font-semibold">
            {user?.username}
          </p>

          <p className="text-sm text-gray-500">
            {user?.email}
          </p>

        </div>

        <ChevronDown size={18} />

      </button>

      {open && (

        <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border overflow-hidden">

          <div className="p-4 border-b">

            <p className="font-semibold">
              {user?.username}
            </p>

            <p className="text-sm text-gray-500">
              {user?.email}
            </p>

          </div>

          <button
            onClick={() => {
              navigate("/profile");
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100"
          >
            <User size={18} />
            My Profile
          </button>

          <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100"
          >
            <Settings size={18} />
            Settings
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      )}

    </div>
  );
}