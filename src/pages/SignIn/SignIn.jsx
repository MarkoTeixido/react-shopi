import { useContext, useEffect } from "react";
import { ShoppingContext } from '../../context/ShoppingContext';
import FormSignIn from "../../components/FormSignIn/FormSignIn";
import FormSignUp from "../../components/FormSignUp/FormSignUp";

function SignIn() {
  const context = useContext(ShoppingContext);

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  useEffect(() => {
    if (!hasUserAnAccount) {
      context.setViewForm('create-user-info');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasUserAnAccount]);

  const renderView = () => context.viewForm === 'create-user-info' ? <FormSignUp /> : <FormSignIn />;

  return (
    <div className="max-md:my-10  md:my-16">
      {renderView()}
    </div>
  );
}
  
export default SignIn;