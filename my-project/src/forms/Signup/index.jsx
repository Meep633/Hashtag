import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Feedback from '../components/Feedback';
import Submit from '../components/Submit';

function SignupForm() {
  return (
    <form class="max-w-sm mx-auto">
      <Input 
        labelFor="email" 
        labelText="Your email" 
        type="email"
        placeholder="example@gmail.com" 
        isRequired={true} 
        feedback={
          <Feedback 
            text="Testing"
          />
        }
      />
      <Input 
        labelFor="password" 
        labelText="Your password" 
        type="password"
        isRequired={true} 
      />
      <Input
        labelFor="confirmPassword"
        labelText="Confirm password"
        type="password"
        isRequired={true}
      />
      <Checkbox
        labelFor="terms"
        labelText="Agree to terms and conditions"
        isRequired={true}
      />
      <Checkbox
        labelFor="newsletter"
        labelText="Sign up for news and updates about Hashtag"
        isRequired={false}
      />
      <Submit />
    </form>
  );
}

export default SignupForm;