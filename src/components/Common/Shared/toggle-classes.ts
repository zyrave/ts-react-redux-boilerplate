export default function toggleClasses(
  toggleClass: string,
  classList: string[],
  force: boolean | undefined
) {
  const level = classList.indexOf(toggleClass);
  const removeClassList = classList.slice(0, level);
  removeClassList.map((className: any) =>
    document.body.classList.remove(className)
  );
  document.body.classList.toggle(toggleClass, force);
}
