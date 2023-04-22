"use client";

import Image from "next/image";
import { useQuery } from "@apollo/client";

import { GET_USER } from "@/graphql/queries";

interface UserInfoProps {
  userId: string;
}

/**
 * @description The User Info component
 */
const UserInfo: React.FC<UserInfoProps> = ({ userId }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { userId: userId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className="p-4 md:flex md:flex-row-reverse md:gap-12 items-start justify-end ">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">
          <span className="font-thin">Nom :</span> {data.user.name}
        </p>
        <p className="font-semibold">
          <span className="font-thin">Email :</span> {data.user.email}
        </p>
      </div>

      <div className="my-2 md:my-0">
        <span className="font-thin">Avatar :</span>

        <div className="my-4">
          <Image
            src={data.user.image || "/images/placeholder-m.svg"}
            className="rounded-full shadow-md"
            height="80"
            width="80"
            alt="Avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
