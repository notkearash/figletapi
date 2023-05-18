import figletControllers from '../controllers/figlet';
import express, { Router, Request, Response } from "express";

export const router: Router = express.Router();
router.get('/:text', figletControllers.getClassic)
router.get('/ghost/:text', figletControllers.getGhost);
