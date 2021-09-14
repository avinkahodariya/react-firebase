const intial_state = {
  User: { name: "***" },
};

const User_data = (state = intial_state, action) => {
  switch (action.type) {
    case "User_data": {
      console.log("user", action.payload);
      return { User: action.payload };
    }
    default:
      return state;
  }
};
export default User_data;
