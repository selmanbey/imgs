export async function fetchImagesFromImgur({
  section,
  sort,
  window,
  page,
  showViral,
}) {
  let data = await fetch("/get-images-from-imgur", {
    method: "POST",
    body: JSON.stringify({
      section,
      showViral,
      sort,
      window,
      page,
    }),
  });

  let images = await data.json();

  // img.link is often CORS disabled, thus filter images for img.images.link
  // return only single images, not collections, just for the sake of simplicity
  return images.filter((img) => img.images && img.images.length === 1);
}
