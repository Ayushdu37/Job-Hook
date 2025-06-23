import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { profile } from "../Data/TalentData";
import Profile from "../Components/TalentProfile/Profile";
import RecTalent from "../Components/TalentProfile/RecTalent";

const TalentProfilePage = ()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-'poppins' p-4">
        <Link className="my-4 inline-block" to="/find-talent">
        <Button color="brightSun.4" leftSection={<IconArrowLeft size={20}/>} variant="light" fullWidth>Back</Button>
        </Link>
        <div className="flex gap-5">
          <Profile />
          <RecTalent />
        </div>
  </div>
}

export default TalentProfilePage;