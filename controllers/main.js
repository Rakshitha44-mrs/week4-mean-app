exports.home = (req, res) => {
  res.render('index', {
    title: 'Home',
    message: 'Welcome to the Home Page!',
    bodyClass: 'home-bg'
  });
};

exports.about = (req, res) => {
  res.render('about', {
    title: 'About Us',
    message: 'Learn more about our application.',
    bodyClass: 'home-bg'
  });
};

exports.location = (req, res) => {
  res.render('location', {
    title: 'Location Info',
    message: 'Details about a location.',
    bodyClass: 'home-bg'
  });
};

exports.review = (req, res) => {
  res.render('review', {
    title: 'Review a Place',
    message: 'Leave a review for this location.',
    bodyClass: 'home-bg'
  });
};
