exports.handler = async (event, context) => {
  const guides = [
    {
      title: "How to achieve 100% completion in Skyrim",
      author: "Filipe"
    },
    {
      title: "How to achieve 100% completion in GTAV",
      author: "Filipe the II"
    },
    {
      title: "How to achieve 100% completion in RDR2",
      author: "Filipe the III"
    }
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides)
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ msg: "You must be logged in to access this content. 🤷🏻‍♀️" })
  };
};
