// This cookie is used to get the player's score if present

const getCookieValue = (name) => {
  let result = document.cookie.match(
    "(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)"
  );

  return result ? result.pop() : 0;
};

export default getCookieValue;
