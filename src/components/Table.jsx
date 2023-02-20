import NameContainer from "./NameContainer";

function Table() {
  const generateTable = (listOfNames) => {
    return listOfNames.map((name, index) => {
      return <NameContainer key={index} name={name} />;
    });
  };
  const listOfNames = [
    "Jeferson",
    "Lucas",
    "Nelsinho",
    "Eliane",
    "Emanuelle",
    "Thainara",
    "Helena",
    "Jackson",
    "Jeferson",
    "Lucas",
    "Nelsinho",
    "Eliane",
    "Emanuelle",
    "Thainara",
    "Helena",
    "Jackson",
    "Jeferson",
    "Lucas",
    "Nelsinho",
    "Eliane",
    "Emanuelle",
    "Thainara",
    "Helena",
    "Jackson",
    "Tuyane",
  ];

  return (
    <div className="main-container">
      <section className="names-container">
        {generateTable(listOfNames)}
      </section>
    </div>
  );
}

export default Table;
