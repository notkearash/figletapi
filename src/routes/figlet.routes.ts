import figletControllers from '../controllers/figlet';
import express, { Router, Request, Response } from "express";

export const router: Router = express.Router();
router.get('/', figletControllers.getClassic);
router.get('/:font/', figletControllers.getCustom);
