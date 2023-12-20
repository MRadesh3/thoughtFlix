export const dateIN = (date) => {
  const mongodbDate = new Date(date);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Kolkata",
  };

  return mongodbDate.toLocaleDateString("en-IN", options);
};

export const Motivatuonal_Images = [
  {
    id: 1,
    src: "/assets/images/motivational_img.jpeg",
    alt: "motivational_img",
  },
  {
    id: 2,
    src: "/assets/images/motivational_img_2.jpeg",
    alt: "motivational_img",
  },
  {
    id: 3,
    src: "/assets/images/motivational_img_3.jpg",
    alt: "motivational_img",
  },
  {
    id: 4,
    src: "/assets/images/motivational_img_4.jpg",
    alt: "motivational_img",
  },
  {
    id: 5,
    src: "/assets/images/motivational_img_5.jpeg",
    alt: "motivational_img",
  },
  {
    id: 6,
    src: "/assets/images/motivational_img_6.jpg",
    alt: "motivational_img",
  },
  {
    id: 7,
    src: "/assets/images/motivational_img_7.jpg",
    alt: "motivational_img",
  },
  {
    id: 8,
    src: "/assets/images/motivational_img_8.jpg",
    alt: "motivational_img",
  },
];
