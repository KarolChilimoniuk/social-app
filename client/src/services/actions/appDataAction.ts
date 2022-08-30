export const hasAccountTrue = () => {
  return {
    type: "HAS_ACCOUNT_STATUS_TRUE",
    payloads: true,
  };
};

export const hasAccountFalse = () => {
  return {
    type: "HAS_ACCOUNT_STATUS_FALSE",
    payloads: false,
  };
};
