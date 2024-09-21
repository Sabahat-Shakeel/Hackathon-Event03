const form = document.getElementById("resumeForm")
const resumeContainer = document.getElementById("resume")
const shareSection = document.getElementById("share-section")
const shareButton = document.getElementById("shareButton")

form?.addEventListener("submit", event => {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const contact = document.getElementById("contact").value
  const education = document.getElementById("education").value
  const skills = document.getElementById("skills").value
  const workExperience = document.getElementById("workExperience").value
  const profileImage = document.getElementById("profilePreview").src

  if (name === "" || contact === "" || education === "" || email === "" || skills === "" || workExperience === "") {
    alert("Please fill all mandatory fields.")
    return
  }

  resumeContainer.style.display = "block"
  resumeContainer.innerHTML = `
    <img src="${profileImage}" alt="Profile Picture" style="max-width: 100px; border-radius: 50%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);">
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Work Experience:</strong> ${workExperience}</p>
  `

  // Show Share button after form submission
  shareSection.style.display = "block"
})

// Function to preview the profile image
function previewProfileImage() {
    const file = document.getElementById('profileImage').files[0]
    const reader = new FileReader()

    reader.onload = function(event) {
        const profilePreview = document.getElementById('profilePreview')
        profilePreview.src = event.target.result
        profilePreview.style.display = 'block'
    }

    if (file) {
        reader.readAsDataURL(file)
    }
}

// Handle share button click event
shareButton.addEventListener("click", () => {
  const shareData = {
    title: 'Resume',
    text: 'Check out this resume!',
    url: window.location.href // You can customize the shareable URL
  }

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log('Resume shared successfully'))
      .catch(error => console.error('Error sharing resume:', error))
  } else {
    alert('Your browser does not support Web Share API')
  }
})
