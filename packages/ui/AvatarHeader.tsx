import React from "react";

export type AvatarHeaderProps = {
  avatar: React.ReactNode;
  name: React.ReactNode;
};

export const AvatarHeader: React.FC<AvatarHeaderProps> = ({ avatar, name }) => {
  const placeholderAvatar = (
    <div className="rounded-full bg-blue-400 w-8 h-8 mr-2"></div>
  );

  return (
    <div className="flex items-center w-max p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded cursor-pointer">
      {avatar ? avatar : placeholderAvatar}
      {name}
    </div>
  );
};
