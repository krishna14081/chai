// ---- edit these ----
const VPA = "kmishra4102-1@okhdfcbank";
const NAME = "Krishna";
// --------------------

document.getElementById("vpa").textContent = VPA;

const copy = document.getElementById("copy");
copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(VPA);
    copy.textContent = "Copied";
  } catch {
    copy.textContent = "Copy failed";
  }
  setTimeout(() => (copy.textContent = "Copy"), 1800);
});
