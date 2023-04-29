import GetUser from "@/actions/getUser";

const USER_ID = "643ab7f42b52b24258d42e66";

export default async function TestPage() {
  const userData = GetUser(USER_ID);

  const data = await userData;

  const { user } = data.data;

  return <div>{user.name}</div>;
}
