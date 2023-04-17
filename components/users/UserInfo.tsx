"use client";

import Image from "next/image";
import { useQuery } from "@apollo/client";

import { GET_USER } from "@/graphql/queries";

interface UserInfoProps {
  userId: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ userId }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { userId: userId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className="w-full p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Mes informations</h2>
        <p className="font-semibold">
          <span className="font-thin">Nom :</span> {data.user.name}
        </p>
        <p className="font-semibold">
          <span className="font-thin">Email :</span> {data.user.email}
        </p>
        <div>
          <span className="font-thin">Avatar :</span>
          <div className="flex justify-center shadow-md p-4">
            <Image
              src={data.user.image || "/images/placeholder.jpg"}
              className="rounded-full"
              height="80"
              width="80"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
