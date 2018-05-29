/* eslint-disable no-console */
'use strict';

const express = require('express');
const { headerChecker, appChecker, authChecker, queryChecker } = require('./middlewares/checkers.js');
/*
const usersRouter = require('./usersAPI');
const postsRouter = require('./postsAPI');
const commentsRouter = require('./commentsAPI');
const appsRouter = require('./appsAPI');
const { checker, notFound } = require('./checker');*/

const router = express.Router();

// RUTA BASE: /api/v1

router.use(require('./middlewares/prepare-request.js'));


router.use(headerChecker);
router.use(appChecker);
router.use(authChecker);
router.use(queryChecker);

router.use('/subs', require('./subs.js'));
router.use('/subs/:sub/:post', require('./posts.js'));
router.use('/subs/:sub/:post/:comment', require('./comments.js'));

router.use('/users', require('./users.js'));



// 404
router.use(require('./middlewares/not-found-api.js'));

module.exports = router;