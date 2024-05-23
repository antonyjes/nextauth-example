import { useCurrentUser } from "@/hooks/use-current-user";

export const useCurrentRole = () => {
    const { session } = useCurrentUser();

    return session?.user?.role;
}