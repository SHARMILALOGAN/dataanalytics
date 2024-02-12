// const userModel = require('../models/userModel');

// // Controller for user registration
// const registerController = async (req, res) => {
//   try {
//     // Create a new user object with the required fields
//     const newUser = new userModel({
//       d_name: req.body.d_name,
//       d_plate: req.body.d_plate,
//       d_date: req.body.d_date,
//       d_start_time: req.body.d_start_time,
//       d_end_time: req.body.d_end_time,
//       d_start_location: req.body.d_start_location[0],
//       d_end_location: req.body.d_end_location[0],
//       d_gender: req.body.d_gender[0],
//       d_age: req.body.d_age,
//       d_count: req.body.d_count,
//       d_pay: req.body.d_pay[0],
//       d_paymentAmount: req.body.d_paymentAmount,
//     });

//     // Attempt to save the document
//     await newUser.save();
//     res.status(201).send({
//       message: 'Registered Successfully',
//       success: true,
//     });
//   } catch (error) {
//     console.error('Error in registerController:', error);
//     res.status(500).send({
//       success: false,
//       message: 'Register controller',
//     });
//   }
// };

// module.exports = { registerController };

const userModel = require('../models/userModel');

// Controller for user registration
const registerController = async (req, res) => {
  try {
    // Create a new user object with the required fields
    const newUser = new userModel({
      d_vehicleid: req.body.d_vehicleid,
      d_vehicletype: req.body.d_vehicletype,
      d_source: req.body.d_source[0],
      d_destination: req.body.d_destination[0],
      d_year: req.body.d_year,
      d_time: req.body.d_time,
      d_tollid1: req.body.d_tollid1,
      d_tollid2: req.body.d_tollid2,
      d_tollid3: req.body.d_tollid3,
      d_amtoll1: req.body.d_amtoll1,
      d_amtoll2: req.body.d_amtoll2,
      d_amtoll3: req.body.d_amtoll3,
      d_total: req.body.d_total,
      
    });

    // Attempt to save the document
    await newUser.save();
    res.status(201).send({
      message: 'Registered Successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error in registerController:', error);
    res.status(500).send({
      success: false,
      message: 'Register controller',
    });
  }
};

module.exports = { registerController };

