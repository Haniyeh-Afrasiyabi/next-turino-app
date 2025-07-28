"use client";

import BankAccount from "@/components/modules/profile/bankAccount/BankAccount";
import Personal from "@/components/modules/profile/personal/Personal";
import UserAccount from "@/components/modules/profile/userAccount/UserAccount";

function Profile() {
  return (
    <div className="flex flex-col gap-5">
      <UserAccount />
      <Personal />
      <BankAccount />
    </div>
  );
}

export default Profile;
