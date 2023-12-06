import { useUpdateAccountContext, useFetchProfile } from "@/pages/hooks";
const UpdateFields = () => {
  useFetchProfile();
  const { profileState, setProfileState } = useUpdateAccountContext();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setProfileState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="relative flex w-full flex-col items-start justify-start px-4">
      <p className="mt-8 text-lightSemiViolet dark:text-semiWhite">Name:</p>
      <input
        type="text"
        className="mt-2 h-9 w-full border-b-2 border-semiBlack/25 bg-transparent pl-4 text-sm text-semiBlack/60 outline-none dark:border-semiWhite/60 dark:text-semiWhite/50"
        name="name"
        value={profileState.name}
        onChange={onChangeHandler}
      />
      <p className="mt-8 text-lightSemiViolet dark:text-semiWhite">Username:</p>
      <input
        type="text"
        className="mt-2 h-9 w-full border-b-2 border-semiBlack/25 bg-transparent pl-4 text-sm text-semiBlack/60 outline-none dark:border-semiWhite/60 dark:text-semiWhite/50"
        name="username"
        value={profileState.username}
        onChange={onChangeHandler}
      />
      <p className="mt-8 text-lightSemiViolet dark:text-semiWhite">Email:</p>
      <input
        type="text"
        className="mt-2 h-9 w-full border-b-2 border-semiBlack/25 bg-transparent pl-4 text-sm text-semiBlack/60 outline-none dark:border-semiWhite/60 dark:text-semiWhite/50"
        name="email"
        value={profileState.email}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default UpdateFields;
