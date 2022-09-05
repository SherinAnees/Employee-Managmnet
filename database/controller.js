import Users from "../modals/user";
//get:/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: "No users found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
// to get single user
//get:/api/users/userId
export async function getUser(req, res) {
  try {
    const { userId } = req.query;
    const user = await Users.findById(userId);
    if (!user) return res.status(404).json({ error: "No users found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
//post:/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Data is not provided" });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error: "Error while creating data" });
  }
}
//put:/api/users/id
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      const updateUser = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(updateUser);
    }
    res.status(404).json({ error: "User not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while updating data" });
  }
}
//delete:/api/user/id
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      await Users.findByIdAndDelete(userId);
      res.status(200).json({ Deleted: userId });
    }
    res.status(404).json({ error: "User not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while delete data" });
  }
}
