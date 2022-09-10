export default function webhookhandler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
  }
}
