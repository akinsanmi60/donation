/* eslint-disable no-useless-escape */
export const emailRule = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Invalid email address",
  },
};

export const inputRuleNoPattern = (name: string) => ({
  required: `${name} is required`,
});

export const dateRule = {
  required: "Date is required",
  pattern: {
    // eslint-disable-next-line no-useless-escape
    // value: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
    message: "Date format should be mm/dd/yy",
  },
};

export const contactRule = (name: string) => ({
  required: `${name ? name : "Contact"} is required`,
  pattern: {
    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    message: "Invalid contact number ",
  },
});

export const confirmPasswordRule = (password: string) => ({
  pattern: {
    value: new RegExp(password, "gi"),
    message: "Password do not match",
  },
});

export const numberRule = (name: string) => ({
  required: `${name} is required`,
  pattern: {
    value: /[0-9]+$/,
    message: `${name} must be an integer`,
  },
});
