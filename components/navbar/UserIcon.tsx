import { auth, currentUser } from "@clerk/nextjs/server";
import { LuUser2 } from "react-icons/lu";

const UserIcon = async () => {
  const { userId } = auth();
  const user = await currentUser();
  const profileImg = user?.imageUrl;

  if (profileImg) {
    return (
      <img src={profileImg} className="w-6 h-6 rounded-full object-cover" />
    );
  }

  return (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full object-cover text-white" />
  );
};
export default UserIcon;
