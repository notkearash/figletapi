import figlet, { Fonts } from 'figlet';
import { Request, Response } from "express";

const getClassic = (req: Request, res: Response): void => {
  figlet(req.body.text, function (err: any, data: any): void {
    if (err) {
      res.send("Something went wrong...");
      res.send(err);
      return;
    }
    res.send(data);
  });
}

const getCustom = (req: Request, res: Response) => {
  const fontParam = req.params.font as Fonts

  figlet.text(
    req.body.text,
    { font: fontParam },
    function (err, data) {
      if (err) {
        res.send("Something went wrong...");
        return;
      }
      res.send(data);
    }
  )
}

export default {
  getClassic,
  getCustom
};
