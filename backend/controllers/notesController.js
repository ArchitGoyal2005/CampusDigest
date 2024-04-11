import Notes from "../models/notesModel.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { createOne, getAll } from "./handlerFactory.js";

export const uploadFile = catchAsync(async (req, res, next) => {
  const fileLocalPath = req.file.path;

  if (!fileLocalPath) return next(new AppError("File is required", 400));

  const file = await uploadOnCloudinary(fileLocalPath);

  if (!file)
    return next(
      new AppError(
        "There was an error in uploading the file. Please try again!!",
        400
      )
    );

  req.body.fileLink = file;

  next();
});

export const setUploadedBy = (req, res, next) => {
  req.body.uploadedBy = req.user.id;
  next();
};

export const getAllNotes = getAll(Notes);
export const createANote = createOne(Notes);
