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
    // Get the values separated by comma from the form.
    let jobs = document.getElementById("jobs").value.concat(",");
    const arrayJobs = [];

    for (let i = 0; 1 <= jobs.length; i++) {
      const inJobs = jobs.indexOf(",");
      const newJob = jobs.slice(0, inJobs);

      jobs = jobs.replace(newJob + ",", "");
      arrayJobs.push(newJob);
    }

    let education = document.getElementById("education").value.concat(",");
    const arrayEducation = [];

    for (let i = 0; 1 <= education.length; i++) {
      const inEducation = education.indexOf(",");
      const newEducation = education.slice(0, inEducation);

      education = education.replace(newEducation + ",", "");
      arrayEducation.push(newEducation);
    }

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

    let skills = document.getElementById("skills").value.concat(",");
    const arraySkills = [];

    for (let i = 0; 1 <= skills.length; i++) {
      const inSkills = skills.indexOf(",");
      const newSkills = skills.slice(0, inSkills);

      skills = skills.replace(newSkills + ",", "");
      arraySkills.push(newSkills);
    }

    let languages = document.getElementById("languages").value.concat(",");
    const arrayLanguages = [];

    for (let i = 0; 1 <= languages.length; i++) {
      const inLanguages = languages.indexOf(",");
      const newLanguages = languages.slice(0, inLanguages);

      languages = languages.replace(newLanguages + ",", "");
      arrayLanguages.push(newLanguages);
    }

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
    resumeProfileImage.setAttribute("src", "./assets/img/profile.png");
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

    const resumeLanguageListItem1 = document.createElement("li");
    resumeLanguageListItem1.innerHTML = arrayLanguages[0];

    const resumeLanguageListItem2 = document.createElement("li");
    resumeLanguageListItem2.innerHTML = arrayLanguages[1];

    const resumeLanguageListItem3 = document.createElement("li");
    resumeLanguageListItem3.innerHTML = arrayLanguages[2];

    const resumeLanguageListItem4 = document.createElement("li");
    resumeLanguageListItem4.innerHTML = arrayLanguages[3];

    const resumeLanguageListItem5 = document.createElement("li");
    resumeLanguageListItem5.innerHTML = arrayLanguages[4];

    cardCol4.appendChild(resumeLanguages);
    resumeLanguages.appendChild(resumeLanguagesTitle);
    resumeLanguages.appendChild(resumeLanguagesDivider);
    resumeLanguages.appendChild(resumeLanguagesList);
    arrayLanguages[0] !== undefined
      ? resumeLanguagesList.appendChild(resumeLanguageListItem1)
      : "";
    arrayLanguages[1] !== undefined
      ? resumeLanguagesList.appendChild(resumeLanguageListItem2)
      : "";
    arrayLanguages[2] !== undefined
      ? resumeLanguagesList.appendChild(resumeLanguageListItem3)
      : "";
    arrayLanguages[3] !== undefined
      ? resumeLanguagesList.appendChild(resumeLanguageListItem4)
      : "";
    arrayLanguages[4] !== undefined
      ? resumeLanguagesList.appendChild(resumeLanguageListItem5)
      : "";

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

    const resumeSkillsListItem1 = document.createElement("li");
    resumeSkillsListItem1.innerHTML = arraySkills[0];

    const resumeSkillsListItem2 = document.createElement("li");
    resumeSkillsListItem2.innerHTML = arraySkills[1];

    const resumeSkillsListItem3 = document.createElement("li");
    resumeSkillsListItem3.innerHTML = arraySkills[2];

    const resumeSkillsListItem4 = document.createElement("li");
    resumeSkillsListItem4.innerHTML = arraySkills[3];

    const resumeSkillsListItem5 = document.createElement("li");
    resumeSkillsListItem5.innerHTML = arraySkills[4];

    cardCol8.appendChild(resumeSkills);
    resumeSkills.appendChild(resumeSkillsTitle);
    resumeSkills.appendChild(resumeSkillsDivider);
    resumeSkills.appendChild(resumeSkillsList);
    arraySkills[0] !== undefined
      ? resumeSkillsList.appendChild(resumeSkillsListItem1)
      : "";
    arraySkills[1] !== undefined
      ? resumeSkillsList.appendChild(resumeSkillsListItem2)
      : "";
    arraySkills[2] !== undefined
      ? resumeSkillsList.appendChild(resumeSkillsListItem3)
      : "";
    arraySkills[3] !== undefined
      ? resumeSkillsList.appendChild(resumeSkillsListItem4)
      : "";
    arraySkills[4] !== undefined
      ? resumeSkillsList.appendChild(resumeSkillsListItem5)
      : "";

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

    const resumeExperienceListItem1 = document.createElement("li");
    resumeExperienceListItem1.innerHTML = arrayJobs[0];

    const resumeExperienceListItem2 = document.createElement("li");
    resumeExperienceListItem2.innerHTML = arrayJobs[1];

    const resumeExperienceListItem3 = document.createElement("li");
    resumeExperienceListItem3.innerHTML = arrayJobs[2];

    const resumeExperienceListItem4 = document.createElement("li");
    resumeExperienceListItem4.innerHTML = arrayJobs[3];

    const resumeExperienceListItem5 = document.createElement("li");
    resumeExperienceListItem5.innerHTML = arrayJobs[4];

    cardCol8.appendChild(resumeExperience);
    resumeExperience.appendChild(resumeExperienceTitle);
    resumeExperience.appendChild(resumeExperienceDivider);
    resumeExperience.appendChild(resumeExperienceList);
    arrayJobs[0] !== undefined
      ? resumeExperienceList.appendChild(resumeExperienceListItem1)
      : "";
    arrayJobs[1] !== undefined
      ? resumeExperienceList.appendChild(resumeExperienceListItem2)
      : "";
    arrayJobs[2] !== undefined
      ? resumeExperienceList.appendChild(resumeExperienceListItem3)
      : "";
    arrayJobs[3] !== undefined
      ? resumeExperienceList.appendChild(resumeExperienceListItem4)
      : "";
    arrayJobs[4] !== undefined
      ? resumeExperienceList.appendChild(resumeExperienceListItem5)
      : "";

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

    const resumeEducationListItem1 = document.createElement("li");
    resumeEducationListItem1.innerHTML = arrayEducation[0];

    const resumeEducationListItem2 = document.createElement("li");
    resumeEducationListItem2.innerHTML = arrayEducation[1];

    const resumeEducationListItem3 = document.createElement("li");
    resumeEducationListItem3.innerHTML = arrayEducation[2];

    cardCol8.appendChild(resumeEducation);
    resumeEducation.appendChild(resumeEducationTitle);
    resumeEducation.appendChild(resumeEducationDivider);
    resumeEducation.appendChild(resumeEducationList);
    arrayEducation[0] !== undefined
      ? resumeEducationList.appendChild(resumeEducationListItem1)
      : "";
    arrayEducation[1] !== undefined
      ? resumeEducationList.appendChild(resumeEducationListItem2)
      : "";
    arrayEducation[2] !== undefined
      ? resumeEducationList.appendChild(resumeEducationListItem3)
      : "";

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

    const resumeCertificationsListItem1 = document.createElement("li");
    resumeCertificationsListItem1.innerHTML = arrayCertifications[0];

    const resumeCertificationsListItem2 = document.createElement("li");
    resumeCertificationsListItem2.innerHTML = arrayCertifications[1];

    const resumeCertificationsListItem3 = document.createElement("li");
    resumeCertificationsListItem3.innerHTML = arrayCertifications[2];

    cardCol8.appendChild(resumeCertifications);
    resumeCertifications.appendChild(resumeCertificationsTitle);
    resumeCertifications.appendChild(resumeCertificationsDivider);
    resumeCertifications.appendChild(resumeCertificationsList);
    arrayCertifications[0] !== undefined
      ? resumeCertificationsList.appendChild(resumeCertificationsListItem1)
      : "";
    arrayCertifications[1] !== undefined
      ? resumeCertificationsList.appendChild(resumeCertificationsListItem2)
      : "";
    arrayCertifications[2] !== undefined
      ? resumeCertificationsList.appendChild(resumeCertificationsListItem3)
      : "";

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
