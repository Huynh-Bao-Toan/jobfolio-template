const modal = document.getElementById("modal");
const submit = document.getElementById("submitSuccess");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  modal.innerHTML = `
  <div style="display: flex; justify-content: center">
  <img alt="" src="assets/images/success icon 1.png" style="width: 22.25rem; height: 23.3125rem"/> 
  </div>
  <div style="text-align: center; font-size: 2.5rem; font-weight: 700; margin-top: 1.5rem;">Successful Application !</div>
  <div style="color: #676E76; font-size: 1.125rem; margin-top: 2.25rem">
  You've successfully applied to Google ux intern role. You can see the job status form Application Tracking.
</div>
<div style="margin-top: 3.75rem; display: flex; justify-content: center">
<a href="/" style="border-radius: 3.125rem;background-color: #fff;outline: none;border: 1px solid var(--primary-black, #000); padding: 0.625rem 1.125rem; display: flex; align-items: center; text-decoration: none">
<span style="font-weight: 600;margin-right: 6px; font-size: 0.875rem; color: #000">Back to Post </span>
<svg xmlns="http://www.w3.org/2000/svg" style="width: 1.125rem; height:1.125rem;" viewBox="0 0 18 18" fill="none">
  <path d="M14.625 9L3.375 9M3.375 9L8.4375 14.0625M3.375 9L8.4375 3.9375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
</div>
  `;
});
