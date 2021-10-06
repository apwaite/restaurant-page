console.log('Loaded contact');

function activeNavLink() {
  const contact = document.querySelector('.contact');

  const currentActive = document.querySelector('.active');

  if (currentActive) currentActive.classList.remove('active');

  contact.classList.add('active');
}

const renderContact = () => {
  const contact = document.createElement('main');
  contact.classList.add('main-contact');

  activeNavLink();

  // Details
  const details = document.createElement('section');
  details.classList.add('contact-item-alt', 'details');
  contact.appendChild(details);
  const openingTimes = document.createElement('h2');
  openingTimes.textContent = 'Opening Times:';
  details.appendChild(openingTimes);
  const openingTimesWeek = document.createElement('h3');
  openingTimesWeek.textContent = 'MON-FRI: 11:00 - 22:00';
  details.appendChild(openingTimesWeek);
  const openingTimesWeekend = document.createElement('h3');
  openingTimesWeekend.textContent = 'SAT-SUN: 13:00 - 23:00';
  details.appendChild(openingTimesWeekend);
  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '1-800-123-4567';
  details.appendChild(phoneNumber);

  // Location
  const location = document.createElement('section');
  location.classList.add('contact-item', 'location');
  contact.appendChild(location);
  const locationAddress = document.createElement('div');
  locationAddress.classList.add('location-address');
  location.appendChild(locationAddress);
  const address = document.createElement('h2');
  address.textContent = 'Our Address:';
  locationAddress.appendChild(address);
  const streetAddress = document.createElement('h3');
  streetAddress.textContent = '152 N Brand Boulevard';
  locationAddress.appendChild(streetAddress);
  const zipAddress = document.createElement('p');
  zipAddress.textContent = 'Glendale, CA 91203';
  locationAddress.appendChild(zipAddress);
  const locationImage = document.createElement('div');
  locationImage.classList.add('location-image');
  location.appendChild(locationImage);
  const image = document.createElement('img');
  image.src = 'assets/burger-place-location.jpg';
  image.alt = 'Burger Place Location';
  locationImage.appendChild(image);

  // Social Media
  const socialMedia = document.createElement('section');
  socialMedia.classList.add('contact-item-alt', 'social-media');
  contact.appendChild(socialMedia);
  const socialMediaContainer = document.createElement('div');
  socialMediaContainer.classList.add('sm-links');
  socialMedia.appendChild(socialMediaContainer);
  const socialMediaIcons = document.createElement('p');
  socialMediaContainer.appendChild(socialMediaIcons);
  // Facebook
  const fbLink = document.createElement('a');
  fbLink.href = '';
  fbLink.target = '_blank';
  socialMediaIcons.appendChild(fbLink);
  const facebook = document.createElement('i');
  facebook.classList.add('fab', 'fa-facebook-square');
  fbLink.appendChild(facebook);
  // Instagram
  const instaLink = document.createElement('a');
  instaLink.href = '';
  instaLink.target = '_blank';
  socialMediaIcons.appendChild(instaLink);
  const instagram = document.createElement('i');
  instagram.classList.add('fab', 'fa-instagram');
  instaLink.appendChild(instagram);
  // Twitter
  const twitterLink = document.createElement('a');
  twitterLink.href = '';
  twitterLink.target = '_blank';
  socialMediaIcons.appendChild(twitterLink);
  const twitter = document.createElement('i');
  twitter.classList.add('fab', 'fa-twitter');
  twitterLink.appendChild(twitter);
  return contact;
};

export { renderContact };
