import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

// router.get('/', getAllJobs);

router.route("/").get(getAllJobs).post(createJob);
router.route("/:").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
