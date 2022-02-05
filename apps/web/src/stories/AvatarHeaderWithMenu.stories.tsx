import { useState } from "react";
import { AvatarHeader, AvatarMenu } from "ui";

import { OutsideAlerter } from "../hooks/useOutsideAlert";

function AvatarHeaderWithMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <OutsideAlerter callback={() => setShowMenu(false)}>
        <AvatarHeader
          name="Hieu Nguyen"
          id="avatarHeader"
          onClick={(e) => {
            e.stopPropagation();
            if (showMenu) {
              setShowMenu(false);
            } else {
              setShowMenu(true);
            }
          }}
        />
      </OutsideAlerter>
      {showMenu && <AvatarMenu className="mt-1" />}
    </div>
  );
}

export default {
  component: AvatarHeaderWithMenu,
  title: "AvatarHeaderWithMenu",
};

const Template = (args) => <AvatarHeaderWithMenu {...args} />;

export const MyAvatarHeaderWithMenu = Template.bind({});
