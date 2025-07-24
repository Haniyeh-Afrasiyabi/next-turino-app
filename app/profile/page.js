"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@/core/schema/profile";
import { editProfile } from "@/core/services/config";
import { userProfile } from "@/core/services/config";
import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [asl, setAsl] = useState(true);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await userProfile();
        setProfile(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, []);

  const editHandler = () => {
    setEdit(true);
    setAsl(false);
  };

  const cancelHandler = () => {
    setEdit(false);
    setAsl(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
    };
    console.log(payload);

    try {
      const result = await editProfile(payload);
      setEdit(false);
      setAsl(true);
      const dataEdit = await userProfile();
      setProfile(dataEdit);
      console.log(result);
    } catch (error) {
      console.log("خطای کامل:", error.response);
    }
  };

  return (
    <div>
      <div>
        <h3>Profile</h3>
        {asl && (
          <div>
            <p>{profile.id}</p>
            <p>{profile.mobile}</p>
            {/* <p>{profile.email} </p> */}
            {!profile.email ? <p>__</p> : <p>{profile.email}</p>}
            <button onClick={editHandler}>ویرایش</button>
          </div>
        )}
        {edit && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>ورود به تورینو</h2>
              <div>
                <p>شماره موبایل خود را وارد کنید</p>
                <input placeholder="example@gmail.com" {...register("email")} />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>

              <button onClick={cancelHandler}>انصراف</button>
              <input type="submit" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
