type Params = {
  name: string
}
export default function Reader(params: Params) {
  return (
    <div className="font-bold text-5xl mx-auto text-center">
      Hello from Reader {params.name}
    </div>
  );
}
