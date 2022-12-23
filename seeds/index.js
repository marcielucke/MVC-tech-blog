const sequelize = require("../config/connection")
const {User, Post, Comment} = require("../models")

const users = [
    {
        name: "marcie",
        password: "marcie1"
    },
    {
        name: "steph",
        password: "steph1"
    },
    {    name: "beth",
        password: "beth1"
    },

]

const posts = [
    {
        title: "I love coding",
        description: "this is fun",
        date_created: "12/14/2022",
        user_id: 1
    },
    {
        title: "Blogs are crazy",
        description: "Wow what a cool little blog",
        date_created: "12/14/2022",
        user_id: 1
    },
    {
        title: "It's cold outside",
        description: "At least Austin is warmer than Chicago",
        date_created: "12/14/2022",
        user_id: 2
    },
    {
        title: "What's up guys",
        description: "I hope this works",
        date_created: "12/14/2022",
        user_id: 3
    },
]

const comments = [
    {
        comment_body: "I'm Glad!",
        post_id: 1,
    },
    {
        comment_body: "the coolest blog ever",
        post_id: 3,
    },
    {
        comment_body: "Buy a hat",
        post_id: 4,
    },
    {
        comment_body: "Just staring at my computer!",
        post_id: 2,

    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Post.bulkCreate(posts);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()