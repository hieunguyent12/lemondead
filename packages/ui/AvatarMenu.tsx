import React from "react";
import SettingsIcon from "../../apps/web/src/icons/Settings";

export type AvatarMenuProps = {};

export type AvatarMenuItemProps = {};

export const AvatarMenuItem: React.FC<AvatarMenuItemProps> = () => {
  return null;
};

// TODO add hover style
// combine with header
// animation

export const AvatarMenu: React.FC<AvatarMenuProps> = () => {
  return (
    <div
      className="flex flex-col rounded border border-gray-200 p-3"
      style={{
        maxWidth: "150px",
      }}
    >
      <span className="flex items-center text-gray-500 mb-4">
        <SettingsIcon />
        <span className="ml-2">Settings</span>
      </span>

      <span className="flex items-center text-gray-500">
        <SettingsIcon />
        <span className="ml-2">Item 2</span>
      </span>
    </div>
  );
};
