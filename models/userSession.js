// store your session details in here.
// remember to require it in the app.js
// remember to module.export

app.use(session({
  secret: 'ssshhh',
  resave: false,
  saveUninitialized: true
}));


// SIFT THROUGH THIS AND FIND WAY TO CONFIG COUNT
// // this starts the views/ session count
// app.use(function (req, res, next) {
//   var views = req.session.views;
//
//   if (!views) {
//     views = req.session.views = {};
//   }
//
//   // get the url pathname
//   var pathname = parseurl(req).pathname;
//
//   // count the views
//   views[pathname] = (views[pathname] || 0) + 1
//
//   next();
// })
//
// function authenticate(req, username, password){
//   var authenticatedUser = data.users.find(function (user) {
//     if (username === user.username && password === user.password) {
//       req.session.authenticated = true;
//       console.log('User & Password Authenticated');
//     } else {
//       return false
//     }
//   });
//   console.log(req.session);
//   return req.session;
// }
//
// app.get('/foo', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
// })
//
// app.get('/bar', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
// })
