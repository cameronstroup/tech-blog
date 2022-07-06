const sequelize = require("../config/connection");
const { Users, Posts, Comments } = require("../models");

// const userData = require("./userData.json");
const postData = require("./postSeed.json");
// const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //   const users = await Users.bulkCreate(userData, {
  //     individualHooks: true,
  //     returning: true,
  //   });

  const posts = await Posts.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  // for (const posts of postData) {
  //   await Posts.create({
  //     ...posts,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,

  //   });
  // }

  //   for (const comments of commentData) {
  //     await Comments.create({
  //       ...comments,
  //       user_id: users[Math.floor(Math.random() * users.length)].id,
  //       post_id: posts[Math.floor(Math.random() * posts.length)].id,
  //     });
  //   }

  process.exit(0);
};

seedDatabase();
