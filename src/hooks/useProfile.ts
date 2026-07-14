import { useEffect, useState } from "react";
import { getProfile } from "../services/userService";
import type { User } from "../types/article";

export default function useProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return {
    user,
    loading,
  };
}