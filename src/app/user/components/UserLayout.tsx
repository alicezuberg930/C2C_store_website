import { user } from "@/common/dummy.data"
import ProfileMenu from "@/components/ProfileMenu"
import React from "react"

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex gap-4">
            <ProfileMenu user={user} />
            <div className="bg-white rounded-md flex-auto">
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserLayout