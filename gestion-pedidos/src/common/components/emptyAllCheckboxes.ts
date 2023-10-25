export const emptyAllCheckboxes = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    (checkbox as HTMLInputElement).checked = false;
  });
};
