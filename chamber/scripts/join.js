document.addEventListener("DOMContentLoaded", () => {

  //timestamp (KEEP this)
  document.getElementById("timestamp").value = new Date().toISOString();

  //OPEN modals
  document.querySelectorAll('.modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      document.getElementById(modalId).showModal();
    });
  });

  //CLOSE modals
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('dialog').close();
    });
  });

});