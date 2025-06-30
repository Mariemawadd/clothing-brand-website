/* product page sizechart*/
function openSizeChart() {
    document.getElementById("sizeChartModal").style.display = "block";
}

function closeSizeChart() {
    document.getElementById("sizeChartModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("sizeChartModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


  /* -1+ product */
  function changeQty(amount) {
    const input = document.getElementById("qtyInput");
    let value = parseInt(input.value);

    if (!isNaN(value)) {
        value += amount;
        if (value < 1) value = 1;
        input.value = value;
    }
}

/* cart page checkout button */

function goToPage() {
    window.location.href = 'checkout.html';
  }

/* orders page buy again button */

  function goToProductPage() {
    window.location.href = 'Product.html'; 
  }

/* footer submit button*/
function handleFooterSubmit(event) {
  event.preventDefault();
  alert('Your email was submitted successfully');
}

/* contact page submit button */
function handleSubmit(event) {
  event.preventDefault();  
  alert('You have successfully submitted the form!');
}


    /*sign in and sign up */

    function goToSigninPage() {
              window.location.href = 'signin.html';
            }
    function goToHomePage() {
              window.location.href = 'home.html';
            }
    function goToAccountPage() {
              window.location.href = 'account.html';
            }
    function confirmSignIn() {
              if (confirm("Are you sure you want to sign in?")) {
                goToHomePage();
              }
              }


/* care product page */

function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block"; // Show the content
  } else {
    section.style.display = "none"; // Hide the content
  }
}
