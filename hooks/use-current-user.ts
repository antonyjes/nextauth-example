import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react"

export const useCurrentUser = () => {
    const [session, setSession] = useState<Session | null>(null);
    const [status, setStatus] = useState("unauthenticated");
    const pathName = usePathname();

    const fetchSession = useCallback(async () => {
        try {
            setStatus("loading");

            const sessionData = await getSession();

            if (sessionData) {
                setSession(sessionData);
                setStatus("authenticated");
                return;
            }

            setStatus("unauthenticated");
        } catch (error) {
            setStatus("unauthenticated");
            setSession(null);
        }
    }, []);

    useEffect(() => {
        fetchSession();
    }, [fetchSession, pathName]);

    return { session, status };
}