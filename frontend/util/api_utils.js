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

export const createBooking = (booking) => (
  $.ajax({
    method: "POST",
    url: "/api/bookings",
    data: { booking }
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/bookings/${id}`,
  })
);

export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/reviews/${id}`,
  })
);
