import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "error in connecting to DB" });
  }

  if ((req.method = "POST")) {
    const data = req.body.data;
    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "invalid data" });
    try {
      const customer = await Customer.create(data);
      res.status(201).json({
        status: "success",
        message: "data created",
        data: customer,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: "failed", message: "error in storing data in DB" });
    }
  }
}
