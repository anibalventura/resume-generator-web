window.onload = () => {
  // Show current year in footer.
  document.getElementById("current-year").innerHTML = new Date().getFullYear();
};

const formInputs = [
  document.getElementById("name"),
  document.getElementById("phone"),
  document.getElementById("address"),
  document.getElementById("email"),
  document.getElementById("web-page"),
  document.getElementById("summary"),
  document.getElementById("jobs"),
  document.getElementById("education"),
  document.getElementById("certifications"),
  document.getElementById("skills"),
  document.getElementById("languages"),
];

let isResumeGenerated = false;

function generateResume() {
  if (validateForm()) {
    ////////////////////////////////
    // Generate view of the resume.
    ////////////////////////////////

    const resumeContainer = document.getElementById("resume-container");
    resumeContainer.setAttribute("class", "row justify-content-center m-5");

    // Remove generated resume if any.
    while (resumeContainer.firstElementChild) {
      resumeContainer.removeChild(resumeContainer.firstElementChild);
    }

    const divCol12 = document.createElement("div");
    divCol12.setAttribute("class", "col-12");

    const card = document.createElement("div");
    card.setAttribute("class", "card p-4 m-4");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardRow = document.createElement("div");
    cardRow.setAttribute("class", "row");

    const cardCol4 = document.createElement("div");
    cardCol4.setAttribute("class", "col-4");

    const cardCol8 = document.createElement("div");
    cardCol8.setAttribute("class", "col-8");

    resumeContainer.appendChild(divCol12);
    divCol12.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardRow);
    cardRow.appendChild(cardCol4);
    cardRow.appendChild(cardCol8);

    ////////////////////////////////
    // Name and image section.
    ////////////////////////////////

    const resumeProfile = document.createElement("div");
    resumeProfile.setAttribute("class", "mb-4");

    const resumeProfileName = document.createElement("h1");
    resumeProfileName.setAttribute("class", "text-primary mb-4");
    resumeProfileName.innerHTML = document.getElementById("name").value;

    const resumeProfileImage = document.createElement("img");
    resumeProfileImage.setAttribute(
      "src",
      document.getElementById("image-url").value
    );
    resumeProfileImage.setAttribute("onerror", "this.src='../img/profile.png'");
    resumeProfileImage.setAttribute("alt", "profile");
    resumeProfileImage.setAttribute(
      "class",
      "img-fluid rounded-circle shadow-sm w-75"
    );

    cardCol4.appendChild(resumeProfile);
    resumeProfile.appendChild(resumeProfileName);
    resumeProfile.appendChild(resumeProfileImage);

    ////////////////////////////////
    // Contact section.
    ////////////////////////////////

    const resumeContact = document.createElement("div");
    resumeContact.setAttribute("class", "mb-4");

    const resumeContactTitle = document.createElement("h4");
    resumeContactTitle.setAttribute("class", "text-info");
    resumeContactTitle.innerHTML = "Contact";

    const resumeContactDivider = document.createElement("hr");
    resumeContactDivider.setAttribute("class", "bg-primary");

    const resumeContactAddress = document.createElement("h5");
    resumeContactAddress.innerHTML = "Address:";

    const resumeContactAddressValue = document.createElement("p");
    resumeContactAddressValue.innerHTML =
      document.getElementById("address").value;

    const resumeContactPhone = document.createElement("h5");
    resumeContactPhone.innerHTML = "Phone:";

    const resumeContactPhoneValue = document.createElement("p");
    resumeContactPhoneValue.innerHTML = document.getElementById("phone").value;

    const resumeContactEmail = document.createElement("h5");
    resumeContactEmail.innerHTML = "Email:";

    const resumeContactEmailValue = document.createElement("p");
    resumeContactEmailValue.innerHTML = document.getElementById("email").value;

    const resumeContactWebPage = document.createElement("h5");
    resumeContactWebPage.innerHTML = "Web Page:";

    const resumeContactWebPageValue = document.createElement("p");
    resumeContactWebPageValue.innerHTML =
      document.getElementById("web-page").value;

    cardCol4.appendChild(resumeContact);
    resumeContact.appendChild(resumeContactTitle);
    resumeContact.appendChild(resumeContactDivider);
    resumeContact.appendChild(resumeContactAddress);
    resumeContact.appendChild(resumeContactAddressValue);
    resumeContact.appendChild(resumeContactPhone);
    resumeContact.appendChild(resumeContactPhoneValue);
    resumeContact.appendChild(resumeContactEmail);
    resumeContact.appendChild(resumeContactEmailValue);
    resumeContact.appendChild(resumeContactWebPage);
    resumeContact.appendChild(resumeContactWebPageValue);

    ////////////////////////////////
    // Languages section.
    ////////////////////////////////

    const resumeLanguages = document.createElement("div");
    resumeLanguages.setAttribute("class", "mb-4");

    const resumeLanguagesTitle = document.createElement("h4");
    resumeLanguagesTitle.setAttribute("class", "text-info");
    resumeLanguagesTitle.innerHTML = "Languages";

    const resumeLanguagesDivider = document.createElement("hr");
    resumeLanguagesDivider.setAttribute("class", "bg-primary");

    const resumeLanguagesList = document.createElement("ul");

    cardCol4.appendChild(resumeLanguages);
    resumeLanguages.appendChild(resumeLanguagesTitle);
    resumeLanguages.appendChild(resumeLanguagesDivider);
    resumeLanguages.appendChild(resumeLanguagesList);

    let languages = document.getElementById("languages").value.concat(",");
    const arrayLanguages = [];

    for (let i = 0; 1 <= languages.length; i++) {
      const inLanguages = languages.indexOf(",");
      const newLanguages = languages.slice(0, inLanguages);

      languages = languages.replace(newLanguages + ",", "");
      arrayLanguages.push(newLanguages);
    }

    arrayLanguages.forEach((language) => {
      if (language !== undefined) {
        const li = document.createElement("li");
        li.innerHTML = language;
        resumeLanguagesList.appendChild(li);
      }
    });

    ////////////////////////////////
    // Summary section.
    ////////////////////////////////

    const resumeSummary = document.createElement("div");
    resumeSummary.setAttribute("class", "mb-4");

    const resumeSummaryTitle = document.createElement("h4");
    resumeSummaryTitle.setAttribute("class", "text-info");
    resumeSummaryTitle.innerHTML = "Summary";

    const resumeSummaryDivider = document.createElement("hr");
    resumeSummaryDivider.setAttribute("class", "bg-primary");

    const resumeSummaryValue = document.createElement("p");
    resumeSummaryValue.innerHTML = document.getElementById("summary").value;

    cardCol8.appendChild(resumeSummary);
    resumeSummary.appendChild(resumeSummaryTitle);
    resumeSummary.appendChild(resumeSummaryDivider);
    resumeSummary.appendChild(resumeSummaryValue);

    ////////////////////////////////
    // Skills section.
    ////////////////////////////////

    const resumeSkills = document.createElement("div");
    resumeSkills.setAttribute("class", "mb-4");

    const resumeSkillsTitle = document.createElement("h4");
    resumeSkillsTitle.setAttribute("class", "text-info");
    resumeSkillsTitle.innerHTML = "Skills";

    const resumeSkillsDivider = document.createElement("hr");
    resumeSkillsDivider.setAttribute("class", "bg-primary");

    const resumeSkillsList = document.createElement("ul");

    cardCol8.appendChild(resumeSkills);
    resumeSkills.appendChild(resumeSkillsTitle);
    resumeSkills.appendChild(resumeSkillsDivider);
    resumeSkills.appendChild(resumeSkillsList);

    let skills = document.getElementById("skills").value.concat(",");
    const arraySkills = [];

    for (let i = 0; 1 <= skills.length; i++) {
      const inSkills = skills.indexOf(",");
      const newSkills = skills.slice(0, inSkills);

      skills = skills.replace(newSkills + ",", "");
      arraySkills.push(newSkills);
    }

    arraySkills.forEach((skill) => {
      if (skill !== undefined) {
        const li = document.createElement("li");
        li.innerHTML = skill;
        resumeSkillsList.appendChild(li);
      }
    });

    ////////////////////////////////
    // Experience section.
    ////////////////////////////////

    const resumeExperience = document.createElement("div");
    resumeExperience.setAttribute("class", "mb-4");

    const resumeExperienceTitle = document.createElement("h4");
    resumeExperienceTitle.setAttribute("class", "text-info");
    resumeExperienceTitle.innerHTML = "Experience";

    const resumeExperienceDivider = document.createElement("hr");
    resumeExperienceDivider.setAttribute("class", "bg-primary");

    const resumeExperienceList = document.createElement("ul");

    cardCol8.appendChild(resumeExperience);
    resumeExperience.appendChild(resumeExperienceTitle);
    resumeExperience.appendChild(resumeExperienceDivider);
    resumeExperience.appendChild(resumeExperienceList);

    let jobs = document.getElementById("jobs").value.concat(",");
    const arrayJobs = [];

    for (let i = 0; 1 <= jobs.length; i++) {
      const inJobs = jobs.indexOf(",");
      const newJob = jobs.slice(0, inJobs);

      jobs = jobs.replace(newJob + ",", "");
      arrayJobs.push(newJob);
    }

    arrayJobs.forEach((jobs) => {
      if (jobs !== undefined) {
        const li = document.createElement("li");
        li.innerHTML = jobs;
        resumeExperienceList.appendChild(li);
      }
    });

    ////////////////////////////////
    // Education section.
    ////////////////////////////////

    const resumeEducation = document.createElement("div");
    resumeEducation.setAttribute("class", "mb-4");

    const resumeEducationTitle = document.createElement("h4");
    resumeEducationTitle.setAttribute("class", "text-info");
    resumeEducationTitle.innerHTML = "Education";

    const resumeEducationDivider = document.createElement("hr");
    resumeEducationDivider.setAttribute("class", "bg-primary");

    const resumeEducationList = document.createElement("ul");

    cardCol8.appendChild(resumeEducation);
    resumeEducation.appendChild(resumeEducationTitle);
    resumeEducation.appendChild(resumeEducationDivider);
    resumeEducation.appendChild(resumeEducationList);

    let education = document.getElementById("education").value.concat(",");
    const arrayEducation = [];

    for (let i = 0; 1 <= education.length; i++) {
      const inEducation = education.indexOf(",");
      const newEducation = education.slice(0, inEducation);

      education = education.replace(newEducation + ",", "");
      arrayEducation.push(newEducation);
    }

    arrayEducation.forEach((education) => {
      if (education !== undefined) {
        const li = document.createElement("li");
        li.innerHTML = education;
        resumeEducationList.appendChild(li);
      }
    });

    ////////////////////////////////
    // Certifications section.
    ////////////////////////////////

    const resumeCertifications = document.createElement("div");
    resumeCertifications.setAttribute("class", "mb-4");

    const resumeCertificationsTitle = document.createElement("h4");
    resumeCertificationsTitle.setAttribute("class", "text-info");
    resumeCertificationsTitle.innerHTML = "Certifications";

    const resumeCertificationsDivider = document.createElement("hr");
    resumeCertificationsDivider.setAttribute("class", "bg-primary");

    const resumeCertificationsList = document.createElement("ul");

    cardCol8.appendChild(resumeCertifications);
    resumeCertifications.appendChild(resumeCertificationsTitle);
    resumeCertifications.appendChild(resumeCertificationsDivider);
    resumeCertifications.appendChild(resumeCertificationsList);

    let certifications = document
      .getElementById("certifications")
      .value.concat(",");
    const arrayCertifications = [];

    for (let i = 0; 1 <= certifications.length; i++) {
      const inCertification = certifications.indexOf(",");
      const newCertification = certifications.slice(0, inCertification);

      certifications = certifications.replace(newCertification + ",", "");
      arrayCertifications.push(newCertification);
    }

    arrayCertifications.forEach((certifications) => {
      if (certifications !== undefined) {
        const li = document.createElement("li");
        li.innerHTML = certifications;
        resumeCertificationsList.appendChild(li);
      }
    });

    /////////////////////////////////

    alert("Resume generated successfully!");
    isResumeGenerated = true;
    clearForm();
  } else {
    alert("Please fill all the required fields.");
  }
}

function validateForm() {
  let IsValid = true;

  formInputs.forEach((input) => {
    const inputValue = input.value;

    if (inputValue === "" || inputValue == null || inputValue == undefined) {
      input.setAttribute("class", "input-invalid form-control shadow-sm");
      IsValid = false;
    } else {
      input.classList.remove("input-invalid");
    }
  });

  return IsValid;
}

function clearForm() {
  formInputs[0].focus();

  formInputs.forEach((input) => {
    input.value = "";
    input.classList.remove("input-invalid");
  });

  document.getElementById("image-url").value = "";
}

function printResume() {
  if (isResumeGenerated) {
    //Get the HTML of div
    var divElements = document.getElementById("resume-container").innerHTML;
    //Get the HTML of whole page
    var oldPage = document.body.innerHTML;

    //Reset the page's HTML with div's HTML only
    document.body.innerHTML = `<html><head><title></title></head><body> ${divElements} </body>`;

    //Print Page
    window.print();

    //Restore original HTML
    document.body.innerHTML = oldPage;
  } else {
    alert("Please generate the resume first.");
  }
}
