import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Submit from '../components/Submit';

function LoginForm() {
  return (
    <form class="max-w-sm mx-auto">
      <Input 
        labelFor="email" 
        labelText="Your email" 
        type="email"
        placeholder="example@gmail.com" 
        isRequired={true} 
      />
      <Input 
        labelFor="password" 
        labelText="Your password" 
        type="password"
        isRequired={true} 
      />
      <Checkbox
        labelFor="remember"
        labelText="Remember me"
        isRequired={false}
      />
      <Submit />
    </form>
  );
}

export default LoginForm;