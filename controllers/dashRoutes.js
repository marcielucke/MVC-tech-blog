const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts with auth

router.get('/post', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
              {
                model: User,
                attributes: ['name', 'description', 'date_created'],
              },
            ],
          });
        const post = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', { 
            logged_in: req.session.logged_in,
            post
          });
        } catch (err) {
          res.status(500).json(err);
        }


    });


// get one post with auth 

router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name', 'description', 'date_created'],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router
