exports.handler = async () => {
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
