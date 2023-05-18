import figlet from 'figlet';
import { Request, Response } from "express";

const getClassic = (req: Request, res: Response): void => {
  figlet(req.params.text, function (err: any, data: any): void {
    if (err) {
      res.send("Something went wrong...");
      res.send(err);
      return;
    }
    res.send(data);
  });
}

const getGhost = (req: Request, res: Response): void => {
    figlet.text(
        req.params.text,
        {
          font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        },
        function (err, data) {
          if (err) {
            res.send("Something went wrong...");
            res.send(err);
            return;
          }
          res.send(data);
        }
      );
}

export default {
    getClassic,
    getGhost
};
