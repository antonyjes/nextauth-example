import { db } from "@/lib/db";

export const getAccountByUserId = async (userId: string) => {
    try {
        const account = await db.account.findUnique({
            where: {
                userId
            }
        });

        return account;
    } catch (error) {
        return null;
    }
}