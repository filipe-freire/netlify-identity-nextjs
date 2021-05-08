exports.handler = async (event, context) => {
  const photos = [
    {
      src:
        "https://images.unsplash.com/uploads/141155339325423394b24/03982423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      description: "Chickadee on white",
      author: "@pbrandao",
      date: "September 24, 2014",
      link: "https://unsplash.com/photos/YLgTmdb7r1o"
    },
    {
      src:
        "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Robin Singing For Spring",
      author: "@janmeeus",
      date: "April 5, 2018",
      link: "https://unsplash.com/photos/7LsuYqkvIUM"
    },
    {
      src:
        "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80",
      description: "I like watching birds, especially in winter time. ",
      author: "@designbytholen",
      date: "October 30, 2019",
      link: "https://unsplash.com/photos/TBf7nD07dfc"
    },
    {
      src:
        "https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      description:
        "An exceptional day for photographing owls in the wild! After days of snow and cold, the owls were very active and obviously hungry, taking to the air in the afternoon (generally they take to the air around dusk). In the area there were about twenty owls , with as many as ten visible at one time.",
      author: "@brock222",
      date: "January 18, 2018",
      link: "https://unsplash.com/photos/xWQcud4Xtr4"
    },
    {
      src:
        "https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "",
      author: "@zmachacek",
      date: "March 22, 2019",
      link: "https://unsplash.com/photos/oqYHtXrLXLo"
    },
    {
      src:
        "https://images.unsplash.com/photo-1559152218-5991d972f360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "",
      author: "@sneha_snaps",
      date: "May 29, 2019",
      link: "https://unsplash.com/photos/NOWC4AtCIC4"
    },
    {
      src:
        "https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=956&q=80",
      description: "",
      author: "@zmachacek",
      date: "March 3, 2019",
      link: "https://unsplash.com/photos/QU8sVc_J_fI"
    },
    {
      src:
        "https://images.unsplash.com/flagged/photo-1551337213-0b69f29206e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
