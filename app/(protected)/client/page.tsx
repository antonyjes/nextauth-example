"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
    const {session} = useCurrentUser();

    return(
        <UserInfo user={session?.user} label="📱 Client component" />
    )
}

export default ClientPage;