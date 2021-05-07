exports.handler = async () => {
  console.log("function ran");

  const data = {
    name: "testing",
    age: 67,
    job: "testing"
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
