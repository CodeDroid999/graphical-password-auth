const HowToUseSection: React.FC = () => {
    return (
      <section className="py-8 px-24 bg-blue-400">
        <h2 className="text-3xl font-semibold mb-4 text-black">How to Use</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-xl">Step 1: Registration</h3>
            <ul className="list-disc list-inside">
              <li>Visit the Graphical Password Auth Tool website or open the mobile app.</li>
              <li>Click on the "Sign Up" or "Register" button to create a new account.</li>
              <li>Enter your email address and create a strong password as a backup authentication method.</li>
              <li>Choose a memorable image or create a custom pattern as your graphical password.</li>
              <li>Complete the registration process and verify your email to activate your account.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-xl">Step 2: Logging In</h3>
            <ul className="list-disc list-inside">
              <li>Go to the Graphical Password Auth Tool login page or open the app.</li>
              <li>Enter your registered email address.</li>
              <li>Instead of typing a traditional password, you will see a grid or canvas.</li>
              <li>Recreate your graphical password by clicking on specific points or drawing the pattern in the correct sequence.</li>
              <li>If this is your first time logging in on a device, you may be prompted to verify your email or perform additional security steps.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-xl">Step 3: Managing Your Account</h3>
            <ul className="list-disc list-inside">
              <li>To change your graphical password or update your account details, log in and navigate to the "Account Settings" section.</li>
              <li>Select "Change Password" or "Update Details" and follow the instructions provided.</li>
              <li>You can also manage additional security settings like multi-factor authentication (if supported) for added protection.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-xl">Step 4: Password Recovery</h3>
            <ul className="list-disc list-inside">
              <li>In case you forget your graphical password, don't worry! You still have your traditional password as a backup.</li>
              <li>Click on the "Forgot Password" link on the login page.</li>
              <li>Enter your registered email address, and a password reset link will be sent to your inbox.</li>
              <li>Follow the link to reset your traditional password and regain access to your account.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-xl">Step 5: Security Tips</h3>
            <ul className="list-disc list-inside">
              <li>Keep your graphical password confidential and never share it with anyone.</li>
              <li>Avoid using easily recognizable or public images as your graphical password.</li>
              <li>Regularly review your account activity and enable multi-factor authentication if available.</li>
              <li>If you suspect any suspicious login attempts, change your password immediately and notify support.</li>
            </ul>
          </div>
          <p>
            With the Graphical Password Auth Tool, you can experience a secure and enjoyable login process, and you'll never have to worry about forgetting your passwords again!
          </p>
        </div>
      </section>
    );
  };
  
  export default HowToUseSection;
  