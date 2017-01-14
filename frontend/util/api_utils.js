export const getHosts = (city) => (
  $.ajax({
    method: "GET",
    url: "api/users",
    data: {city}
  })
);

export const getHost = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}`
  })
);

export const getCats = () => (
  $.ajax({
    method: "GET",
    url: "api/cats"
  })
);

export const createCat = (cat) => (
  $.ajax({
    method: "POST",
    url: "api/cats",
    data: {cat}
  })
);

export const updateCat = (cat) => (
  $.ajax({
    method: "PATCH",
    url: "api/cats",
    data: {cat}
  })
);

export const deleteCat = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/cats/${id}`
  })
);
