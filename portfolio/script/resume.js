const downloadPdf = function () {
  const button = document.querySelector(".btn-box");
  button.addEventListener("click", function () {
    const downloadLink = document.createElement("a");
    downloadLink.href = "nilesh.pdf";
    downloadLink.download = "resume.pdf";

    downloadLink.click();
    //document.body.removeChild(downloadLink);
    const about = document.querySelector("#about");
    about.scrollIntoView({ behavior: "smooth" });
  });
};
downloadPdf();
