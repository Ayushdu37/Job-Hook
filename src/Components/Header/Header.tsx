import { Button, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const user=useSelector((state:any)=>state.user);
  const location = useLocation();
  return location.pathname!=="/signup" && location.pathname!=="/login" ? <div className="w-full text-white h-20 flex justify-between px-6 items-center bg-mine-shaft-950 font-'poppins'">
        <div className="flex gap-1 items-center text-bright-sun-400 cursor-pointer">
          <IconAnchor className="h-8 w-8" stroke={2.5} />
          <div className="text-3xl font-semibold">JobHook</div>
        </div>

        {NavLinks()}

        <div className="flex gap-3 items-center ">
          {/* <div className="flex items-center gap-2">
            <div>Ayush</div>
            <Avatar src="avatar.png" alt="it's me" />
          </div> */}
          {user?<ProfileMenu/>:<Link to="/login">
          <Button variant="subtle" color="brightSun.4">Login</Button>
          </Link>}
          {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5} />
          </div> */}
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color="brightSun.4" offset={7} size={7} processing>
              <IconBell stroke={1.5} />
            </Indicator>
          </div>
        </div>
      </div>:<></>
  
};

export default Header;
