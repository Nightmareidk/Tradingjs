const fs = require("fs-extra")
const path = require("path")

// path to the users data file
const usersFilePath = path.join(__dirname, "../data/users.txt")

const getAllUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading users file:", error)
    return []
  }
}
const saveUsers = (users) => {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
    return true
  } catch (error) {
    console.error("Error writing users file:", error)
    return false
  }
}


const addUser = (user) => {
  const users = getAllUsers()


  const existingUser = users.find((u) => u.email === user.email)
  if (existingUser) {
    return { success: false, message: "Email already in use" }
  }


  const newUser = {
    ...user,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)
  const saved = saveUsers(users)

  if (saved) {
    return { success: true, user: newUser }
  } else {
    return { success: false, message: "Failed to save user" }
  }
}

// finding code block
const findUserByEmail = (email) => {
  const users = getAllUsers()
  return users.find((user) => user.email === email)
}

const validateCredentials = (email, password) => {
  const user = findUserByEmail(email)
  if (!user) {
    return { success: false, message: "User not found" }
  }

  if (user.password !== password) {
    return { success: false, message: "Invalid password" }
  }

  return { success: true, user }
}

module.exports = {
  getAllUsers,
  addUser,
  findUserByEmail,
  validateCredentials,
}
