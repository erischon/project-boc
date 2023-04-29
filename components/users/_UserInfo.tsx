import Image from "next/image";
import getUser from "@/actions/getUser";

/**
 * @description The User Info component
 */
const UserInfo = async ({ userId }: { userId: string }) => {
  const userData = getUser(userId);

  const data = await userData;

  const { user } = data.data;

  return (
    <section className="p-4 md:flex md:flex-row-reverse md:gap-12 items-start justify-end ">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">
          <span className="font-thin">Nom :</span> {user.name}
        </p>
        <p className="font-semibold">
          <span className="font-thin">Email :</span> {user.email}
        </p>
      </div>

      <div className="my-2 md:my-0">
        <span className="font-thin">Avatar :</span>

        <div className="my-4">
          <Image
            src={user.image || "/images/placeholder-m.svg"}
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
