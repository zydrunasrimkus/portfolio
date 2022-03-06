const showFooter = (name) => {
  const footer = document.getElementById("footer");
  const date = new Date().getFullYear();
  footer.insertAdjacentText("afterbegin", `© ${name} ${date}`);
};

export { showFooter };
