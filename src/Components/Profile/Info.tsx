import { useState } from "react";
import fields from "../../Data/Profile";
import { ActionIcon } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { profile } from "../../Data/TalentData";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";

const Info = () => {
    const select = fields;
    const dispatch = useDispatch();
    const user = useSelector((state:any)=>state.user);
    const profile = useSelector((state:any)=>state.profile);
    const [edit, setEdit] = useState(false);
    const handleClick = ()=>{
      if(!edit){
        setEdit(true);
        form.setValues({jobTitle: profile.jobTitle, company: profile.company, location: profile.location});
      }else{
        setEdit(false);
        let updatedProfile={...profile, ...form.getValues()};
        dispatch(changeProfile(updatedProfile));
        // console.log(updatedProfile);
        successNotification("Success", "Profile Updated Successfully.");
      }
    }
    const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location: '' },
  });
  return (
    <>
      <div className="text-3xl font-semibold flex justify-between">
        {user.name}
        <ActionIcon onClick={handleClick} size="lg" color="brightSun.4" variant="subtle">
          {edit ? <IconDeviceFloppy /> : <IconPencil />}
        </ActionIcon>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>
          <SelectInput form={form} name="location" {...select[2]} />
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center">
            <IconBriefcase stroke={1.5} className="h-5 w-5" /> {profile.jobTitle} &bull; {profile.company}
          </div>
          <div className="text-lg text-mine-shaft-400 flex gap-1 items-center">
            <IconMapPin stroke={1.5} className="h-5 w-5" /> {profile.location}
          </div>
        </>
      )}
    </>
  );
};

export default Info;
