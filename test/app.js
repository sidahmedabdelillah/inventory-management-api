const client = $('#client');

const bla = () => {
  axios.get('http://localhost:3000/api/v1/client/').then(({ data }) => {
    data.forEach((element) => {
      const row = `<li>${element.designation}</li>`;
      client.append(row);
    });
  });
};

bla();
