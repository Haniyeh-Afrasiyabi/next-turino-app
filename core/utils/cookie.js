// function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// function getCookie(name) {
//   const value = `; ${document?.cookie}`;
//   const parts = value?.split(`; ${name}=`);
//   if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
// }

// function removeCookie(name) {
//   document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// }

// export { setCookie, getCookie, removeCookie };







// ست‌کردن کوکی با تاریخ انقضا (در روز)
// function setCookie(name, value, days) {
//   let expires = "";
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + days * 86400000); // 24*60*60*1000
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/`;
// }

// // گرفتن مقدار کوکی
// function getCookie(name) {
//   if (typeof document === "undefined") return null;

//   const cookies = `; ${document.cookie}`;
//   const parts = cookies.split(`; ${name}=`);
//   if (parts.length === 2) {
//     return decodeURIComponent(parts.pop().split(";").shift());
//   }
//   return null;
// }

// // حذف کوکی
// function removeCookie(name) {
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
// }

// export { setCookie, getCookie, removeCookie };



function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 86400000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/`;
}

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const cookies = `; ${document.cookie}`;
  const parts = cookies.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(";").shift());
  }
  return null;
}

function removeCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export { setCookie, getCookie, removeCookie };
