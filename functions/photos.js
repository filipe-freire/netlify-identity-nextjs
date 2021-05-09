exports.handler = async (event, context) => {
  const photos = [
    {
      src: "./imgs/1.webp",
      description: "Chickadee on white",
      author: "@pbrandao",
      date: "September 24, 2014",
      link: "https://unsplash.com/photos/YLgTmdb7r1o"
    },
    {
      src: "./imgs/2.webp",
      description: "Robin Singing For Spring",
      author: "@janmeeus",
      date: "April 5, 2018",
      link: "https://unsplash.com/photos/7LsuYqkvIUM"
    },
    {
      src: "./imgs/3.webp",
      description: "I like watching birds, especially in winter time. ",
      author: "@designbytholen",
      date: "October 30, 2019",
      link: "https://unsplash.com/photos/TBf7nD07dfc"
    },
    {
      src: "./imgs/4.webp",
      description:
        "An exceptional day for photographing owls in the wild! After days of snow and cold, the owls were very active and obviously hungry, taking to the air in the afternoon (generally they take to the air around dusk). In the area there were about twenty owls , with as many as ten visible at one time.",
      author: "@brock222",
      date: "January 18, 2018",
      link: "https://unsplash.com/photos/xWQcud4Xtr4"
    },
    {
      src: "./imgs/5.webp",
      description: "",
      author: "@zmachacek",
      date: "March 22, 2019",
      link: "https://unsplash.com/photos/oqYHtXrLXLo"
    },
    {
      src: "./imgs/6.webp",
      description: "",
      author: "@sneha_snaps",
      date: "May 29, 2019",
      link: "https://unsplash.com/photos/NOWC4AtCIC4"
    },
    {
      src: "./imgs/7.webp",
      description: "",
      author: "@zmachacek",
      date: "March 3, 2019",
      link: "https://unsplash.com/photos/QU8sVc_J_fI"
    },
    {
      src: "./imgs/8.webp",
      description: "Snowy owl Photo taken on photoworkshop. Animal in human care.",
      author: "@zmachacek",
      date: "February 28, 2019",
      link: "https://unsplash.com/photos/wKbuplZNaMY"
    }
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(photos)
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ msg: "You must be logged in to access this content. 🤷🏻‍♀️" })
  };
};
