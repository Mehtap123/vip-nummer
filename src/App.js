import "./App.css";

function App() {
  let list = [
    {
      id: "1",
      name: "Peter Meister",
      telefonnummer: "+492103777123",
      isVIP: true,
    },
    {
      id: "3",
      name: "Gustavo Mxkay",
      telefonnummer: "004915845554441",
      isVIP: true,
    },
    {
      id: "10",
      name: "Megan Nash",
      telefonnummer: "014789911543",
      isVIP: true,
    },
    {
      id: "17",
      name: "Ingrid Nicholson",
      telefonnummer: "+420507986521",
      isVIP: false,
    },
    {
      id: "23",
      name: "Brynlee Summers",
      telefonnummer: "067841887614",
      isVip: false,
    },
    {
      id: "9",
      name: "Gunnar Montgomery",
      telefonnummer: "+496874519741",
      isVIP: false,
    },
    {
      id: "2",
      name: "Amy Estrada",
      telefonnummer: "005512547773195",
      isVIP: true,
    },
    {
      id: "9",
      name: "Chace West",
      telefonnummer: "+491798567105",
      isVIP: true,
    },
    {
      id: "3",
      name: "Skyler Valenzuela",
      telefonnummer: "00499164223412",
      isVIP: true,
    },
    {
      id: "11",
      name: "Donald Bowers",
      telefonnummer: "012358001040",
      isVIP: false,
    },
    {
      id: "12",
      name: "Madeleine Salas",
      telefonnummer: "+4915512020443",
      isVIP: false,
    },
    {
      id: "24",
      name: "Joe Carpenter",
      telefonnummer: "+326564789987432",
      isVIP: true,
    },
    {
      id: "28",
      name: "Aiden Waters",
      telefonnummer: "0578914785293",
      isVIP: false,
    },
  ];

  let modifiedList = list.map((item) => {
    // console.log(item)
    if (item.telefonnummer.startsWith("+")) {
      return {
        id: item.id,
        name: item.name,
        telefonnummer: item.telefonnummer.slice(7),
        isVIP: item.isVIP,
      };
    } else if (item.telefonnummer.startsWith("00")) {
      return {
        id: item.id,
        name: item.name,
        telefonnummer: item.telefonnummer.slice(8),
        isVIP: item.isVIP,
      };
    } else if (item.telefonnummer.startsWith("0")) {
      return {
        id: item.id,
        name: item.name,
        telefonnummer: item.telefonnummer.slice(5),
        isVIP: item.isVIP,
      };
    }
  });
  console.log(modifiedList);
  return (
    <>
      <h1>VIP-Telefonnummer</h1>

      <p>Alle Accounts mir einer VIP-Telefonnummer:</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Telefonnummer</th>
          </tr>
        </thead>

        {modifiedList.map((object, index) => {
          if (object.isVIP === true) {
            return (
              <tbody>
                <tr key={index}>
                  <td>{object.id}</td>
                  <td>{object.name}</td>
                  <td>{object.telefonnummer}</td>
                </tr>
              </tbody>
            );
          }
        })}
      </table>
    </>
  );
}

export default App;
