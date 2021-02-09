import { Request, Response } from "express";
import { connect } from "../database";

//connect is the configuration to access to the DB
//this controllers are invoqued in base.routes.ts

//Async funtion to create food in the DB
export async function newOrder(req: Request, res: Response) {
  //   console.log(req.body);
  const desserts = req.body.app.desserts;
  const mains = req.body.app.mains;
  const drinks = req.body.app.drinks;
  const discount40 = req.body.app.discount40;
  const discount10 = req.body.app.discount10;
  const totalBill = req.body.app.totalBill;
  const totalTime = req.body.app.totalTime;
  const timeInit = req.body.app.timeInit;
  const timeEnd = req.body.app.timeEnd;
  const id = Date.now();
  let newOrder: any = {
    desserts: desserts,
    mains: mains,
    drinks: drinks,
    discount40: discount40,
    discount10: discount10,
    totalBill: totalBill,
    totalTime: totalTime,
    timeInit: timeInit,
    timeEnd: timeEnd,
    id: id,
  };
  const conn = await connect();
  newOrder = JSON.stringify(newOrder);
  const newId = JSON.stringify({ id: id });
  conn.query(`INSERT INTO orders SET ?`, { sentence: newOrder });
  console.log(req.body.email, id);
  await conn.query(
    'UPDATE users set orders = JSON_ARRAY_APPEND(orders, "$.id", ?) WHERE email = ? ',
    [id, req.body.email]
  );

  return res.json({ message: "Order created" });
}
