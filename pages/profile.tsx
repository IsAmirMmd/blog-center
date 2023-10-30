import { useAuth, useAuthAction } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useAuthAction();
  const { userInfo, state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (dispatch) {
      dispatch({ type: "LOAD", payload: {} });
    }
  }, []);

  return (
    <div className="flex gap-y-8 justify-center items-center flex-col w-full h-screen">
      {userInfo && (
        <>
          <p>آقا/خانم {userInfo.name} به صفحه شخصی خود خوش آمدید.</p>
          <p>آیدی شما : {userInfo._id}</p>
          <p>نام شما : {userInfo.name}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
