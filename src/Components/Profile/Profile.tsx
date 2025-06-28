import { useEffect, useState } from "react";
import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";

import { profile } from "../../Data/TalentData";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import SelectInput from "./SelectInput";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import fields from "../../Data/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import { error } from "console";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state:any)=>state.user);
  const profile = useSelector((state:any)=>state.profile);
  const [skills, setSkills] = useState(["React", "Springboot", "MongoDB", "HTML", "CSS"]);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const [about, setAbout] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");

  const handleClick = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  useEffect(()=>{
    getProfile(user.id).then((data:any)=>{
      dispatch(setProfile(data));
    }).catch((error:any)=>{
      console.log(error);
    })
  }, [])

  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img className="h-48 w-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src="/avatar.png" alt="" />
      </div>

      <div className="px-3 mt-16">
        <Info/>

      <Divider my="xl" />

      <div>
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About
          <ActionIcon onClick={() => handleClick(1)} size="lg" color="brightSun.4" variant="subtle">
            {edit[1] ? <IconDeviceFloppy /> : <IconPencil />}
          </ActionIcon>
        </div>

        {edit[1] ? (
          <Textarea autosize minRows={2} value={about} placeholder="Enter about yourself" onChange={(e) => setAbout(e.currentTarget.value)} />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">{profile?.about}</div>
        )}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills
          <ActionIcon onClick={() => handleClick(2)} size="lg" color="brightSun.4" variant="subtle">
            {edit[2] ? <IconDeviceFloppy /> : <IconPencil />}
          </ActionIcon>
        </div>

        {edit[2] ? (
          <TagsInput value={skills} onChange={setSkills} placeholder="Add Skills" splitChars={[",", " ", "|"]} />
        ) : (
          <div className="flex flex-wrap gap-2">
            {profile?.skills?.map((skill:any, index:number) => (
              <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience
          <div className="flex gap-2">
            <ActionIcon onClick={() => setAddExp(true)} size="lg" color="brightSun.4" variant="subtle">
              <IconPlus />
            </ActionIcon>
            <ActionIcon onClick={() => handleClick(3)} size="lg" color="brightSun.4" variant="subtle">
              {edit[3] ? <IconDeviceFloppy /> : <IconPencil />}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {profile?.experience?.map((exp:any, index:number) => (
            <ExpCard key={index} {...exp} edit={edit[3]} />
          ))}
          {addExp && <ExpInput setEdit={setAddExp} />}
        </div>
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications
          <div className="flex gap-2">
            <ActionIcon onClick={() => setAddCerti(true)} size="lg" color="brightSun.4" variant="subtle">
              <IconPlus />
            </ActionIcon>
            <ActionIcon onClick={() => handleClick(4)} size="lg" color="brightSun.4" variant="subtle">
              {edit[4] ? <IconDeviceFloppy /> : <IconPencil />}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {profile?.certifications?.map((cert:any, index:number) => (
            <CertiCard key={index} {...cert} edit={edit[4]} />
          ))}
          {addCerti && <CertiInput setEdit={setAddCerti} />}
        </div>
      </div>
    </div></div>
  );
};

export default Profile;
