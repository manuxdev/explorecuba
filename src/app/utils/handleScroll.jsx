export const HandleScroll = (e) => {
  // Primero, previene el comportamiento predeterminado
  e.preventDefault();
  // Obtiene el href y elimina todo antes del hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // Obtiene el elemento por id y usa scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};
