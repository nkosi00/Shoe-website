 // Change background on sign up
      document.body.style.backgroundImage = "url('https://cdn.sanity.io/images/d6wcctii/production/9120ff8ef9acdf98536f1bcacb3aeb677581436d-1070x760.png')
window.addEventListener('scroll', function() {
  const fourthSection = document.querySelector('.fourth-section');
  const fifthSection = document.querySelector('.fifth-section');
  const screenHeight = window.innerHeight;

  // Trigger the fourth section's animation when it's in view
  const fourthSectionPosition = fourthSection.getBoundingClientRect().top;
  if (fourthSectionPosition < screenHeight) {
      fourthSection.classList.add('active');
  } else {
      fourthSection.classList.remove('active');
  }

  // Trigger the fifth section's sliding effect only after scrolling past the fourth section
  const fourthSectionBottom = fourthSection.getBoundingClientRect().bottom;
  if (fourthSectionBottom < 0) {
      fifthSection.classList.add('active');
  } else {
      fifthSection.classList.remove('active');
  }
});
