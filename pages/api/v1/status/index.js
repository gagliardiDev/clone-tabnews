import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("Select 1 + 1 as sum;");
  console.log(result);
  response.status(200).json({ message: "alunos do curso.dev são legais" });
}

export default status;
