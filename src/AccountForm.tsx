import { FormWrapper } from "./FormWrapper";
type AccountData = {
  email: string;
  password: string;
};
type AccountFormProps = AccountData & {
  updateFeilds: (fields: Partial<AccountData>) => void;
};
export function AccountForm({ email, password, updateFeilds }: AccountFormProps) {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input autoFocus required type="email"value={email}
        onChange={(e) => updateFeilds({ email: e.target.value })} />
      <label>Password</label>
      <input required type="password" value={password}
        onChange={(e) => updateFeilds({ password: e.target.value })}/>
    </FormWrapper>
  );
}
