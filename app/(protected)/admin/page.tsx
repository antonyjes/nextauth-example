"use client";

import { useCurrentRole } from "@/hooks/use-current-role"

const AdminPage = () => {
    const role = useCurrentRole();

    return(
        <div>
            Role: {role}
        </div>
    )
}

export default AdminPage;