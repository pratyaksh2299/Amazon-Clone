var images = [  
  "./images/61lwJy4B8PL._SX3000_.jpg",
  "./images/71Ie3JXGfVL._SX3000_.jpg",
  "./images/71U-Q+N7PXL._SX3000_.jpg",
  "./images/hero_image.jpg"
];

  
  var currentIndex = 0;
  var myDiv = document.getElementById("myDiv");
  
  // Function to change the background image
  function changeImage() {
    myDiv.style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Call the changeImage function every 5 seconds
  setInterval(changeImage, 4000);