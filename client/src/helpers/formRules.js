export const formRules = {
  passwordInput: [
    {
      type: "string",
      required: true,
      message: "Please input your password",
      whitespace: true,
    },
    {
      min: 6,
      message: "Please enter a password longer than 6 characters",
    },
    () => ({
      validator(_, value) {
        if (value && value.includes(" ")) {
          return Promise.reject(
            new Error("The password cannot contain spaces")
          );
        }
        return Promise.resolve();
      },
    }),
  ],
  confirmPaswordInput: [
    { required: true, message: "Please confirm your password" },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The two passwords that you entered do not match")
        );
      },
    }),
  ],

  emailInput: [
    { required: true, message: "Please input your email" },
    {
      type: "email",
      message: "The input is not valid E-mail!",
    },
  ],

  secondaryEmailInput: (alternativeEmailChecked) => [
    {
      validator: (_, email) => {
        if (alternativeEmailChecked && !email) {
          return Promise.reject("Please enter your secondary email address");
        }

        return Promise.resolve();
      },
    },
    {
      type: "email",
      message: "The input is not valid E-mail!",
    },
  ],

  normalInputField: (label, required = true) => [
    {
      required,
      message: `Please input your ${label}`,
    },
  ],
};
