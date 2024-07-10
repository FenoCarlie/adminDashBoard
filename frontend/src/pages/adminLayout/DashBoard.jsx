import Table from "../../components/common/Table";

function DashBoard() {
  const headers = ["Id", "Nom", "Email", "Téléphone"];
  const data = [
    ["1", "Jane Smith", "jane@example.com", "098-765-4321"],
    ["2", "Jane Smith", "jane@example.com", "098-765-4321"],
    ["3", "Jane Smith", "jane@example.com", "098-765-4321"],
    ["4", "Jane Smith", "jane@example.com", "098-765-4321"],
    ["5", "John Doe", "john@example.com", "123-456-7890"],
    ["6", "Alice Johnson", "alice@example.com", "111-222-3333"],
    ["7", "Bob Brown", "bob@example.com", "444-555-6666"],
    ["8", "Charlie Black", "charlie@example.com", "777-888-9999"],
    ["9", "John Doe", "john@example.com", "123-456-7890"],
    ["10", "Jane Smith", "jane@example.com", "098-765-4321"],
    ["11", "Alice Johnson", "alice@example.com", "111-222-3333"],
    ["12", "Bob Brown", "bob@example.com", "444-555-6666"],
    ["13", "Charlie Black", "charlie@example.com", "777-888-9999"],
    ["14", "John Doe", "john@example.com", "123-456-7890"],
    ["15", "Jane Smith", "jane@example.com", "098-765-4321"],
    ["16", "Alice Johnson", "alice@example.com", "111-222-3333"],
    ["17", "Bob Brown", "bob@example.com", "444-555-6666"],
    ["18", "Charlie Black", "charlie@example.com", "777-888-9999"],
    ["19", "John Doe", "john@example.com", "123-456-7890"],
    ["20", "Jane Smith", "jane@example.com", "098-765-4321"],
    ["21", "Alice Johnson", "alice@example.com", "111-222-3333"],
    ["22", "Bob Brown", "bob@example.com", "444-555-6666"],
    ["23", "Charlie Black", "charlie@example.com", "777-888-9999"],
  ];
  return (
    <div className="p-3 overflow-auto h-full">
      <Table
        headers={headers}
        data={data}
        title="Utilisateurs"
        titleStyle="font-bold text-lg"
      />
    </div>
  );
}

export default DashBoard;
