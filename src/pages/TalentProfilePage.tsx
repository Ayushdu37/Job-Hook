import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecTalent from "../TalentProfile/RecTalent";

const TalentProfilePage = ()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-'poppins' p-4">
        <Divider size="xs" />
        <Link className="my-4 inline-block" to="/find-talent">
        <Button color="brightSun.4" leftSection={<IconArrowLeft size={20}/>} variant="light" fullWidth>Back</Button>
        </Link>
        <div className="flex gap-5">
          <Profile {...profile}/>
          <RecTalent />
        </div>
  </div>
}

export default TalentProfilePage;