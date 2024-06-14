const loadHTML = async (elemId, url) => {
  const response = await fetch(url);
  const textHTML = await response.text();
  const elementParent = document.getElementById(elemId);
  elementParent.innerHTML = textHTML;
};
const path = window.location.pathname;
const pathname = path.substring(path.lastIndexOf("/") + 1);
if (pathname === "") {
  loadHTML("headerHome", "../../template/navHome.html");
  loadHTML("footerHome", "../../template/footer.html");
} else {
  loadHTML("header", "../../template/nav.html");
  loadHTML("footer", "../../template/footer.html");
}
