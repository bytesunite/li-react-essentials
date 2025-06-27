async function getData() {
  const res = await fetch('https://snowtooth-api-rest.fly.dev');
  return res.json();
}

export default async function Page(){
  const data = await getData();

  return (
    <main>
      <h1>Lift status info</h1>
      <table>
        <thead>
          <tr>
            <th className="text-left">Lift Name</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody className="bg-slate-500">
          {data.map(lift => (
            <tr key={lift.id} className="border border-solid border-black">
              <td className="px-1">{lift.name}</td>
              <td className="px-1">{lift.status}</td>
            </tr>
          ) )}
        </tbody>
      </table>
    </main>
  );
}