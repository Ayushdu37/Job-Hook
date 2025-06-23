import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = ()=>{
    const [value, setValue] = useState('react');
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput withAsterisk label="Full Name" placeholder="Your name"/>
        <TextInput withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email"/>
        <PasswordInput withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
        <PasswordInput withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Confirm password" />
        <Radio.Group
      value={value}
      onChange={setValue}
      label="You are?"
      withAsterisk
    >
        <Group mt="xs">
      <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg" autoContrast value="APPLICANT" label="Applicant" />
      <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg" autoContrast value="EMPLOYER" label="Employer" />
      </Group>
    </Radio.Group>
        <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>}/>
        <Button autoContrast variant="filled">Sign up</Button>
        <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link></div>
    </div>
}

export default SignUp;