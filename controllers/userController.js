 
import  UsersList  from './../models/userModel.js';

const GetUsers = (req, res) => {
  const users = UsersList();
  res.render('userView', { users });
}

export default GetUsers