const express = require("express");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controllers/user-controller")
const { users } = require("../data/users.json");

const router = express.Router();

/* 
*Route : /users
* Method: FET  
*Description: Get all users
*Access: public
* Parametere: None
*/

router.get("/", getAllUsers);

/* 
*Route : /users/:id
* Method: GET 
*Description: Get single user by id
*Access: public
* Parametere: id
*/
router.get("/:id", getSingleUserById);

/* 
*Route : /users
* Method: POST
*Description: Create a new user
*Access: public
* Parametere: none
*/

router.post("/", createNewUser);

/* 
*Route : /users/:id
* Method: PUT
*Description: Updating user data
*Access: public
* Parametere: id
*/

router.put("/:id", updateUserById);

/* 
*Route : /users/:id
* Method: DELETE
*Description: Delete a user by id
*Access: public
* Parametere: id
*/

router.delete("/:id", deleteUser);

/* 
*Route : /users/subscription-details/:id
* Method: DELETE
*Description: Get all user subscription details
*Access: public
* Parametere: id
*/

router.get("/subscription-details/:id", getSubscriptionDetailsById);
module.exports = router; 