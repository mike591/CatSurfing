export const createCat = (cat) => (
  $.ajax({
    method: "GET",
    url: "api/cats",
    data: cat
  })
);

export const updateCat = (cat) => (
  $.ajax({
    method: "PATCH",
    url: "api/cats",
    data: cat
  })
);

export const deleteCat = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/cats/${id}`
  })
);
