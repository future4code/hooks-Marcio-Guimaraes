import { Request, Response } from "express";
import { table } from "../data";
export default function (
    req: Request,
    res: Response
) {
    res.send(table)
}