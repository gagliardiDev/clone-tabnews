function status(request, response) {
  response.status(200).json({ message: "alunos do curso.dev são legais" });
}

export default status;
